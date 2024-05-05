// Function to get the day of the week
function getDayOfWeek(day) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (daysOfWeek[day] === undefined){
        return 'Sunday' //dumb fix for breakage on Sunday
    } else {
        return daysOfWeek[day];
    }
}

// Function to get the current time
function getTime() {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const dayOfWeek = getDayOfWeek(now.getDay() - 1);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return [`${dayOfWeek}, ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`];
}

// Function to update the time display
function updateTime() {
    time = getTime();
    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = time[0];
}

document.addEventListener('DOMContentLoaded', updateTime());

setInterval(updateTime, 500);