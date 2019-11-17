import HttpMethod from "../method/type/type";
import Body from "../body/body";
import Code from "../code/code";
import Message from "../message/message";

export default interface Request <C extends number, B> extends Code<C>, Message, Body<B> {
    code : C;
    body : B;
    message : string;
}