
import Path from "../request/path/path";
import Validator from "../../../validator/validator";
import Text from "../../../text/text";
import Method from "../request/method/method";

export default interface Route extends Path, Validator<Text>, Method {

}