import Route from "./route";
import Path from "../../create/request/path/create";
import Read from "../../../../../method/read-create";
import CreateRoute from "../../../../../route/create";
import DeactivatedType from "../../../../../deactivate/read/request/body/boolean/type";
import TypeId from "../../../../../id/boolean/type";
import Type from "../request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), Type);
}
