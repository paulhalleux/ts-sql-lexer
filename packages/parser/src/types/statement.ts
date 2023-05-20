/**
 * Statement type enum
 */
export enum Statement {
  Select = "select_statement",
  Insert = "insert_statement",
  Update = "update_statement",
  Delete = "delete_statement",
  DropTable = "drop_table_statement",
  CreateTable = "create_table_statement",
  AlterTable = "alter_table_statement",
}
