const sequence = [
  25,
  14,
  5,
  10,
  11,
  24,
  15,
  17,
  19,
  12,
  20,
  23,
  81,
  6,
  16,
  13,
  9,
  8,
  21,
  22,
  7,
  18,
  29,
  73,
];

console.log(sequence);

const alternateValues = (currentSequence, currentPosition) => {
  const currentValue = currentSequence[currentPosition];
  const beforeValue = currentSequence[currentPosition - 1];

  if (currentValue <= beforeValue) {
    currentSequence[currentPosition] = beforeValue;
    currentSequence[currentPosition - 1] = currentValue;

    if (currentPosition >= 1) {
      currentSequence = alternateValues(currentSequence, currentPosition - 1);
    }
  }

  return currentSequence;
};

const sortSequence = (initialSequence) => {
  let sortedSequence;
  let currentPosition = 1;

  for (
    currentPosition;
    currentPosition < initialSequence.length;
    currentPosition++
  ) {
    sortedSequence = alternateValues(initialSequence, currentPosition);
  }

  return sortedSequence;
};

console.log(sortSequence(sequence));
