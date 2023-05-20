import { SelectClause } from "./clauses/select-clause";
import { Statement } from "./statement";

/**
 * Parsed sql statement
 * @property {string} _type - "select" | "insert" | "update" | "delete"
 */
export type ParsedSql = ParsedSelect;

/**
 * Parsed select
 * @property {string} _type - "select"
 * @property {SelectClause} select
 */
export type ParsedSelect = {
  _type: Statement.Select;
  select: SelectClause;
};
