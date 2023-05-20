/**
 * Expression types enum.
 */
export enum Expression {
  Select = "select_expression",
  Table = "table_expression",
  TableRef = "table_name_expression",
  SubQuery = "sub_query_expression",
  All = "select_all_expression",
  Column = "select_column_expression",
  Function = "function_expression",
}
