import Code from "../code/code";
import Body from "../body/body";

export default interface Conflict<B> extends Code<409>, Body<B> {

}