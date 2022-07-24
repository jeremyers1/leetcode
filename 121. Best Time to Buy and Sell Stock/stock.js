var maxProfit = function (prices) {
	let buy = prices[0];
	let sell = prices[1];
	let profit = 0;
	let day = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] <= buy) {
			buy = prices[i];
			sell = prices[i]; // reset sell price, and effectively reset profit to 0
			day = i;
		}

		if (prices[i] >= sell && i > day) {
			sell = prices[i];
			// only calculate new profit, if it's greater than previous profit
			if (sell - buy > profit) {
				profit = sell - buy;
			}
		}
	}

	return profit;
};

const stock = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(stock));

/*
 [7,1,5,3,6,4] = 5;
 [7,6,4,3,1] = 0
 [1,2] = 1
 [3,3,5,0,0,3,1,4] = 4
*/
