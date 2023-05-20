import { Clause } from "./clause";
import { ColumnExpression } from "../expressions/column-expression";
import { AllExpression } from "../expressions/all-expression";
import { FunctionExpression } from "../expressions/function-expression";

/**
 * Select clause
 * @property {string} _type - "select"
 * @property {boolean} [distinct] - distinct flag
 * @property {Array<AllExpression | ColumnExpression | FunctionExpression>} expressions
 */
export type SelectClause = {
  _type: Clause.Select;
  distinct?: boolean;
  hint?: string;
  expressions: Array<AllExpression | ColumnExpression | FunctionExpression>;
};
