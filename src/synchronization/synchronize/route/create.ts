import Route from "./route";
import CreateRoute from "../../../route/create";
import Path from "../request/path/create";
import Standard from "../../../method/standard";
import Type from "../../../method/type/type";

export default function Create() : Route {

    return CreateRoute(new Standard(Type.GET), Path(), (v : any) : v is undefined =>true);
}
