#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int main(void)
{
    string word;
    int c;
    cin >> word;
    sort(word.begin(), word.end());
    transform(word.begin(), word.end(), word.begin(), ::toupper);
    int count[26] = {0};
    bool equal = false;
    int max = 0;

    for (int i = 0; i < word.length(); i++)
    {
        count[word[i] - 65]++;
    }
    for (int i = 0; i < 26; i++)
    {
        if (count[i] > max)
        {
            max = count[i];
            c = i;
            equal = false;
        }
        else if (count[i] == max)
        {
            equal = true;
        }
    }
    if (equal)
        cout << "?" << endl;
    else
        cout << char(c + 65) << endl;
    return 0;
}