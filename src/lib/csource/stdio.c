#include<stdio.h>
#define MAX_READ_LENGTH 1000

char* inputln(char* prompt) {

	static char promptData[MAX_READ_LENGTH];

	printf("%s", prompt);
	scanf("%s", promptData);

	return promptData;
};
