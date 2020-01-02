import Code from "../../code/code";
import Message from "../../message/message";
export default function Type<Extended extends Code<number> & Message = Code<number> & Message>(value: any): value is Extended;
