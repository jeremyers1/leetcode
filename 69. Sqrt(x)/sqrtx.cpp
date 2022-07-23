#include <iostream>

int mySqrt(int x) {
  if (x == 1)
    return 1;
  long high = x / 2;
  long prevHigh = x - 1;

  while (high * high >= x) {
    if (high * high == x)
      return high;
    prevHigh = high;
    high /= 2;
  }

  while (prevHigh > high) {
    if (prevHigh * prevHigh > x) {
      prevHigh -= 1;
      if (prevHigh * prevHigh == x)
        return prevHigh;
    } else
      return prevHigh;
  }
  return prevHigh;
}

/* Really good solution from someone else
int mySqrt(int x) {
  int ans = 0;
  int start = 1, end = x;
  while (start <= end) {
    int mid = (end - start) / 2 + start;

    if (mid <= x / mid) // equivalent of mid * mid <= x
    {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
*/

int main() {
  int num = 4;
  std::cout << mySqrt(num);
}

/* Decimal is truncated...
4 = 2
8 = 2
*/