const trace = (mtx) => mtx.reduce((acc, cur, idx) => acc + cur[idx], 0);
