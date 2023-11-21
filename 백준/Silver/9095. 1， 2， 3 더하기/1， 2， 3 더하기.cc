#include <iostream>

using namespace std;

int main() {
	int dp[11] = { 1,2,4 };

	int T; cin >> T;
	for (int i = 3; i < 11; i++)
		dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
	

	for (int i = 0; i < T; i++) {
		int N; cin >> N;
		cout << dp[N - 1] << "\n";
	}

	return 0;
}