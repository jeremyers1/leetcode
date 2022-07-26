#include <iostream>
#include <vector>

using namespace std;

int sumOddLengthSubarrays(vector<int> &arr) {
  int arrLen = arr.size();
  int arrMid = (arr.size() / 2);
  int arrSum = 0;

  if (arrLen <= 2) {
    for (int i = 0; i < arrLen; i++)
      arrSum += arr[i];
    return arrSum;
  } else {
    for (int i = 0; i < arrLen / 2; i++) {
      arrSum = arrSum + (arr[i] * (arrLen + i - 2)) +
               (arr[arrLen - i] * (arrLen + i - 2));
    }
  }
  return arrSum;
}

/*
 else if (aLen % 2 == 0) {
  for (int i = 0; i < aLen; i++)
    arrSum += arr[i];
}
 else {
 for (int i = 0; i < aLen; i++) {
   arrSum += arr[i];
 }
 arrSum *= 2;
}
  */

int main() {
  vector<int> arr = {1, 4, 2, 5, 3};
  cout << sumOddLengthSubarrays(arr);
}

/* Given an array of positive integers arr, return the sum of all possible
odd-length subarrays of arr.
[1,4,2,5,3] = 58
[1,2] = 3
[1,2,3] = 12
[1,2,3,4] = 10 + 6 + 9 = 25
[10,11,12] = 66
*/
