#include <iostream>
#include <vector>

using namespace std;

vector<int> twoSum(vector<int> &nums, int target) {
	for (int i = 0; i < nums.size() - 1; i++) {
		for (int z = 1; z < nums.size(); z++){
			if (i != z && nums[i] + nums[z] == target)
			{
				return {i, z};
			}
		}
	}
	return {0, 0};
}

int main() {
  vector<int> nums = {2,5,5,11};
  int target = 10;
  twoSum(nums, target);
}

/*
{2,7,11,15}, 9
[0,1]

{3,2,4}, 6
[1,2]

{3,3}, 6
[0,1]

{2,5,5,11}, 10
[1,2]
*/