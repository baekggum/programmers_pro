#include <iostream>
#include <stack>
#include <vector>

using namespace std;

int main() {
	int n;
	int tmp = 1;
	int example[100000];
	stack<int> s1;
	vector<char> answer;

	cin >> n;

	for (int i = 0; i < n; i++) {
		int num; cin >> num;

		if (!s1.empty() && s1.top() == num) {
			s1.pop();
			answer.push_back('-');
		}
		else if (tmp <= num) {
			while (tmp <= num) {
				s1.push(tmp++);
				answer.push_back('+');
			}
			s1.pop();
			answer.push_back('-');
		}
		else if (!s1.empty() && s1.top() > num) {
			cout << "NO";
			return 0;
		}
	}
	for (auto x : answer)
		cout << x << "\n";
	return 0;
}