export interface Task {
    applicationId: string;
    institutionId: string;
    classId: string;
    studentId: string;
    studentName: string;
    taskId: string;
    timeSpent: number;
    status: 'not_started' | 'in_progress' | 'error' | 'completed';
    needsAssistance: boolean;
}

export interface ClassData {
    classId: string;
    date: string;
    completed: number;
    notStarted: number;
    inProgress: number;
    inProgressTasks?: {
        taskId: string;
        taskName: string;
        timeSpent: number;
    }[]
}

export interface StudentIdle {
    classId: string;
    studentId: string;
    studentName: string;
    timeLapsed: number
}