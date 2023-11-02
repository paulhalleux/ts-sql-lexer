# ts-sql-lexer

> This is a test project, first time trying to do this kind of thing.

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

