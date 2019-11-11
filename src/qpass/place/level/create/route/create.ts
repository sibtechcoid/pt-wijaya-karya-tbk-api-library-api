import CreateCreate from "../../../../../method/create-create";
import Type from "../../boolean/type";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../path/create";

export default function Create() : Route {

    return CreateRoute(CreateCreate(), Path(), Type);
}
