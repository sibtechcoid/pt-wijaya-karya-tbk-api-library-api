import Code from "../code/code";
import Body from "../body/body";

export default interface BadRequest<B> extends Code<400>, Body<B> {

}