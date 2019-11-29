import Route from "./route";
import Path from "../../update/request/path/create";
import Method from "../../../../method/create-create";
import CreateRoute from "../../../../route/create";
import AccessType from "../request/body/boolean/type";
import Body from "../request/body/body";
import Id from "../../../../id/id";
import TypeId from "../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(Method(), Path(), (access : any) : access is Body & Id => AccessType(access) && TypeId(access));
}
