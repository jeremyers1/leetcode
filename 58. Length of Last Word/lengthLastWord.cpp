#include <iostream>
#include <string>

using namespace std;

int lengthOfLastWord(string s) {

  for (int i = s.size() - 1; i > 0; i--) {
    if (s[i] == ' ') {
      s.pop_back();
    } else
      break;
  }

  for (int i = s.size(); i > 0; i--) {
    if (s[i - 1] == ' ')
      return s.size() - i;
  }
  return s.size();
}

int main() {
  string str = "";
  cout << lengthOfLastWord(str);
}

/*
"Hello World" = 5
"   fly me   to   the moon  " = 4
"luffy is still joyboy" = 6
*/