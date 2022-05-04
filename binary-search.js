arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 20, 30, 40, 50];

k1 = 20;

function binarySearch(arr, k) {
  const len = arr.length;
  var start = 0;
  var end = len - 1;
  var curr = 0;
  while (start <= end) {
    curr = Math.floor((start + end) / 2);
    if (k < arr[curr]) {
      end = curr - 1;
    } else if (k > arr[curr]) {
      start = curr + 1;
    } else {
      return arr[curr];
    }
  }

  return len;
}

if (k1 == binarySearch(arr1, k1)) {
  console.log('The value has been found');
} else {
  console.log('The value has not been found');
}
