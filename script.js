document.addEventListener('DOMContentLoaded', function() {
    fetch('https://developer.orkescloud.com/api/human/tasks/getTaskDisplayNames?searchType=ADMIN', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtqbVlNWThEV2VOU1lKZmZSSjFXNSJ9.eyJuaWNrbmFtZSI6Inpzb2x0Lm5hZGFzIiwibmFtZSI6Inpzb2x0Lm5hZGFzQGFsZWF0b3JpY3NvbHV0aW9ucy5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNTQ5ZDdmOTFlYzkyNzJhNTMyNGFjMDE4M2ZkYzU4ZWU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZ6cy5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNS0wNC0xNVQxMjozMjo0My4yMjZaIiwiZW1haWwiOiJ6c29sdC5uYWRhc0BhbGVhdG9yaWNzb2x1dGlvbnMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vYXV0aC5vcmtlcy5pby8iLCJhdWQiOiJNeUhKWXVUc3FOTDhEYUxJR3dvdTZmU2F4ekYzVEZyVyIsInN1YiI6ImF1dGgwfDY3ZmU1MTUzMzU1OTk0ZTQyODQ4OTFiYyIsImlhdCI6MTc0NDcyMDM2NCwiZXhwIjoxNzQ0NzU2MzY0LCJzaWQiOiI2dnl2dS1Vd0d5U1pJZjhNbHFEQ05hRjVBOWtnR2hLUiIsIm5vbmNlIjoiVURaTVZWQTFXbmhrTG5CR1NUbEtWM0ZyY0RSM1FXMUpWMVpZWDJwck5XOVpPSEpWWHpaeU9IVnBlZz09In0.akJuS3wA2i9ZKYlFu5AETek7f5hg-NgoS-SnVAccy_p4kQsviCR658wfbzXK6JYi-xqVuSQwGbpGoaAYLuL3qXuNVlzXb5iG6A49_uQ6SZS9VAudz-u2eBWaVvSJV065cKNH0XbuYwMGNSLH93sSiWHaSj1CqrUVqZcMqM8bPOG3glJfHMrBa0YzdzTSjLgXOxMO1JI9lozRKLurTiimReZ8zerOdPOgKJWbjlXRqKD9PzlkokpsDUxhQIBCqEgMYuKchZPNDluhJei6cHtHS7_XEoyZxxdPi4TiSFGA2OxS0UrqlfwT9ZvoXbNw9RK8ADhaC3eDSfyHykz0ByrPSA' // Replace with your API token
        }
    })
    .then(response => response.text())
    .then(data => {
        try {
            const parsedData = JSON.parse(data);
            const prettyJson = JSON.stringify(parsedData, null, 2); // Use 2 spaces for indentation
            const tasksElement = document.getElementById('tasks');
            tasksElement.innerText = prettyJson;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            const tasksElement = document.getElementById('tasks');
            tasksElement.innerText = data; // If parsing fails, display raw JSON
        }
    })
    .catch(error => console.error('Error fetching task display names:', error));
});
