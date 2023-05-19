import { Lexer } from "../src/lexer/lexer";

describe("testing tokenizer on create table statement", () => {
  test("can tokenize simple create table", () => {
    const result = new Lexer().tokenize(
      "CREATE TABLE [dbo].[TableName] ( [Id] INT NOT NULL, [Name] NVARCHAR(50) NOT NULL, [Description] NVARCHAR(100) NULL, CONSTRAINT [PK_TableName] PRIMARY KEY CLUSTERED ( [Id] ASC ) )"
    );
    expect(result).toHaveLength(36);
  });

  test("can tokenize with identity", () => {
    const result = new Lexer().tokenize(
      "CREATE TABLE [dbo].[TableName] ( [Id] INT NOT NULL IDENTITY(1,1), [Name] NVARCHAR(50) NOT NULL, [Description] NVARCHAR(100) NULL, CONSTRAINT [PK_TableName] PRIMARY KEY CLUSTERED ( [Id] ASC ) )"
    );
    expect(result).toHaveLength(42);
  });

  test("can tokenize with identity and default", () => {
    const result = new Lexer().tokenize(
      "CREATE TABLE [dbo].[TableName] ( [Id] INT NOT NULL IDENTITY(1,1), [Name] NVARCHAR(50) NOT NULL DEFAULT 'abc', [Description] NVARCHAR(100) NULL, CONSTRAINT [PK_TableName] PRIMARY KEY CLUSTERED ( [Id] ASC ) )"
    );
    expect(result).toHaveLength(44);
  });
});
