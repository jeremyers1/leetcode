#include <iostream>
#include <vector>

using namespace std;

int removeElement(vector<int> &nums, int val) {
  for (int i = 0; i < nums.size();) {
    if (nums[i] == val)
      nums.erase(nums.begin() + i);
    else
      i++;
  }
  return nums.size();
}

int main() {
  vector<int> nums{3, 2, 2, 3};
  int val = 3;
  cout << removeElement(nums, val);
}

/*
[3,2,2,3], 3 = 2;
[0,1,2,2,3,0,4,2], 2 = 5
*/