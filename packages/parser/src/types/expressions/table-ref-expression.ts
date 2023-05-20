import { Expression } from "./expression";

/**
 * Table ref expression
 * @property {string} _type - "table"
 * @property {string} name - table name
 * @property {string} [alias] - table alias
 * @property {string} [schemaName] - schema name
 */
export type TableRefExpression = {
  _type: Expression.TableRef;
  name: string;
  alias?: string;
  schemaName?: string;
};
