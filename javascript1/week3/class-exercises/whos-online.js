// https://www.codewars.com/kata/whos-online/train/javascript

// They are using an arrow function here, which we have not covered yet
// For now it's fine to assume that:
// const whosOnline = (friends) => {
// is the same as:
// function whosOnline(friends) {
const whosOnline = (friends) => {
  const offline = [];
  const online = [];
  const away = [];
  
  for (let friend of friends) {
    if (friend.status === "offline") {
      offline.push(friend.username);
    } else if (friend.lastActivity > 10) {
      away.push(friend.username);
    } else {
      online.push(friend.username);
    }
  }

  const result = {};
  if (online.length > 0) {
    result.online = online;
  }
  if (offline.length > 0) {
    result.offline = offline;
  }
  if (away.length > 0) {
    result.away = away;
  }

  return result;
};
