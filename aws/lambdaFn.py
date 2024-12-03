import json
import boto3
from datetime import datetime

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('real_time_class_tasks')

def lambda_handler(event, context):
    """
    Lambda function to process SQS messages, apply state machine logic,
    and store data in DynamoDB.

    Args:
      event: The event data from SQS, containing the messages.
      context: The Lambda function context.
    """

    for record in event['Records']:
        try:
            # Parse the message body (assuming it's JSON)
            message_body = json.loads(record['body'])

            # Extract relevant data from the message
            user_id = message_body['UserID']
            application_id = message_body['ApplicationID']
            institution_id = message_body['InstitutionID']
            class_id = message_body['ClassID']
            task_id = message_body['TaskID']
            action_id = message_body['ActionID']
            timestamp = message_body['Timestamp']

            # Get existing record from DynamoDB (if any)
            response = table.get_item(
                Key={
                    'applicationId': application_id,
                    'classId': class_id,
                    'studentId': user_id,
                    'taskId': task_id
                }
            )
            existing_record = response.get('Item')

            state_machine = StateMachine(existing_record) 

            state_machine.process_action(action_id, timestamp)

            status = state_machine.current_state
            time_spent = state_machine.time_spent

            # Apply business rule for needsAssistance - could use the slowest % or a threshold
            needs_assistance = time_spent > 60

            # Transform the data into the DynamoDB record format
            dynamodb_record = {
                'applicationId': application_id,
                'institutionId': institution_id,
                'classId': class_id,
                'studentId': user_id,
                'studentName': get_student_name(user_id),
                'taskId': task_id,
                'timeSpent': time_spent,
                'status': status,
                'needsAssistance': needs_assistance,
                'Timestamp': timestamp
            }

            # Store the record in DynamoDB
            table.put_item(Item=dynamodb_record)

        except Exception as e:
            print(f"Error processing message: {e}")

    return {
        'statusCode': 200,
        'body': 'Messages processed successfully.'
    }

# Example State Machine class (replace with your actual state machine logic)
class StateMachine:
    def __init__(self, existing_record=None):
        self.current_state = 'not_started'
        self.time_spent = 0
        self.start_time = None
        if existing_record:
            self.current_state = existing_record.get('status', 'not_started')
            self.time_spent = existing_record.get('timeSpent', 0)
            self.start_time = existing_record.get('Timestamp', None)

    def process_action(self, action_id, timestamp):
        if self.current_state == 'not_started' and action_id == 'start_task':
            self.current_state = 'in_progress'
            self.start_time = timestamp
        elif self.current_state == 'in_progress' and action_id == 'complete_task':
            self.current_state = 'completed'
            if self.start_time:
                self.time_spent += timestamp - self.start_time
            self.start_time = None  # Reset start_time for the next task
        # ... add more state transitions and time calculation logic ...

def get_student_name(user_id):
    """
    Fetches the student name based on the UserID.
    
    Args:
      user_id: The UserID from the SQS message.

    Returns:
      The student name as a string.
    """
    return 'Unknown' 