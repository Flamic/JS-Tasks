const sortIt = (arr) =>
  arr.sort(
    (v1, v2) =>
      (Array.isArray(v1) ? v1[0] : v1) - (Array.isArray(v2) ? v2[0] : v2)
  );
