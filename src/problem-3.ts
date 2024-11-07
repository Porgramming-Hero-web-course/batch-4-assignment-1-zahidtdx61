{
  const countWordOccurrences = (sentence: string, word: string): number => {
    sentence = sentence.toLowerCase();

    let count: number = 0;
    let index = sentence.indexOf(word);

    while (index !== -1) {
      count++;
      index = sentence.indexOf(word, index + 1);
    }

    return count;
  };
}
