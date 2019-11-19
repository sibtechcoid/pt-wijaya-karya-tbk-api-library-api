import DeleteCreate from "../../../../../method/delete-create";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../request/path/create";
import TypeActivable from "../../../../../active/boolean/type";

export default function Create() : Route {

    return CreateRoute(DeleteCreate(), Path(), TypeActivable);
}
