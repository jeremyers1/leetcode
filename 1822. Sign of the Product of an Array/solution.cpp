#include <iostream>
#include <vector>

using namespace std;

int arraySign(vector<int> &nums) {
  int product = 1;
  for (int i = 0; i < nums.size(); i++) {

    if (nums[i] > 0)
      nums[i] = 1;
    if (nums[i] < 0)
      nums[i] = -1;

    product *= nums[i];
  }

  if (product == 0)
    return 0;
  else if (product > 0)
    return 1;
  else
    return -1;
}

int main() {
  vector<int> arr = {};
  cout << arraySign(arr);
}

/*
[-1,-2,-3,-4,3,2,1] = 1
[1,5,0,2,-3] = 0
[-1,1,-1,1,-1] = -1
*/