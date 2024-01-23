#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <cstring>

using namespace std;

extern "C" {

    const char* exports[] = {"filereads"};
    const char** crExports() {
        return exports;
    }

    const char* filereads(char* fname, int length) {
        char* contents;
        FILE* file = fopen(fname,"r");
        fgets(contents, length, file);
        fclose(file);
        return contents;
    };

}
