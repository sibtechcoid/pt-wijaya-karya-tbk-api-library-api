import Body from "../../../../../body/body";
import Path from "../../create/path/path";
import Read from "../../../../../method/read";
import Data from "./data/data";

export default interface Request extends Body<Data>, Path, Read {

}