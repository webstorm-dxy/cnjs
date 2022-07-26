#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    cout<<"在Password后输入你的密码"<<endl;
    system("sudo mkdir ~/.cnjslib/");
    system("sudo cp -avx ./lib/* ~/.cnjslib/");
    return 0;
}
