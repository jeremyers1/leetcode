#include <iostream>
#include <vector>

using namespace std;

int removeDuplicates(vector<int> &nums) {

  for (int i = 1; i < nums.size();) {
    if (nums[i] == nums[i - 1])
      nums.erase(nums.begin() + i);
    else
      i++;
  }
  return nums.size();
}

int main() {
  vector<int> nums{};
  cout << removeDuplicates(nums);
}

/*
[1,1,2] = 2;
[0,0,1,1,1,2,2,3,3,4] = 5
*/