document.addEventListener('DOMContentLoaded', function() {
    fetch('https://your-orkes-api.com/api/human/tasks/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_TOKEN' // Replace with your API token
        },
        body: JSON.stringify({
            "size": 20,
            "states": ["IN_PROGRESS", "PENDING", "ASSIGNED"],
            "taskOutputQuery": "",
            "taskInputQuery": "",
            "fullTextQuery": "",
            "definitionNames": [],
            "taskRefNames": [],
            "displayNames": ["Expense Approval"],
            "claimants": [],
            "assignees": [],
            "workflowIds": [],
            "start": 0
        })
    })
    .then(response => response.json())
    .then(data => {
        const tasksElement = document.getElementById('tasks');
        let tasksText = '';
        data.results.forEach(task => {
            tasksText += `Task ID: ${task.taskId}\n`;
            tasksText += `State: ${task.state}\n`;
            tasksText += `DisplayName: ${task.displayName}\n\n`;
        });
        tasksElement.innerText = tasksText;
    })
    .catch(error => console.error('Error fetching tasks:', error));
});
