# Crotan, a language of futuristic syntax.

Welcome to crotan, a language that features a new and furturistic syntax that rejects the concepts and values of traditional C.

## About Crotan

Crotan is a dynamically typed, interpreted hybrid programming language that combines the elite concepts of Functional Programming and Object Oriented Programming. Objects, instead of being  mutable entites are immutable constant datatypes that are interacted with using functions. Crotan is written in JavaScript which allows it to directly interact with JS code and the browser by the means of extentions made using JS. That being said, Crotan is more of a Domain Specific Language rather than a traditional Interperted one.

## Features of Crotan

#### Unique Syntax

While it is true that crotan is a curly-bracket language like C, Crotan tends to recreate various syntactic things that C didn't have.

## Example Programs

##### Hello world example:

```cpp
@ Hello World Program! @
using("./crotanlib/stdout.cro")
print("Hello World!")
```

##### Print name example:

```cpp
@ Name printer @

using("./crotanlib/stdout.cro")
user-name = input("Hi, What's your name? ")
print("Hello", user-name)
```

##### Advance name printer example:

```cpp
@ Advance name printer that uses functions! @
using("./crotanlib/stdout.cro")
declare sayHelloTo {
	print("Hello", arg0)
}
name = input("Hi, Whats your name? ")
sayHelloTo(name)
```

##### Number comparer example:

```cpp
@
	Welcome to this program. In this program we compare 2 numbers
	that are entered by the user
@
using("./crotanlib/stdout.cro")
declare compareNumbers {
	n1 = arg0
	n2 = arg1
	print("N1 is greater than N2? ", n1 > n2)
	print("N1 is less than N2? ", n1 < n2)
	print("N1 is equal to N2? ", n1 ~ n2)
	noreturn
}
compareNumbers(10, 20)
```

##### Module Example:

```cpp
declare toBeExported {
	@...function stuff...@
}
exports(toBeExported)
```
