#include <iostream>

using namespace std;

int main() {
    int T;
    int N;
    cin >> T;
    int DP[41]{ 0,1,1 };

    for (int i = 3; i < 41; i++) {
        DP[i] = DP[i - 1] + DP[i - 2];
    }
    for (int i = 0; i < T; i++) {
        cin >> N;

        if (N == 0)
            cout << "1 0" << '\n';
        else if (N == 1)
            cout << "0 1" << '\n';
        else
            cout << DP[N - 1] << " " << DP[N] << '\n';
    }

    return 0;
}