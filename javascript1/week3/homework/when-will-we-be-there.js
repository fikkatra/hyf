function calculateTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
