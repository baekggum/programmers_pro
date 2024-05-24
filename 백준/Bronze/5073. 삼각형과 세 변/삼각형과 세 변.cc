#include <iostream>
#include <algorithm>

using namespace std;

int triangle[3];

int main(void){
    while(true){
        for(int i=0;i<3;i++)
            cin>>triangle[i];

        sort(triangle, triangle+3);
        if(triangle[2]==0)
            break;
        if(triangle[0]+triangle[1]<=triangle[2])
            cout<<"Invalid"<<endl;
        else if(triangle[0]==triangle[2])
            cout<<"Equilateral"<<endl;
        else if(triangle[0] == triangle[1] || triangle[1]==triangle[2])
            cout<<"Isosceles"<<endl;
        else
            cout<<"Scalene"<<endl;
    }
    return 0;
}
