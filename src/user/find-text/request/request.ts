import Body from "../../../body/body";
import Text from "../../../text/text";
import Path from "../path/path";
import Method from "../method/method";

export default interface Request extends Body<Text>, Path, Method {

}