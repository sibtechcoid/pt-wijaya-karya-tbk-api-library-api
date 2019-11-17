import Delete from "../../../method/delete-create";
import Type from "../../login/request/login/boolean/type";
import Route from "./route";
import Path from "../../login/request/path/create";
import CreateRoute from "../../../route/create";

export default function Create() : Route {

    return CreateRoute(Delete(), Path(), Type);

}
