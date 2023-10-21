#include<stdio.h>
#include<string.h>
#define MAX_READ_LENGTH 1000

char* inputln(char* prompt) {
	static char promptData[MAX_READ_LENGTH];
	printf("%s", prompt);
	fgets(promptData, MAX_READ_LENGTH, stdin);

	// Remove the trailing newline character if it exists
	size_t len = strlen(promptData);
	if (len > 0 && promptData[len - 1] == '\n') {
		promptData[len - 1] = '\0';
	}

	return promptData;
}

