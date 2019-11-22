import Route from "./route";
import Path from "../../update/request/path/create";
import Read from "../../../../method/update-create";
import CreateRoute from "../../../../route/create";
import DeactivatedType from "../request/authorization/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), DeactivatedType);
}
