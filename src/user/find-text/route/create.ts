import Read from "../../../method/read-create";
import Validator from "../../../validator/create";
import Type from "../../../text/boolean/type";
import Route from "./route";
import Path from "../request/path/create";
import Text from "../../../text/text";

export default function Create () : Route {

    return Object.assign(Read(), Path() , new Validator<Text>(Type));
}
