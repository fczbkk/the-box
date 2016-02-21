// Returns `true` if `b` can fit completely inside `a`.
export default function (a, b) {
  return (
    (a.width >= b.width) &&
    (a.height >= b.height)
  );
}