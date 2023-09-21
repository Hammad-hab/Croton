function escapeSpecialCharacters(inputString) {
  // Define a map of special characters and their escape sequences
  const escapeMap = {
    '\x1b': '\\x1b',
    '\t': '\\t',
    '\b': '\\b',
    '\n': '\\n',
    '\r': '\\r',
    '\\': '\\\\', // Backslash itself needs to be escaped
    // Add more special characters and escape sequences as needed
  };

  // Use a regular expression to match any special character not preceded by a backslash
  const specialCharacterPattern = /(?<!\\)([\\\x1b\t\b\n\r])/g;

  // Replace each matched special character with its escape sequence
  return inputString.replace(specialCharacterPattern, (match) => {
    if (match === '\\') {
      // Handle double backslashes by escaping the first one
      return '\\\\';
    } else {
      return escapeMap[match];
    }
  });
}

function replaceASCIIEscapeSequences(inputString) {
  // Define a mapping of commonly used escape sequences and their replacements
  const escapeMap = {
    '\\n': '\n',   // Newline
    '\\t': '\t',   // Tab
    '\\r': '\r',   // Carriage return
    '\\b': '\b',   // Backspace
    '\\f': '\f',   // Form feed
    '\\\\': '\\',  // Backslash
    '\\\'': '\'',  // Single quote
    '\\\"': '\"',  // Double quote
    '\\x1b[0m': '\x1b[0m', // TextColorReset
    '\\x1b[31m': '\x1b[31m', // TextColorRed
    '\\x1b[32m': '\x1b[32m', // TextColorGreen
    '\\x1b[33m': '\x1b[33m', // TextColorYellow
    '\\x1b[34m': '\x1b[34m', // TextColorBlue
    '\\x1b[35m': '\x1b[35m', // TextColorMagenta
    '\\x1b[36m': '\x1b[36m', // TextColorCyan
    '\\x1b[37m': '\x1b[37m', // TextColorWhite
    '\\x1b[41m': '\x1b[41m', // BackgroundColorRed
    '\\x1b[42m': '\x1b[42m', // BackgroundColorGreen
    '\\x1b[43m': '\x1b[43m', // BackgroundColorYellow
    '\\x1b[44m': '\x1b[44m', // BackgroundColorBlue
    '\\x1b[45m': '\x1b[45m', // BackgroundColorMagenta
    '\\x1b[46m': '\x1b[46m', // BackgroundColorCyan
    '\\x1b[47m': '\x1b[47m'  // BackgroundColorWhite
  };

  // Use a regular expression to match escape sequences
  const escapePattern = /\\[ntrbf\\'"\x1b[0-9;]*m/g;

  // Replace each matched escape sequence with its respective result
  return inputString.replace(escapePattern, (match) => escapeMap[match] || match);
}


module.exports = {
  escapeSpecialCharacters,
  replaceASCIIEscapeSequences
}