import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../route/create";
import Delete from "../../../method/delete-create";
import TypeId from "../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(Delete(), Path(), TypeId);
}
