import Request from './request';
import Read from "../../../method/read-create";
import CreatBody from "../../../body/create";
import Text from "../../../text/text";
import Path from "./path/create";

export default function Create(text : Text) : Request {

    return Object.assign(Read(), Path(), new CreatBody<Text>(text))
}