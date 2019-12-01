import Code from "../code/code";
import Body from "../body/body";

export default interface UnprocessableEntity<B> extends Code<422>, Body<B> {

}