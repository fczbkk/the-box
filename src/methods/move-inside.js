// Sets position of `b` to the closest position where it is completely inside
// `a`. If `b` can not fit `a`, it is positioned at top-left corner of `a`.
export default function (a, b) {
  if (b.right > a.right) {b.left = a.right - b.width;}
  if (b.bottom > a.bottom) {b.top = a.bottom - b.height;}
  if (b.left < a.left) {b.left = a.left;}
  if (b.top < a.top) {b.top = a.top;}
}