export default function binarySearchList(haystack: number[] = [], needle: number = 0) {
  let low = 0;
  let high = haystack.length;

  do {
    let mid_point = Math.floor(low + (high - low) / 2);
    const mid_point_value = haystack[mid_point];

    if (mid_point_value === needle) {
      return true;
    } else if (mid_point_value > needle) {
      high = mid_point;
    } else {
      low = mid_point + 1;
    }
  } while (low < high);

  return false;
}
