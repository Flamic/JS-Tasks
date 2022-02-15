const missingLetter = (str) => {
  const res = [...str]
    .slice(1)
    .find((e, i) => e.charCodeAt() - str.charCodeAt(i) > 1);
  return res ? String.fromCharCode(res.charCodeAt() - 1) : 'No Missing Letter';
};
