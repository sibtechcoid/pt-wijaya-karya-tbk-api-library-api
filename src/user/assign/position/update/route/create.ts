import Update from "../../../../../method/update-create";
import IsType from "../request/body/boolean/type";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../request/path/create";

export default function Create() : Route {

    return CreateRoute(Update(), Path(), IsType);
}
