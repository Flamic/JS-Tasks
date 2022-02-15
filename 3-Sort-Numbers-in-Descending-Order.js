const sortDescending = (num) =>
  parseInt(
    num
      .toString()
      .split('')
      .sort((v1, v2) => (v1 > v2 ? -1 : v1 < v2))
      .join('')
  );
