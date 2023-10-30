#include <iostream>
#include <vector>

using namespace std;

int main(void) {
	int n, erase;
	string number;
	int count = 0;

	vector<char> v1;

	cin >> n >> erase;

	cin >> number;
	
	while (count!=number.size()) {
		while (erase != 0 && !v1.empty() && v1.back() < number[count]) {
			v1.pop_back();
			erase--;
		}
		v1.push_back(number[count]);//9
		count++;
	}

	while (erase--) 
		v1.pop_back();

	for (int i = 0; i < v1.size(); i++)
		cout << v1[i];

	return 0;
}