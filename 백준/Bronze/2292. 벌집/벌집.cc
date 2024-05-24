#include <iostream>

using namespace std;

int main(void){
    int n;
    cin >> n;

    if(n==1){
        cout<<1<<endl;
        return 0;
    }
    int i=1,j=1;
    while(n>i)
        i+=6*j++;
    cout<<j<<endl;
    return 0;
}