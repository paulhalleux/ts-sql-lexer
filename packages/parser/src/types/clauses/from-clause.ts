import { Clause } from "./clause";
import { TableRefExpression } from "../expressions/table-ref-expression";
import { SubQueryExpression } from "../expressions/sub-query-expression";

/**
 * From clause
 * @property {string} _type - "from"
 * @property {TableRefExpression | SubQueryExpression} expression
 */
export type FromClause = {
  _type: Clause.From;
  expression: TableRefExpression | SubQueryExpression;
};
