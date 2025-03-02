function getSentimentScore(sentence) {
  const positiveWords = ["happy", "awesome", "super"];
  const negativeWords = ["sad", "bad", "not"];

  const words = sentence.split(" ");
  let score = 0;
  const positiveWordsInSentence = [];
  const negativeWordsInSentence = [];

  for (let word of words) {
    if (positiveWords.includes(word)) {
      score += 1;
      positiveWordsInSentence.push(word);
    } else if (negativeWords.includes(word)) {
      score -= 1;
      negativeWordsInSentence.push(word);
    }
  }

  return {
    score,
    positiveWords: positiveWordsInSentence,
    negativeWords: negativeWordsInSentence,
  };
}

const sentimentScoreObject = getSentimentScore("I am mega super awesome happy");

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
