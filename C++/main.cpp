#include <iostream>
#include <vector>
#include <cmath>
#include <cstring>
#include <fstream>
#include <algorithm>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;
int main()
{
    int c = 0;
    char y;
    vector<int> nums;
    string d;
    cin >> d;
    for (int i = 0; i < d.size(); i++)
    {
        y = d[i];
        nums.push_back(y);
    }
    // char yq = (int)nums[0] - 55;
    cout<<(int)nums[0] - 55;
    // for (int i = 0; i < nums.size(); i++)
    // {
    //     cout << (int)nums[i] - 55;
    // }
    return 0;
}
