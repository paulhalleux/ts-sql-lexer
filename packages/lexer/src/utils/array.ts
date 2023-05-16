export function findLastIndex<T>(array: T[], predicate: (value: T) => boolean) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
}

export function findLast<T>(array: T[], predicate: (value: T) => boolean) {
  const index = findLastIndex(array, predicate);

  if (index === -1) {
    return undefined;
  }

  return array[index];
}
