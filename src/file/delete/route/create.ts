import DeleteCreate from "../../../method/delete-create";
import Route from "./route";
import CreateRoute from "../../../route/create";
import Path from "../../create/request/path/create";
import Type from "../request/body/boolean/type";

export default function Create() : Route {

    return CreateRoute(DeleteCreate(), Path(), Type);
}
