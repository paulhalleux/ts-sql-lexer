import { Expression } from "./expression";

/**
 * Select column expression
 * @property {string} _type - "column"
 * @property {string} name - column name
 * @property {string} [alias] - column alias
 * @property {string} [table] - table name
 */
export type ColumnExpression = {
  _type: Expression.Column;
  name: string;
  alias?: string;
  table?: string;
};
