import CreateCreate from "../../../../method/create-create";
import IsType from "../request/place/boolean/type";
import Data from "../request/place/data";
import Route from "./route";
import CreateRoute from "../../../../route/create";
import Path from "../request/path/create";
import ArrayOf from "t-array/boolean/array-of";

export default function Create() : Route {

    return CreateRoute(CreateCreate(), Path(), IsType);
}
