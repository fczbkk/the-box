// Adjusts size of `b` so that it fits `a` while keeping original ratio.
// Does nothing if `b` is smaller than `a`.
export default function (a, b) {
  if (a.width < b.width) {
    b.height = adjustByRatio(a.width, b.width, b.height);
    b.width = a.width;
  }
  if (a.height < b.height) {
    b.width = adjustByRatio(a.height, b.height, b.width);
    b.height = a.height;
  }
}


// returns `secondary` adjusted by the same ratio
// as when resizing `primary` to `target`
function adjustByRatio (target, primary, secondary) {
  const ratio = target / primary;
  return secondary * ratio;
}