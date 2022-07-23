#include <iostream>
#include <vector>

using namespace std;

int searchInsert(vector<int> &nums, int target) {

  int start = 0;
  int mid = nums.size() / 2;
  int end = nums.size() - 1;

  if (target > nums[end])
    return end + 1;
  if (target <= nums[start])
    return start;

  while (start < end) {
    mid = start + (end - start) / 2;

    if (start == mid)
      return start + 1;

    if (target > nums[mid]) {
      start = mid;
    } else if (target < nums[mid]) {
      end = mid;
    } else if (target == nums[mid])
      return mid;
  }

  return start - 1;
}

/* MUCH BETTER from other user :

int searchInsert(vector<int>& nums, int target) {

  int low = 0, high = nums.size() - 1;

  while (low < high) {
    int mid = low + (high - low) / 2;

    if (nums[mid] < target)
      low = mid + 1;
    else
      high = mid;
  }

  if (nums[low] < target)
    return low + 1;

  return low;
}
*/

int main() {
  vector<int> arr = {1, 3, 5, 6};
  int search = 5;
  cout << searchInsert(arr, search);
}

/*
[1,3,5,6], 5 = 2
[1,3,5,6], 2 = 1
[1,3,5,6], 7 = 4
*/