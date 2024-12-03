import { useQuery } from '@tanstack/react-query';
import { Task } from './types';

// The real time student tasks will call the data in something like DynamoDB that stores
// current data and it will query on an interval to update the UI every few seconds
export const useRealTimeTasks = (classId: string) => {
    // return useQuery<Task[], Error>({
    //     queryKey: [], // we don't want any caching
    //     queryFn: async () => {
    //         const response = await fetch(`/api/classes/${classId}/realTimeTasks`);
    //         if (!response.ok) {
    //             throw new Error('There was a problem with the request')
    //         }
    //         return response.json();
    //     }
    // })
    return {
        realTimeTasks: realTimeTaskData,
        isLoading: false,
        error: false
    };
}


const realTimeTaskData: Task[] = [
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Miss Foote',
        studentId: 'user123',
        studentName: 'Lindsay Weir',
        taskId: 'calculus',
        timeSpent: 10,
        status: 'not_started',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Miss Foote',
        studentId: 'user123',
        studentName: 'Ken Miller',
        taskId: 'calculus',
        timeSpent: 30,
        status: 'not_started',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Miss Foote',
        studentId: 'user123',
        studentName: 'Nick Andopolis',
        taskId: 'calculus',
        timeSpent: 180,
        status: 'not_started',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Miss Foote',
        studentId: 'user123',
        studentName: 'Daniel Desario',
        taskId: 'calculus',
        timeSpent: 75,
        status: 'not_started',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Miss Foote',
        studentId: 'user123',
        studentName: 'Lindsay Weir',
        taskId: 'calculus',
        timeSpent: 180,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Miss Foote',
        studentId: 'user123',
        studentName: 'Lindsay Weir',
        taskId: 'functions',
        timeSpent: 60,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'history101',
        institutionId: 'school1',
        classId: 'Frank Kowchevski',
        studentId: 'user123',
        studentName: 'Lindsay Weir',
        taskId: 'Canadian',
        timeSpent: 120,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'history101',
        institutionId: 'school1',
        classId: 'Frank Kowchevski',
        studentId: 'user456',
        studentName: 'Daniel Desario',
        taskId: 'American',
        timeSpent: 60,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'history101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user456',
        studentName: 'Daniel Desario',
        taskId: 'American',
        timeSpent: 90,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user789',
        studentName: 'Ken Miller',
        taskId: 'functions',
        timeSpent: 300,
        status: 'in_progress',
        needsAssistance: true,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user789',
        studentName: 'Ken Miller',
        taskId: 'calculus',
        timeSpent: 200,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user101',
        studentName: 'Nick Andopolis',
        taskId: 'music101',
        timeSpent: 45,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user101',
        studentName: 'Nick Andopolis',
        taskId: 'calculus',
        timeSpent: 500,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user112',
        studentName: 'Sam Weir',
        taskId: 'functions',
        timeSpent: 240,
        status: 'in_progress',
        needsAssistance: true,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user112',
        studentName: 'Sam Weir',
        taskId: 'science101',
        timeSpent: 100,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user113',
        studentName: 'Neal Schweiber',
        taskId: 'science101',
        timeSpent: 90,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user113',
        studentName: 'Neal Schweiber',
        taskId: 'english101',
        timeSpent: 150,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user114',
        studentName: 'Bill Haverchuck',
        taskId: 'history101',
        timeSpent: 120,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user114',
        studentName: 'Bill Haverchuck',
        taskId: 'math101',
        timeSpent: 60,
        status: 'completed',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user115',
        studentName: 'Kim Kelly',
        taskId: 'english101',
        timeSpent: 150,
        status: 'in_progress',
        needsAssistance: false,
    },
    {
        applicationId: 'math101',
        institutionId: 'school1',
        classId: 'Jeff Rosso 1',
        studentId: 'user115',
        studentName: 'Kim Kelly',
        taskId: 'art101',
        timeSpent: 300,
        status: 'in_progress',
        needsAssistance: true,
    },
];