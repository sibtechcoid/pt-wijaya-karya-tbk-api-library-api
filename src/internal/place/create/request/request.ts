import Body from "../../../../body/body";
import Path from "./path/path";
import Create from "../../../../method/create";
import Place from "./place/place";
import Method from "./method/method";

export default interface Request extends Body<Place>, Path, Method {

}