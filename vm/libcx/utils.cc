#include<fstream>
#include<iostream>
#include<string>
#include<vector>
#include<any>
#include <sstream>

std::vector<std::string> splitString(const std::string &input, char delimiter) {
    std::vector<std::string> result;
    std::istringstream stream(input);
    std::string token;

    while (std::getline(stream, token, delimiter)) {
        result.push_back(token);
    }

    return result;
}
bool containsSubstring(const std::string &mainString, const std::string &substring) {
    return mainString.find(substring) != std::string::npos;
}

int indexOf(const std::string &mainString, const std::string &substring) {
    size_t pos = mainString.find(substring);
    if (pos != std::string::npos) {
        return static_cast<int>(pos);
    } else {
        // Return -1 if the substring is not found
        return -1;
    }
}
