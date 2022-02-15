const minMax = (arr) =>
  arr.reduce(
    (acc, cur) => [cur < acc[0] ? cur : acc[0], cur > acc[1] ? cur : acc[1]],
    [Infinity, -Infinity]
  );
