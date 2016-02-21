// Returns sizes of gaps inside `a` around `b`.
// Used mostly as utility function.
export default function (a, b) {
  var result = {
    horizontal: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    vertical: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };

  // Gaps can not be bigger than the parent box.
  // This can happen when child box is outside parent box.
  if (result.horizontal.before > a.width) {
    result.horizontal.before = a.width;
  }
  if (result.horizontal.after > a.width) {
    result.horizontal.after = a.width;
  }
  if (result.vertical.before > a.height) {
    result.vertical.before = a.height;
  }
  if (result.vertical.after > a.height) {
    result.vertical.after = a.height;
  }

  return result;
}