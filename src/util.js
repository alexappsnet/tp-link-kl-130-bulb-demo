export function objToJson(obj) {
  return JSON.stringify(obj);
}

export function rgb2hsl(r, g, b) {
  let v = Math.max(r, g, b);
  let c = v - Math.min(r, g, b);
  let f = 1 - Math.abs(v + v - c - 1);
  let h = c && (
    (v === r)
      ? (
        (g - b) / c
      ) : (
        (v === g)
          ? (
            2 + (b - r) / c
          ) : (
            4 + (r - g) / c
          )
      )
  );
  return [60 * (h < 0 ? h + 6 : h), f ? c / f : 0, (v + v - c) / 2];
}
