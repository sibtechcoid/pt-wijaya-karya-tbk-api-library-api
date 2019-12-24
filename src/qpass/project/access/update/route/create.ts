import Route from "./route";
import Path from "../../create/request/path/create";
import Read from "../../../../../method/update-create";
import CreateRoute from "../../../../../route/create";
import AccessType from "../request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), AccessType);
}
