#include <iostream>
#include <vector>
#include <cmath>
#include <cstring>
#include <algorithm>
#include <cstdlib>
#include <ctime>
using namespace std;
int main()
{
    long long int a, b, c, d;
    long long int su = 0;
    cin >> a >> b >> c >> d;
    const int n = a;
    const int m = b;
    int nums[n][m];
    vector<int> nums2;
    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < b; j++)
        {
            nums[i][j] = su;
            su++;
        }
    }
    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < b; j++)
        {
            cout << nums[i][j] << " ";
        }
        cout << endl;
    }
    // for (int i = 0; i < b; i++)
    // {
    //     nums2.push_back(nums[c - 1][i]);
    // }
    // for (int i = 0; i < nums2.size(); i++)
    // {
    //     cout << nums2[i] << " ";
    // }
    return 0;
}
