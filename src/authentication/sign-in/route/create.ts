import CreateCreate from "../../../method/create-create";
import Type from "../request/login/boolean/type";
import Route from "./route";
import Path from "../request/path/create";
import CreateRoute from "../../../route/create";

export default function Create() : Route {

    return CreateRoute(CreateCreate(), Path(), Type);

}
