import Route from "./route";
import Path from "../../update/request/path/create";
import Read from "../../../../method/update-create";
import CreateRoute from "../../../../route/create";
import AksesType from "../request/body/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), AksesType);
}
