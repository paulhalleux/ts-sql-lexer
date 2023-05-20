import { Expression } from "./expression";

/**
 * All expression
 * @property {string} _type - "all"
 * @property {string} [table] - table name
 */
export type FunctionExpression = {
  _type: Expression.Function;
  name: string;
  args: Array<FunctionExpressionArgument>;
};

/**
 * Function expression argument
 */
export type FunctionExpressionArgument = string | FunctionExpression;
