import { LiteralQuoteType } from "../types";

/**
 * Checks if a character is an escaped quote.
 * @param input  The input string.
 * @param index The index of the character to check.
 * @param quoteType The quote type to check.
 */
export function isEscapedQuote(
  input: string,
  index: number,
  quoteType: LiteralQuoteType
) {
  return (input[index] === quoteType && input[index + 1]) === quoteType;
}
