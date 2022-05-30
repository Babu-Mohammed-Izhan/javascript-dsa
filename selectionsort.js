arr1 = [1, 12, 5, 30, 20, 40, 17, 13, 15, 16];

function selectionsort(arr) {
  var i, j, min_idx;

  for (i = 0; i < arr.length; i++) {
    min_idx = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    var temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionsort(arr1));
