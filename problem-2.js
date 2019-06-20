function fx(n) {
  const initialValue = -1 - Math.floor(n / 2) * 2;
  let accumulator = initialValue;
  let J;
  for (let i = 0; i < n; i++) {
    J = 2 * i + 1 + (i & 1);
    accumulator += 2 * J - 2 * i + 2;
  }
  return accumulator + 2 - n;
}

n = 39455;
console.log(fx(n));
