import Delete from "../../../method/delete-create";
import Route from "./route";
import Path from "../../sign-in/request/path/create";
import CreateRoute from "../../../route/create";

export default function Create() : Route {

    return CreateRoute(Delete(), Path(), (v) : v is undefined =>true);

}
