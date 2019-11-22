import Code from "../code/code";
import Message from "../message/message";
import Body from "../body/body";
export default function Create<C extends number, B>(code: C, message: string, body: B): Code<C> & Body<B> & Message;
