import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../create/request/path/create";
import Read from "../../../../../method/read-create";
import CreateRoute from "../../../../../route/create";
import TypeData from "../request/data/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), TypeData);
}
