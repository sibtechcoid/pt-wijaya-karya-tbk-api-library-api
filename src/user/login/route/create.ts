import Login from "../request/login/login";
import Read from "../../../method/read-create";
import Validator from "../../../validator/create";
import Type from "../request/login/boolean/type";
import Route from "./route";
import Path from "../request/path/create";
import CreateRoute from "../../../route/create";

export default function Create() : Route {

    return CreateRoute(Read(), Path(), Type);

}
