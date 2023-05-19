export const Regex = {
  Whitespace: / /,
  Alpha: /[a-zA-Z]/,
  AlphaNumeric: /[a-zA-Z0-9]/,
  AlphaNumericOrUnderscore: /[a-zA-Z0-9_\[\]]/,
  NumericStart: /[-+]/,
  NumericPartChar: /[.eE]/,
  NumericPart: /[0-9]/,
  Literal: /['"]/,
  NewLine: /\r\n|\r|\n/,
  InlineCommentStart: /--/,
  BlockCommentStart: /\/\*/,
  BlockCommentEnd: /\*\//,
};
