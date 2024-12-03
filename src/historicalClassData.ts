import { useQuery } from '@tanstack/react-query';
import { type ClassData } from './types';

export const useHistoricalClassData = (classId: string) => {
    // return useQuery<HistoricalClassData, Error>({

    //     queryKey: ['historicalClassData', classId, date],
    //     queryFn: async () => {
    //         const response = await fetch(`/api/classes/${classId}/history?date=${date}`);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     },
    // });
    return {
        historicalClasses,
        isLoading: false,
        error: false
    };
};

const historicalClasses: ClassData[] = [
    { classId: 'class101', date: '2024-10-01', completed: 2, notStarted: 20, inProgress: 8, inProgressTasks: [{ taskId: '', taskName: '', timeSpent: 5 }] },
    { classId: 'class201', date: '2024-10-02', completed: 5, notStarted: 18, inProgress: 7 },
    { classId: 'class101', date: '2024-10-03', completed: 8, notStarted: 15, inProgress: 7 },
    { classId: 'class101', date: '2024-10-04', completed: 10, notStarted: 12, inProgress: 8 },
    { classId: 'class101', date: '2024-10-05', completed: 12, notStarted: 10, inProgress: 8 },
    { classId: 'class201', date: '2024-10-08', completed: 6, notStarted: 18, inProgress: 6 },
    { classId: 'class101', date: '2024-10-09', completed: 18, notStarted: 6, inProgress: 6 },
    { classId: 'class101', date: '2024-10-10', completed: 20, notStarted: 5, inProgress: 5 },
    { classId: 'class101', date: '2024-10-11', completed: 22, notStarted: 4, inProgress: 4 },
    { classId: 'class101', date: '2024-10-12', completed: 23, notStarted: 3, inProgress: 4 },
    { classId: 'class101', date: '2024-10-15', completed: 25, notStarted: 2, inProgress: 3 },
    { classId: 'class101', date: '2024-10-16', completed: 26, notStarted: 2, inProgress: 2 },
    { classId: 'class101', date: '2024-10-17', completed: 27, notStarted: 1, inProgress: 2 },
    { classId: 'class101', date: '2024-10-18', completed: 28, notStarted: 1, inProgress: 1 },
    { classId: 'class101', date: '2024-10-19', completed: 28, notStarted: 1, inProgress: 1 },
    { classId: 'class101', date: '2024-10-22', completed: 29, notStarted: 0, inProgress: 1 },
    { classId: 'class101', date: '2024-10-23', completed: 29, notStarted: 0, inProgress: 1 },
    { classId: 'class101', date: '2024-10-24', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-10-25', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-10-26', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-10-29', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-10-30', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-10-31', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-11-01', completed: 30, notStarted: 0, inProgress: 0 },
    { classId: 'class101', date: '2024-11-02', completed: 30, notStarted: 0, inProgress: 0 },
];