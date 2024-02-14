#ifndef ARRAY_HELPERS_H
#define ARRAY_HELPERS_H 1
#include<string>
#include<vector>
#include "datatypes.cc"

typedef int slice_index;

using namespace std;

vector<string> slice_vec(vector<string> target, slice_index begin, slice_index end) {

    if (end < begin) {
       raiseCrotonError("Internal C++ Error. slice_index End is less than slice_index Begin. This can cause unpredictable behavior. ");
    }

    vector<string>::const_iterator start = target.begin() + begin;
    vector<string>::const_iterator ending = target.begin() + end;

    return vector<string>(start, ending);
};

int indexOf(vector<string> target, string to_find) {
    int index = 0;
    for(string inst : target) {
        if (inst == to_find) {
            return index;
        }
        index += 1;
    }
    return -1;
}

bool contains(vector<string> target, string to_find) {
    return indexOf(target, to_find) == -1 ? false : true;
}

string join_array(vector<string> target, char delimeter) {
       string ret_formatted = "";
       int index = 0;
       for (string instance : target) {
           ret_formatted.append(delimeter + instance);
       } 
       return ret_formatted;
}


#endif