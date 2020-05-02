import IsType from "../request/body/boolean/type";
import Route from "./route";
import CreateRoute from "../../../route/create";
import Path from "../request/path/create";
import ReadCreate from "../../../method/read-create";

export default function Create() : Route {

    return CreateRoute(ReadCreate(), Path(), IsType);
}
