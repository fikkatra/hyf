function getEventWeekday(days) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDay = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    const eventDay = (currentDay + days) % 7;
    return weekdays[eventDay];
}

console.log(getEventWeekday(1)); 
console.log(getEventWeekday(3));
console.log(getEventWeekday(11)); 