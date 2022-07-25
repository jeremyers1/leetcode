#include <iostream>
#include <vector>

using namespace std;

bool checkStraightLine(vector<vector<int>> &coordinates) {
  if (coordinates.size() == 2)
    return true;

  int rise1, run1, rise2, run2, cMax = coordinates.size() - 1;

  rise1 = coordinates[cMax][1] - coordinates[0][1];
  run1 = coordinates[cMax][0] - coordinates[0][0];

  for (int i = 0; i < cMax; i++) {
    rise2 = coordinates[i][1] - coordinates[0][1];
    run2 = coordinates[i][0] - coordinates[0][0];

    if ((rise1 * run2) != (rise2 * run1))
      return false;
  }
  return true;
}

int main() {
  vector<vector<int>> coords = {{1, 2}, {2, 3}, {3, 4}, {4, 5}, {5, 6}, {6, 7}};
  cout << checkStraightLine(coords);
}
/*
{{1,2},{2,3},{3,4},{4,5},{5,6},{6,7}} = true
{{1,1},{2,2},{3,4},{4,5},{5,6},{7,7}} = false

*/
