#ifndef DATATYPES_H
#define DATATYPES_H 1
#include<iostream>
#include<fstream>
#include<string>
#include<map>
#include<any>
#include<functional>
#include<vector>
#include<format>
using namespace std;

string file_name = "_Null_File";

void raiseCrotonError(string error, bool doesExit=true) {
    cout << "\033[0;31m[CrotonVM : Failure (" << file_name << ")" << "] >> \n\t" << error  << "\n" << "\tForcefully exited Program...\033[0m" << endl;
    if (doesExit) {
        exit(-1);
    }
}

void raiseCrotonWarning(string error) {
    cout << "\033[33m[CrotonVM : Warning] >> \n\t" << error  << "\n" << "\tContinuing Program Execution (Risky)...\033[0m" << endl;
}

// template <typename ValueCPPType = std::string>
class CrotonBaseObject {
    private:
        string valStr;
        int valInt;
        double valFloat;
        bool valBool;
    public:

        string type = "CrotonBaseObject";
        map<string, CrotonBaseObject*> properties_str;
        string getType() {
            return type;
        }

        virtual string cr__repr() {
            return "<CrotonBaseObject type[" + type + "]>";
        }

        virtual bool cr__isfalsy() {
            return true;
        }
        
        string getValueS() {
            return valStr;
        };

        int getValueI() {
            return valInt;
        };

        double getValueF() {
            return valFloat;
        };

        bool getValueB() {
            return valBool;
        };
        
        void setValueS(string valu) {
            valStr = valu;
        }

        void setValueI(int valu) {
            valInt = valu;
        };

        void setValueF(double valu) {
            valFloat = valu;
        };

        void setValueB(bool valu) {
            valBool = valu;
        };

        
        virtual int length() {
            raiseCrotonError("CrotonBaseObject does not implement the length method.");
            return 0;
        };     
        virtual CrotonBaseObject* clone() const {
            return new CrotonBaseObject(*this); // Calls the copy constructor
        }
};

class CrotonString: public CrotonBaseObject {
    public:
    
        CrotonString(string value) {
            setValueS(value);
            type = "String";
        }

        virtual int length() override {
            return getValueS().length();
        }

        virtual bool cr__isfalsy() override {
            return length() > 0 ? false : true;
        };

        virtual string cr__repr() override {
            return getValueS();
        }
        virtual CrotonString* clone() const override {
            return new CrotonString(*this); // Calls the copy constructor
        }
};

class CrotonNumber: public CrotonBaseObject{
    public:
        CrotonNumber(double value) {
            setValueF(value);
            type = "Number";
        }

        virtual bool cr__isfalsy() override {
            return getValueF() > 0 ? false : true;
        };

        string cr__repr() override{
            return to_string(getValueF());
        }
        virtual CrotonNumber* clone() const override {
            return new CrotonNumber(*this); // Calls the copy constructor
        }
};

class CrotonBoolean: public CrotonBaseObject{
    public:
        CrotonBoolean(bool value) {
            setValueB(value);
            type = "Boolean";
        }

        virtual bool cr__isfalsy() override {
            return !getValueB();
        };

        string cr__repr() override{
            return to_string(getValueB());
        }
};


class CrotonFunction: public CrotonBaseObject {
    private:
        string name;
        vector<string> source;
        string rsource;
    public:
        CrotonFunction(string fn_name) {
            name = fn_name;
        }

        string getName() {
            return name;
        }

        void setSource(vector<string> src) {
            source = src;
        }

        void setSource(string src) {
            rsource = src;
        }

        void cr_call();

        virtual bool cr__isfalsy() override {
            return false;
        };

        string cr__repr() override{
            return "<CrotonFunction["+ name +"]>";
        }
};


typedef vector<CrotonBaseObject*> CrotonObjectVector;
typedef vector<CrotonBaseObject*>::iterator CrotonObjectIterator;
typedef int ArgumentPosition;
typedef function<void(void)> CrotonFunctionReference;
typedef map<string, CrotonFunctionReference> FunctionMap;
typedef map<string, CrotonBaseObject*> CrotonObjectContainer;
#endif