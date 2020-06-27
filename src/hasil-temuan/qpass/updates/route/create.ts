import Route from "./route";
import CreateRoute from "../../../../route/create";
import UpdateCreate from "../../../../method/update-create";
import TypeType from "../request/body/boolean/type";
import Path from "../request/path/create";

export default function Create () : Route {

    return CreateRoute(UpdateCreate(), Path(), TypeType);
}
