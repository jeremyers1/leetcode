#include <iostream>
#include <vector>

using namespace std;

int nearestValidPoint(int x, int y, vector<vector<int>> &points) {
  int manhattanDistance = 10000;
  int closestPoint = -1, temp = 0;

  for (int i = 0; i < points.size(); ++i) {
    if (x == points[i][0] || y == points[i][1]) {

      temp = abs(x - points[i][0]) + abs(y - points[i][1]);
      if (temp < manhattanDistance) {
        manhattanDistance = temp;
        closestPoint = i;
      }
    }
  }
  return closestPoint;
}

int main() {
  int numX = 3;
  int numY = 4;
  vector<vector<int>> arr = {{1, 2}, {3, 1}, {2, 4}, {2, 3}, {4, 4}};
  cout << nearestValidPoint(numX, numY, arr);
}

/*
3, 4, {{1,2},{3,1},{2,4},{2,3},{4,4}} = 2
3, 4, {{3,4}} = 0
3, 4, {{2,3}} = -1
*/