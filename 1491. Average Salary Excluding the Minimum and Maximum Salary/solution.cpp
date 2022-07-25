#include <iostream>
#include <vector>

using namespace std;

double average(vector<int> &salary) {
  // first find high and low
  double high = salary[0], low = salary[0];
  for (int i = 0; i < salary.size(); i++) {
    if (salary[i] < low)
      low = salary[i];
    if (salary[i] > high)
      high = salary[i];
  }

  // now get total of all salaries
  double total = 0;
  for (int i = 0; i < salary.size(); i++) {
    total += salary[i];
  }

  // subtract out high and low salaries
  total = total - high - low;

  // find average by dividing, excluding high and low
  double avg = total / (salary.size() - 2);

  return avg;
}

/* I later used the following, which also works :
    double average(vector<int> &salary) {
  // first find high and low
  vector<int>::iterator high = max_element(begin(salary), end(salary));
  vector<int>::iterator low = min_element(begin(salary), end(salary));

  // now get total of all salaries
  double total = 0;
  for (int i = 0; i < salary.size(); i++) {
    total += salary[i];
  }

  // subtract out high and low salaries
  total = total - *high - *low;

  // find average by dividing, excluding high and low
  double avg = total / (salary.size() - 2);

  return avg;
}
*/

int main() {
  vector<int> arr = {};
  cout << average(arr);
}

/*
[4000,3000,1000,2000] = 2500
[1000,2000,3000] = 2000
*/