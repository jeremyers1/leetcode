#include <iostream>
#include <string>

using namespace std;

int strStr(string haystack, string needle) {
        if (needle.size() == 0) return 0;
        else return haystack.find(needle);
}

int main() {
  string str1 = "hello";
  string str2 = "ll";
  cout << strStr(str1, str2);
}

/*
hello, ll = 2
aaaaa, bba = -1
*/