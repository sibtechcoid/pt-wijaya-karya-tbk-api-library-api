import Login from "../login";
import Read from "../../../method/read-create";
import Validator from "../../../validator/create";
import Type from "../boolean/type";
import Route from "./route";
import Path from "../path/create";
import CreateRoute from "../../../route/create";

export default function Create() : Route {

    return CreateRoute(Read(), Path(), Type);

}
