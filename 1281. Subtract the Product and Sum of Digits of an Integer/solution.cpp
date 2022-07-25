#include <iostream>

int subtractProductAndSum(int n) {
  int mult = 1, add = 0;
  while (n != 0) {
    int digit = n % 10;
    mult *= digit;
    add += digit;
    n /= 10;
  }
  return mult - add;
}

int main() {
  int num = 234;
  std::cout << subtractProductAndSum(num);
}

/*
234 = 15
4421 = 21
*/