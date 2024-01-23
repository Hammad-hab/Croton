#!/opt/homebrew/bin/python3
from executers import executeFunction, resolveIdentifier, resolveVariableDeclaration, resolveFunctionDeclaration, resolveAccessors, resolveIfCondition
import typesd # type: ignore
from std import std
from typesd import crInternalFailureError, Object # type: ignore
import sys, json
reserved = [
    "as",
    "return"
]
class CrotonObjectNotationExecuter:
    @staticmethod 

    def completeEvaluation(list:list, caller=None):
        for token in list:
            if token.get('name', False) and token["name"] in reserved:
                if token["name"] == "as":
                    target= list[list.index(token) - 1]
                    value: str = list.pop(list.index(token) + 1)["name"]
                    std[value] = CrotonObjectNotationExecuter.evaluateCrotonObjectNotationStatement(target) #type:ignore
                    std[value].en_override = 0
                    continue
                if token["name"] == "return" and caller:
                    value = list.pop(list.index(token) + 1)
                    value = CrotonObjectNotationExecuter.evaluateCrotonObjectNotationStatement(value) # type: ignore
                    return value
            try:
                CrotonObjectNotationExecuter.evaluateCrotonObjectNotationStatement(token)
            except Exception as e:
                crInternalFailureError("Py{!r}".format(e))
                # raise

    
    
    @staticmethod
    def evaluateCrotonObjectNotationStatement(json: dict):
        if json["type"] == "Function":
            arguments = []
            for value in json["arguments"]:
                eval_v = CrotonObjectNotationExecuter.evaluateCrotonObjectNotationStatement(value) if not isinstance(value, Object) else value
                arguments.append(eval_v)
                ...
            json["argumentsp"] = arguments
            fn =  executeFunction(json) # type: ignore
            # print(fn.__name__)
            return fn(*json["argumentsp"])
            ...
        if json["type"] == "IntegerLiteral":
            return typesd.Number(json["value"])
        
        if json["type"] == "String":
            return typesd.String(json["value"])
        
        if json["type"] == "Identifier":
            return resolveIdentifier(json) # type: ignore
        
        if json["type"] == "VariableDeclaration":
            # json["assignee"]["type"]
            json["value"] = CrotonObjectNotationExecuter.evaluateCrotonObjectNotationStatement(json["assignee"]) if not isinstance(json["assignee"], Object) else json["assignee"]
            return resolveVariableDeclaration(json) # type: ignore
        
        if json["type"] ==  "FunctionDeclaration":
            return resolveFunctionDeclaration(json, CrotonObjectNotationExecuter.completeEvaluation)
            ...
        
        if json["type"] == "ObjectAccessPoint":
            return resolveAccessors(json,)
        
        if json["type"] == "Statement" and json["name"] == "if":
            json["condition"] = CrotonObjectNotationExecuter.evaluateCrotonObjectNotationStatement(json["executioners"])
            
            resolveIfCondition(json)
        
        pass

if __name__ == "__main__" and len(sys.argv[1:]) > 0:
    FILE = sys.argv[1]
    
    with open(sys.argv[1], "r") as f:
        contents = f.read()
        contents = json.loads(contents)
        CrotonObjectNotationExecuter.completeEvaluation(contents)