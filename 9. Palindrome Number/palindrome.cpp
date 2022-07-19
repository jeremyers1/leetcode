#include <iostream>
#include <sstream>
#include <string>

bool isPalindrome(int x) {
	if (x < 0) {
		return false;
	}

	std::string backwards = "";
	std::string NumString = std::to_string(x);

	for (int i = NumString.size() - 1; i >= 0; i--) {
		backwards += NumString[i];
	}

	long check = std::stol(backwards);

	if (check == x) {
		return true;
	} else {
		return false;
	}
}

int main() {
	std::cout << isPalindrome(121);
}

/*
121 = true;
-121 = false;
10 = false;
*/