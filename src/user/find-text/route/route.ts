
import Path from "../path/path";
import Validator from "../../../validator/validator";
import Text from "../../../text/text";
import Method from "../method/method";

export default interface Route extends Path, Validator<Text>, Method {

}