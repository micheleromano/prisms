import { useQuery } from '@tanstack/react-query';
import { type StudentIdle } from './types';

// The real time student idle will call the data in DynamoDB that stores
// current the last time a student made an action
export const useRealTimeStudentIdle = (classId: string) => {
    // return useQuery<Task[], Error>({
    //     queryKey: [], // we don't want any caching
    //     queryFn: async () => {
    //         const response = await fetch(`/api/classes/${classId}/realTimeStudentIdle`);
    //         if (!response.ok) {
    //             throw new Error('There was a problem with the request')
    //         }
    //         return response.json();
    //     }
    // })
    return {
        realTimeStudentIdle: realTimeStudentIdleData,
        isLoading: false,
        error: false
    };
}

const realTimeStudentIdleData: StudentIdle[] = [
    {
        classId: "math101",
        studentId: "user123",
        studentName: "Lindsay Weir",
        timeLapsed: 10
    },
    {
        classId: "math101",
        studentId: "user123",
        studentName: "Ken Miller",
        timeLapsed: 65
    },
    {
        classId: "math101",
        studentId: "user123",
        studentName: "Nick Andopolis",
        timeLapsed: 420
    },
    {
        classId: "math101",
        studentId: "user123",
        studentName: "Daniel Desario",
        timeLapsed: 98
    }
]