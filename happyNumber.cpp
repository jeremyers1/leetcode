#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool isHappy(int n) {
  // every number comes back down to single digits eventaully.
  // Only 1 and 7 will result in a happy number, so all others are false.
  if (n == 1 || n == 7)
    return 1;
  else if (n < 9)
    return 0;

  int sumSquares = 0;
  vector<int> nums;
  string length = to_string(n);

  for (int i = 0; i < length.size() - 1; i++) {
    nums.push_back(n % 10);
    if (n >= 10)
      n = n / 10;
  }

  for (int i = 0; i < nums.size(); i++) {
    sumSquares += (nums[i] * nums[i]);
  }

  sumSquares += (n * n);

  if (sumSquares == 1)
    return 1;
  else
    return isHappy(sumSquares);
}

/* Alternative using while loops

int sum = 0, temp = 0, rev = 0;
while (n > 9 || n == 1 || n == 7) {
  sum = n, rev = 0;
  while (sum > 0) {
    temp = sum % 10;
    rev = rev + temp * temp;
    sum = sum / 10;
    if (sum == 0 && rev == 1) {
      return true;
    }
  }
  n = rev;
}
return false;
}

int rem = 0, rev = 0;
while (n > 9 || n == 1 || n == 7) {
  sum = 0;
  while (n > 0) {
    rem = n % 10;
    sum = sum + rem * rem;
    n = n / 10;
    if (n == 0 && sum == 1) {
      return true;
    }
  }
  n = sum;
}
return false;
}
*/

int main() {
  int num = 19;
  cout << isHappy(num);
}

/*
19 = true;
2 = false
1 = true
7 = true
*/