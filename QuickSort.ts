function qs(array: number[], lowest_index: number, highest_index: number): void {
  if (lowest_index >= highest_index) {
    return;
  }

  const pivot_index = partition(array, lowest_index, highest_index);

  qs(array, lowest_index, pivot_index - 1);
  qs(array, pivot_index + 1, highest_index);
}

function partition(array: number[], lowest_index: number, highest_index: number): number {
  const pivot = array[highest_index];
  let will_sorted_index = lowest_index - 1;

  for (let i = lowest_index; i < highest_index; i++) {
    if (array[i] <= pivot) {
      const temp = array[i];

      will_sorted_index = will_sorted_index + 1;
      array[i] = array[will_sorted_index];
      array[will_sorted_index] = temp;
    }
  }

  will_sorted_index = will_sorted_index + 1;
  array[highest_index] = array[will_sorted_index];
  array[will_sorted_index] = pivot;

  return will_sorted_index;
}

export default function quickSort(array: number[]): void {
  qs(array, 0, array.length - 1);
}
