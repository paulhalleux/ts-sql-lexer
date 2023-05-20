import { ParsedSql } from "../index";
import { Expression } from "./expression";

/**
 * Sub query expression
 * @property {string} _type - "sub_query"
 * @property {ParsedSql} query - sub query
 * @property {string} [alias] - sub query alias
 */
export type SubQueryExpression = {
  _type: Expression.SubQuery;
  query: ParsedSql;
  alias?: string;
};
