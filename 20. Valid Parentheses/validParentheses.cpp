#include <iostream>
#include <stack>
#include <string>

using namespace std;

// comments added to help me know what is going on

bool isValid(string s) {
  stack<char> stk; // create a stack, which is LIFO - last in, first out
  char x;
  for (int i = 0; i < s.length(); i++) { // will iterate through whole string
    if (s[i] == '(' || s[i] == '[' ||
        s[i] == '{') { // checks to see if character is an opening brace
      stk.push(s[i]);  // if opening brace exists, put it on top of stack,
                       // closing braces never get put on stack
      continue;
    }
    if (stk.empty()) // if the stack is empty, end
      return false;

    switch (s[i]) {  // switch checks closing braces to see if it matches
    case ')':        // opening brace on top of stack
      x = stk.top(); // assign top opening brace in stack to x
      stk.pop();     // then remove top element from stack
      if (x == '{' || x == '[') // if closing brace in s[i] does not match
        return false;           // opening brace in x, return false
      break;
    case '}':
      x = stk.top();
      stk.pop();
      if (x == '(' || x == '[')
        return false;
      break;
    case ']':
      x = stk.top();
      stk.pop();
      if (x == '(' || x == '{')
        return false;
      break;
    } // end switch
  }   // If no closing brace is found, returns to for loop and gets next opening
      // brace to put on top of stack
  return (stk.empty()); // when for loop ends, empty the stack
}

int main() {
  string expresion = "()[(){()}]";
  if (isValid(expresion))
    cout << "This is a Balanced expression";
  else
    cout << "This is not a Balanced expression";
}

/* test cases
"()"
"()[]{}"
"(]"
"(][)"
"]"
")(][}{"
"{[]}"
"[]{[]()}"
"({})[({})]"
"([{]})"
"(){}}{"
"(}})"
*/
