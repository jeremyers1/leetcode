#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int largestPerimeter(vector<int> &nums) {
  sort(nums.begin(), nums.end(), greater<int>());

  for (int x = 0; x < nums.size() - 2; ++x) {
    if (nums[x + 1] + nums[x + 2] > nums[x]) {
      return nums[x] + nums[x + 1] + nums[x + 2];
    }
  }
  return 0;
}

int main() {
  vector<int> arr = {};
  cout << largestPerimeter(arr);
}

/*
[2,1,2] = 5
[1,2,1] = 0
*/