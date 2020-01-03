import Route from "./route";
import Path from "../../create/request/path/create";
import Read from "../../../method/read-create";
import CreateRoute from "../../../route/create";
import DeactivatedType from "../request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), DeactivatedType);
}
