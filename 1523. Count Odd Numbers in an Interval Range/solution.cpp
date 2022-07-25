#include <iostream>

using namespace std;

int countOdds(int low, int high) {
  int lowNum = low % 2;
  int highNum = high % 2;

  int numOdds = ((high - low) / 2);

  if (lowNum == 1 || highNum == 1) {
    numOdds += 1;
  }
  return numOdds;
}

int main() {
  int h = 7;
  int l = 3;
  cout << countOdds(l, h);
}

/*
Given two non-negative integers low and high. Return the count of odd numbers
between low and high (inclusive).
7,3 = 3
10,8 = 1
*/