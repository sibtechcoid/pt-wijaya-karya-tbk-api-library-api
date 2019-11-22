import Route from "./route";
import Path from "../../update/request/path/create";
import Read from "../../../../method/update-create";
import CreateRoute from "../../../../route/create";
import AccessType from "../request/access/boolean/type";
import Access from "../request/access/access";
import Id from "../../../../id/id";
import TypeId from "../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), (access : any) : access is Access & Id => AccessType(access) && TypeId(access));
}
