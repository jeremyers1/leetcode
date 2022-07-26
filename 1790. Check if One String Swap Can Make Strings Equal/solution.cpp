#include <iostream>
#include <string>

using namespace std;

bool areAlmostEqual(string s1, string s2) {
  if (s1 == s2)
    return 1;

  int count = 0, notMatch = 0, x = 0, y = 0;

  for (int i = 0; i < s1.size(); i++) {
    if (s1[i] == s2[i])
      count++;
    else {
      notMatch++;
      if (x == 0)
        x = i;
      else
        y = i;
    }
  }
  if ((count + notMatch) == s1.size() && s1[x] == s2[y] && s1[y] == s2[x])
    return 1;
  else
    return 0;
}

int main() {
  string str1 = "bank";
  string str2 = "kanb";
  cout << areAlmostEqual(str1, str2);
}

/*
"bank", "kanb" = true
"attack", "defend" = false
"kelb", "kelb" = true
*/