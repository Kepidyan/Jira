const issueTypes = [
    {
        value: 'bug',
        label: 'Bug',
    },
    {
        value: 'task',
        label: 'Task',
    },
    {
        value: 'story',
        label: 'Story',
    },
];

const priority = [
    {
        value: 'high',
        label: 'High'
    },
    {
        value: 'highest',
        label: 'Highest'
    },
    {
        value: 'medium',
        label: 'Medium'
    },
    {
        value: 'low',
        label: 'Low'
    },
    {
        value: 'lowest',
        label: 'Lowest'
    }
];

const taskStatus = { 
    TODO: {
        key: '0',
        title: 'Todo'
    },
    IN_PROGRESS: {
        key: '1',
        title: 'In Progress'
    },
    TEST: {
        key: '2',
        title: 'Test'
    },
    DONE: {
        key: '3',
        title: 'Done'
    },
}

export {
    issueTypes, priority, taskStatus
}

