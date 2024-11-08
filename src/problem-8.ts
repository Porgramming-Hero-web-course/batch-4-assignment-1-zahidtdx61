{
  const validateKeys = <T extends object, X extends string|number>(obj: T, keys: X[]): boolean => {
    for (let key of keys) {
      if (!(key in obj)) return false;
    }

    return true;
  };

}
