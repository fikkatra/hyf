const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

const averageLifeSpanYears = 80;

function logTimeSpentOnSeries() {
  let totalPercentage = 0;
  for (let series of seriesDurations) {
    const hoursInMinutes = series.hours * 60;
    const daysInMinutes = series.days * 24 * 60;
    const totalMinutes = series.minutes + hoursInMinutes + daysInMinutes;

    const lifeInMinutes = averageLifeSpanYears * 365 * 24 * 60;
    const percentage = (totalMinutes / lifeInMinutes) * 100;

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
    totalPercentage += percentage;
  }
  console.log(`\nIn total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logTimeSpentOnSeries();
