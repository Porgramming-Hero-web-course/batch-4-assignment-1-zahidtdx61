{
  const removeDuplicates = (arr: number[]): number[] => {
    let uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index);
    return uniqueArr;
  };
}
