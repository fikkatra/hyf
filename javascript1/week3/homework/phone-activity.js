const activities = [];
const limit = 100;

function addActivity(date, activity, duration) {
  if (
    typeof date !== "string" ||
    typeof activity !== "string" ||
    typeof duration !== "number"
  ) {
    console.log(
      "Invalid input. Date should be a string, activity should be a string and duration should be a number"
    );
    return;
  }
  activities.push({ date, activity, duration });
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 55);

function showStatus(activities, limit) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  let totalDuration = 0;
  for (let activity of activities) {
    totalDuration += activity.duration;
  }
  if (totalDuration >= limit) {
    console.log("You have reached your limit, no more smartphoning for you");
  } else {
    console.log(
      `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`
    );
  }
}

showStatus(activities, limit);

// Extra feature
function showActivities(activities) {
  for (let activity of activities) {
    console.log(
      `Date: ${activity.date}, Activity: ${activity.activity}, Duration: ${activity.duration}`
    );
  }
}

showActivities(activities);

// Optional
console.log("------------- Optional ----------------");
const activitiesOptional = [];
function improvedAddActivity(activity, duration) {
  if (typeof activity !== "string" || typeof duration !== "number") {
    console.log(
      "Invalid input. Date should be a string, activity should be a string and duration should be a number"
    );
    return;
  }
  activitiesOptional.push({ date: new Date(), activity, duration });
}

improvedAddActivity("Youtube", 30);
improvedAddActivity("Instagram", 55);

function improvedShowStatus(activities, limit) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  let totalDurationForToday = 0;
  const today = new Date();
  for (let activity of activities) {
    if (
      activity.date.getDate() === today.getDate() &&
      activity.date.getMonth() === today.getMonth() &&
      activity.date.getFullYear() === today.getFullYear()
    ) {
      totalDurationForToday += activity.duration;
    }
  }
  if (totalDurationForToday >= limit) {
    console.log(
      "You have reached your daily limit, no more smartphoning for you"
    );
  } else {
    console.log(
      `You have added ${activities.length} activities today. They amount to ${totalDurationForToday} min. of usage`
    );
  }
}

improvedShowStatus(activitiesOptional, limit);

function getFavouriteActivity(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling getFavouriteActivity");
    return;
  }
  let maxDuration = 0;
  let favouriteActivity = "";
  for (let activity of activities) {
    if (activity.duration > maxDuration) {
      maxDuration = activity.duration;
      favouriteActivity = activity.activity;
    }
  }
  console.log(`Your favourite activity is ${favouriteActivity}`);
}

getFavouriteActivity(activitiesOptional);
