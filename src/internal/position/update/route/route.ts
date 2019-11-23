import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Position from "../../create/request/position/position";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";

export default interface Route extends Path, Validator<Position & Id>, Method {

}