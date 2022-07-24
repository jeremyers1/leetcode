#include <iostream>
#include <vector>

using namespace std;

vector<int> nextGreaterElement(vector<int> &nums1, vector<int> &nums2) {
  vector<int> res;
  // sort(nums2.begin(),nums2.end());
  for (int i = 0; i < nums1.size(); i++) {
    auto it = find(nums2.begin(), nums2.end(), nums1[i]);
    auto j = it;
    for (j = it; j != nums2.end(); j++) {
      if (*j > nums1[i]) {
        res.push_back(*j);
        break;
      }
    }
    if (j == nums2.end()) {
      res.push_back(-1);
    }
  }
  return res;
}

int main() {
  vector<int> vec1 = {4, 1, 2};
  vector<int> vec2 = {1, 3, 4, 2};
  vector<int> ans = nextGreaterElement(vec1, vec2);
  for (auto i : ans)
    cout << i << " ";
}

/*
[4,1,2], [1,3,4,2] = [-1,3,-1]
[2,4], [1,2,3,4] = [3, -1]
*/