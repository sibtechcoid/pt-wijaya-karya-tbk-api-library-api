import Access from "../request/access/access";
import Path from "../request/path/path";
import Validator from "../../../../validator/validator";
import Method from "../request/method/method";
import Id from "../../../../id/id";

export default interface Route extends Path, Validator<Access & Id>, Method {

}