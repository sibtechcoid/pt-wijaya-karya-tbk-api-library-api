import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Business from "../../create/request/business/business";
import Id from "../../../../../id/id";
import Method from "../request/method/method";

export default interface Request extends Body<Business & Id>, Path, Method {

}