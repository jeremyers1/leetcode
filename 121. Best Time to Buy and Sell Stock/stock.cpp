#include <iostream>
#include <vector>

using namespace std;

int maxProfit(vector<int> &prices) {
  int purchase = prices[0];
  int sell = 0;
  int day = 0;
  int profit = 0;

  for (int i = 0; i < prices.size(); i++) {
    if (prices[i] <= purchase) {
      purchase = prices[i];
      day = i;
      sell = prices[i];
    }
    if (prices[i] >= sell && i > day) {
      sell = prices[i];
      if (sell - purchase > profit)
        profit = sell - purchase;
    }
  }

  return profit;
}

int main() {
  vector<int> stock = {};
  cout << maxProfit(stock);
}

/*
 [7,1,5,3,6,4] = 5;
 [7,6,4,3,1] = 0
*/