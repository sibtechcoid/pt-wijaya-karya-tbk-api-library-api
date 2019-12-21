import Delete from "../../../method/delete-create";
import Type from "../../sign-in/request/body/boolean/type";
import Route from "./route";
import Path from "../../sign-in/request/path/create";
import CreateRoute from "../../../route/create";

export default function Create() : Route {

    return CreateRoute(Delete(), Path(), Type);

}
