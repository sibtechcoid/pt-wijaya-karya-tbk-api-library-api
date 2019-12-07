import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../route/create";
import UpdateCreate from "../../../method/update-create";
import User from "../request/body/body";
import TypeType from "../../update/request/body/boolean/type";
import Id from "../../../id/id";
import TypeId from "../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), TypeType
    );
}
