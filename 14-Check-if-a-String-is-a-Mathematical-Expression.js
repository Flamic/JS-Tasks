const mathExpr = (str) =>
  /^[-+]?\d+(?:\.\d+)?\s*(?:[\+\-\*\/]\s*[-+]?\d+(?:\.\d+)?\s*)+$/.test(str);
