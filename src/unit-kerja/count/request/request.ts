import BaseBody from "../../../body/body";
import Path from "./path/path";
import Read from "../../../method/read";
import Where from "../../reads/request/body/where/where";

export default interface Request extends BaseBody<Where>, Path, Read {

}
