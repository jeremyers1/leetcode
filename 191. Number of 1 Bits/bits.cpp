#include <iostream>

int hammingWeight(uint32_t n) {
  unsigned int count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

int main() {
  uint32_t num = 00000000000000000000000000001011;
  std::cout << hammingWeight(num);
}

/*
00000000000000000000000000001011 = 3
00000000000000000000000010000000 = 1
11111111111111111111111111111101 = 31
*/