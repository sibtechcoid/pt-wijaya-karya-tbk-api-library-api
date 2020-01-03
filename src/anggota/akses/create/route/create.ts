import Route from "./route";
import Path from "../../update/request/path/create";
import Method from "../../../../method/create-create";
import CreateRoute from "../../../../route/create";
import AksesType from "../request/body/boolean/type";
import Body from "../request/body/body";
import Id from "../../../../id/id";
import TypeId from "../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(Method(), Path(), (akses : any) : akses is Body & Id => AksesType(akses) && TypeId(akses));
}
