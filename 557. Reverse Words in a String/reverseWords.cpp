#include <iostream>
#include <string>

using namespace std;

string reverseWords(string s) {

  int prevSpace = 0;

  for (int i = 0; i <= s.size(); i++) {
    if (s[i] == ' ' || s[i] == '\0') {
      int newSpace = i - 1;
      for (int l = prevSpace; l < newSpace; l++) {
        char temp = s[l];
        s[l] = s[newSpace];
        s[newSpace] = temp;
        newSpace--;
      }
      prevSpace = i + 1;
    }
  }
  return s;
}

int main() {
  string str = "Let's take LeetCode contest";
  cout << reverseWords(str);
}

/*
"Let's take LeetCode contest" = "s'teL ekat edoCteeL tsetnoc"
"God Ding" = "doG gniD"
*/
