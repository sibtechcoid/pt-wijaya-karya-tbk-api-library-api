import Route from "./route";
import Path from "../request/path/create";
import Read from "../../../../../method/read-create";
import CreateRoute from "../../../../../route/create";
import IdType from "../../../../../id/boolean/type";
import Standard from "../../../../../method/standard";
import Type from "../../../../../method/type/type";

export default function Create () : Route {

    return CreateRoute(new Standard(Type.GET), Path(), IdType);
}
