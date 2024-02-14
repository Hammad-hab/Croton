#ifndef STRING_HELPERS_H
#define STRING_HELPERS_H 1
#include<iostream>
#include<fstream>
#include<string>
#include<map>
#include<any>
#include<functional>
#include<vector>
using namespace std;


// Minipulation Functions
vector<string> split(const string& target, char delimiter) {
    vector<string> result;
    size_t start = 0;
    size_t end = target.find(delimiter);

    while (end != string::npos) {
        result.push_back(target.substr(start, end - start));
        start = end + 1;
        end = target.find(delimiter, start);
    }

    result.push_back(target.substr(start));
    return result;
}

string sstrip(string target) {
    if (target[0] == ' '){
        string result;
        for (size_t i = 0; i < target.length(); i++)
        {
            if (i == 0 && target[i] == ' ') continue;
            result += target[i];
        }
        return result;
    } else {
        return target;
    }
}

string estrip(string target) {
    if (target[target.length() - 1] == ' '){
        string result;
        for (size_t i = 0; i < target.length(); i++)
        {
            if (i == target.length() - 1 && target[i] == ' ') continue;
            result += target[i];
        }
        return result;
    } else {
        return target;
    }
}

string strip(string target) {
    return sstrip(estrip(target));
}


bool contains(string target, string to_find) {
    if (target.find(to_find) != string::npos) {
        return true;
    }
    return false;
}


int indexOf(string target, string to_find) {
    return target.find(to_find);
}



std::string removePrefixAndSuffix(const std::string& input, const std::string& prefix, const std::string& suffix) {
    std::string result = input;

    // Check and remove the prefix
    if (result.substr(0, prefix.length()) == prefix) {
        result.erase(0, prefix.length());
    }

    // Check and remove the suffix
    size_t suffixPos = result.rfind(suffix);
    if (suffixPos != std::string::npos && suffixPos == result.length() - suffix.length()) {
        result.erase(suffixPos, suffix.length());
    }

    return result;
}
#endif
