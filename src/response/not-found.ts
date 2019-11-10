import Code from "../code/code";
import Body from "../body/body";

export default interface NotFound<B> extends Code<404>, Body<B> {

}