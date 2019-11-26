import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../route/create";
import UpdateCreate from "../../../method/update-create";
import User from "../../create/request/user/user";
import TypeType from "../../create/request/user/boolean/type";
import Id from "../../../id/id";
import TypeId from "../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), (value : any) : value is User & Id => TypeType(value) && TypeId(value)
    );
}
