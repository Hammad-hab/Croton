#include<fstream>
#include<iostream>
#include<string>
#include<vector>
#include<any>
#include<map>

using namespace std;

vector<int> ARG_HEAP_INT;
vector<string> ARG_HEAP_STR;
vector<float> ARG_HEAP_FLOAT;
map<string, std::function<any()>> STD;

vector<int> RET_HEAP_INT;
vector<string> RET_HEAP_STR;
vector<float> RET_HEAP_FLOAT;

map<string, any> STD;
map<string, function<void()>> STD_FN;


void insertIntoSTD(string name, any value) {
    STD[name] = value;
}


void LOAD_ARG(const string& arg_value) {
    ARG_HEAP_STR.push_back(arg_value);
}

void LOAD_ARG(int arg_value) {
    ARG_HEAP_INT.push_back(arg_value);
}

void LOAD_ARG(float arg_value) {
    ARG_HEAP_FLOAT.push_back(arg_value);
}

void CLEAR_ARG_HEAP(int id) {
    if (id == 0) {
        ARG_HEAP_FLOAT.clear();
    } else if (id == 1) {
        ARG_HEAP_INT.clear();
    } else if (id == 2) {
        ARG_HEAP_STR.clear();
    } else if (id == 3) {
        ARG_HEAP_FLOAT.clear();
        ARG_HEAP_INT.clear();
        ARG_HEAP_STR.clear();
    }
}

void LOAD_RET(string arg_value) {
    RET_HEAP_STR.push_back(arg_value);
}

void LOAD_RET(int arg_value) {
    RET_HEAP_INT.push_back(arg_value);
}

void LOAD_RET(float arg_value) {
    RET_HEAP_FLOAT.push_back(arg_value);
}

void CLEAR_RET_HEAP(int id) {
    if (id == 0) {
        RET_HEAP_FLOAT.clear();
    } else if (id == 1) {
        RET_HEAP_INT.clear();
    } else if (id == 2) {
        RET_HEAP_STR.clear();
    } else if (id == 3) {
        RET_HEAP_FLOAT.clear();
        RET_HEAP_INT.clear();
        RET_HEAP_STR.clear();
    }
}

int getArgHeapInt(int index) {
    return ARG_HEAP_INT[index];
}

float getArgHeapFloat(int index) {
    return ARG_HEAP_FLOAT[index];
}

string getArgHeapString(int index) {
    return ARG_HEAP_STR[index];
}

int getRetHeapInt(int index) {
    return RET_HEAP_INT[index];
}

float getRetHeapFloat(int index) {
    return RET_HEAP_FLOAT[index];
}

string getRetHeapString(int index) {
    return RET_HEAP_STR[index];
}

string readCrotonFile(string file) {
    fstream crotonFile(file);
    string contents;
    if ( crotonFile.is_open() ) {     
    while ( crotonFile.good() ) {
        crotonFile >> contents;
        }         
    }
    crotonFile.close();
    return contents;
}

int main() {
    return 0;
}