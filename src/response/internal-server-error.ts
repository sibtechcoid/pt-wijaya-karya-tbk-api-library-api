import Code from "../code/code";
import Body from "../body/body";

export default interface InternalServerError<B> extends Code<500>, Body<B> {

}