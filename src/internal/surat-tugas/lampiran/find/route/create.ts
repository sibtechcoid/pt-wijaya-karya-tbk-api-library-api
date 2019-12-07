import Route from "./route";
import Path from "../request/path/create";
import Read from "../../../../../method/read-create";
import CreateRoute from "../../../../../route/create";
import Type from "../../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), Type);
}
