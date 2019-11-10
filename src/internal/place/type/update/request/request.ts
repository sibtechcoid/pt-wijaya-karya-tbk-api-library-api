import Body from "../../../../../body/body";
import Path from "../../path/path";
import Type from "../../type";
import Id from "../../../../../id/id";
import Update from "../../../../../method/update";

export default interface Request extends Body<(Type & Id)[]>, Path, Update {

}