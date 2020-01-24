import Route from "./route";
import Path from "../path/create";
import Read from "../../../../method/read-create";
import CreateRoute from "../../../../route/create";
import TypeBody from "../request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), TypeBody);
}
