import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../../../route/create";
import UpdateCreate from "../../../../../method/update-create";
import Type from "../../create/request/body/body";
import TypeType from "../request/body/boolean/type";
import Id from "../../../../../id/id";
import TypeId from "../../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), TypeType
    );
}
