function getCharacterFrequencies(str) {
  const characters = {};
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const characterIndex = characters.findIndex(
      (item) => item.character === character
    );
    if (characterIndex === -1) {
      characters.push({ character, count: 1 });
    } else {
      characters[characterIndex].count++;
    }
  }
  return { characters, length: str.length };
}

console.log(getCharacterFrequencies("happy"));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
