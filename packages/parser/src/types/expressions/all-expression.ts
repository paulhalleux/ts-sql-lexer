import { Expression } from "./expression";

/**
 * All expression
 * @property {string} _type - "all"
 * @property {string} [table] - table name
 */
export type AllExpression = {
  _type: Expression.All;
  table?: string;
};
