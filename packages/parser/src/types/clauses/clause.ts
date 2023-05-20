/**
 * Clause type enum.
 */
export enum Clause {
  Select = "select_clause",
  From = "from_clause",
  Where = "where_clause",
  GroupBy = "group_by_clause",
  Having = "having_clause",
  OrderBy = "order_by_clause",
  Limit = "limit_clause",
  Offset = "offset_clause",
}
