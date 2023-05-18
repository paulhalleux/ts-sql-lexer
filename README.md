# ts-sql-lexer

> This is a personal project, not intended for production use.
> It is a work in progress, and is not yet ready for use. (and may never be)
> 
> It is just a fun project to learn about lexers and parsers.

A lexer for SQL written in TypeScript.

## Usage

```typescript
const lexer = new Lexer(/* options */);
const tokens = lexer.tokenize('SELECT * FROM my-table');
// -> tokens : Token[]
// [
//  { type: 'keyword', value: 'SELECT' },
//  { type: 'operator', value: '*' },
//  { type: 'keyword', value: 'FROM' },
//  { type: 'identifier', value: 'my-table' }
// ]
```

