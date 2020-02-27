import Route from "./route";
import Path from "../request/path/create";
import Read from "../../../method/read-create";
import CreateRoute from "../../../route/create";
import WhereType from "../../reads/request/body/where/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), WhereType);
}
