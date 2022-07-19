#include <iostream>
#include <string>
#include <vector>

using namespace std;

string longestCommonPrefix(vector<string> &strs) {

  if (strs[0] == "")
    return "";

  string ans = strs[0];

  if (strs.size() > 1) {
    string s;
    for (int i = 1; i < strs.size(); ++i) {
      s = strs[i];
      int j = 0;

      while (ans[j] == s[j] && j < ans.size())
        ++j;

      ans.resize(j);

      if (j == 0)
        return "";
    }
  }
  return ans;
}

/*
       if (strs.size() == 0) return "";
       if (strs.size() == 1) return strs[0];

       sort(strs.begin(), strs.end(), []
         (const string& first, const string& second){
           return first.size() < second.size();
         });

       if (strs[0].empty()) return "";

       string prefix = "";
       int a = 0, i = 0;
       string s = strs[i];
       int sLength = s.size();

       if (isalpha(s[a]) == 0) return "";

       for (int j = 1; j < strs.size(); ++j) {
           string t = strs[j];
           if (t.empty()) return "";

           if (i == 0) {
             if (s[a] != t[a]) return prefix;

             while (s[a] == t[a] && i != j) {
               prefix.push_back(s[a]);
               ++a;
               if (a >= s.size()) break;
             }
             ++i;
           }
           else {
             a = prefix.size() - 1;
             while (prefix[a] != t[a]) {
               prefix.pop_back();
               if (prefix.empty()) return "";
               if (a > 0) {
                   --a;
               }
               else {
                   break;
               }

             }
           }
       }

   return prefix;
   }
*/

int main() { cout << longestCommonPrefix({"flower", "flow", "flight"}); }

/*
["flower","flow","flight"] = "fl"
["dog","racecar","car"] = ""
["",""] = ""
*/