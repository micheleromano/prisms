import React, { useState } from 'react';

import { useRealTimeTasks } from './realTimeTasks';
import { useRealTimeStudentIdle } from './realTimeStudentIdle';
import Chart from 'react-google-charts';
import { useTranslation } from 'react-i18next';
import { type Task } from './types';
import { useHistoricalClassData } from './historicalClassData';
import { CardContent, CardHeader, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';

export function Dashboard() {
    const { t, ready } = useTranslation();

    if (!ready) return 'Loading translations...'

    return (
        <Grid container p={3} spacing={2}>
            <Grid size={12}>
                <Typography variant="h1" sx={{ fontSize: '2rem' }}>{t('teacherDashboard')}</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <RealTimeAssistance />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <RealTimeStudentIdle />
            </Grid>
            <Grid size={12}>
                <RealTimeTasks status="in_progress" />
            </Grid>
            <Grid size={12}>
                <RealTimeTasks status="not_started" />
            </Grid>
            <Grid size={12}>
                <HistoricalClassDataChart />
            </Grid>
        </Grid>
    )
}

function RealTimeAssistance() {
    const { t } = useTranslation();
    const { realTimeTasks, isLoading, error } = useRealTimeTasks('classId'); // should have an option to select a classId
    if (isLoading) return 'Loading...';

    const chartData = [
        ['Student', 'Time Spent'],
        ...realTimeTasks.filter(task => task.needsAssistance).sort((a, b) => b.timeSpent - a.timeSpent).map(task => [task.studentName, task.timeSpent])

    ]

    if (chartData.length === 0) return null;

    return (
        <>
            <Typography variant="h2" sx={{ fontSize: '1.5rem' }}>{t('realTimeAssistance')}</Typography>
            <Chart
                chartType='Table'
                data={chartData}
            />
        </>
    )
}

function RealTimeStudentIdle() {
    const { t } = useTranslation();
    const { realTimeStudentIdle, isLoading, error } = useRealTimeStudentIdle('classId'); // should have an option to select a classId
    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred';

    const chartData = [
        ['Student', 'Time Lapsed (s)'],
        ...realTimeStudentIdle.map((student) => [student.studentName, student.timeLapsed]),
    ];
    if (chartData.length === 0) return null;
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant='h2' sx={{ fontSize: '1.5rem' }}>{t('realTimeStudentsIdle')}</Typography>
                <Chart
                    chartType="BarChart"
                    data={chartData}
                    options={{
                        title: t('timeSpent'),
                        hAxis: { title: 'Time Lapsed' },
                        vAxis: { title: 'Student' }
                    }}
                />
            </CardContent>
        </Card>)
}

function RealTimeTasks({ status }: { status: 'in_progress' | 'not_started' }) {
    const { t } = useTranslation();
    const { realTimeTasks, isLoading, error } = useRealTimeTasks('classId'); // should have an option to select a classId
    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred';

    const chartData = [
        ['Student', 'Time Spent'],
        ...realTimeTasks.filter(task => task.status === status)
            .map((task) => [`${task.studentName} ${task.taskId}`, task.timeSpent]),
    ];
    if (chartData.length === 0) return null;
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h2" sx={{ fontSize: '1.5rem' }}>{t('realTimeTasksBarChart')} - {status === 'in_progress' ? "In Progress" : "Not Started"}</Typography>
                <Chart
                    chartType="BarChart"
                    data={chartData}
                    options={{
                        title: `${t('timeSpent')} ${status}`,
                        hAxis: { title: 'Time Spent' },
                        vAxis: {
                            title: 'Student and Task',
                            slantedText: true,
                            slantedTextAngle: 45,
                        },
                        bar: { groupWidth: '70%' },
                    }}
                />
            </CardContent>
        </Card>)
}

function HistoricalClassDataChart() {
    const { t, ready } = useTranslation();
    const [selectedClassId, setSelectedClassId] = useState('class101');
    const { isLoading, historicalClasses, error } = useHistoricalClassData('class101');
    if (isLoading) return 'Loading...';

    if (!ready) return 'Loading translations...'

    if (error) return 'An error has occurred';

    const chartData = [
        ['Date', 'Completed', 'Not Started', 'In Progress'],
        ...historicalClasses.filter(historicalClass => historicalClass.classId === selectedClassId).map((classData) => [
            new Date(classData.date),
            classData.completed,
            classData.notStarted,
            classData.inProgress,
        ]),
    ];

    const options = {
        title: `Class History for class101`,
        hAxis: { title: 'Date', format: 'yyyy-MM-dd' },
        vAxis: { title: 'Number of Tasks' },
        curveType: 'function',
        legend: { position: 'bottom' },
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <FormControl fullWidth>
                    <InputLabel id="classSelectLabel">Select Class</InputLabel>
                    <Select
                        labelId="classSelectLabel"
                        id="classSelect"
                        value={selectedClassId}
                        label="Select Class"
                        onChange={(e) => setSelectedClassId(e.target.value)}
                    >
                        <MenuItem value="class101">Class 101</MenuItem>
                        <MenuItem value="class201">Class 201</MenuItem>
                    </Select>
                </FormControl>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={chartData}
                    options={options}
                />
            </CardContent>
        </Card>
    );
}
