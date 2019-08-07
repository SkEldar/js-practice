#include <iostream>
#include <cmath>
#include <string>
#include <vector>
using namespace std;
int main()
{
    vector<int> num;
    for (int i = 0; i < 10; i++)
    {

        num.push_back(rand() % 20);
        // cout << num[i] << endl;
    }
    int max = num[0];
    int second_max = num[0];
    for (int l = 0; l < 10; l++)
    {
        if (num[l] > max)
        {
            max = num[l];
        }
    };
    for (int c = 0; c < 10; c++)
    {
        if (num[c] > second_max && num[c] < max)
        {
            second_max = num[c];
        }
        // cout << second_max << endl;
    }
    cout << max << endl;
    cout << second_max << endl;
    return 0;
}
