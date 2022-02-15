const ascDesNone = (arr, str) => {
  switch (str) {
    case 'Asc':
      return arr.sort();
    case 'Des':
      return arr.sort((v1, v2) => v2 - v1);
    case 'None':
      return arr;
  }
};
