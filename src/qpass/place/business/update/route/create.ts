import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../../../route/create";
import UpdateCreate from "../../../../../method/update-create";
import Business from "../../create/request/business/business";
import TypeType from "../../create/request/business/boolean/type";
import Id from "../../../../../id/id";
import TypeId from "../../../../../id/boolean/type";

export default function Create () : Route {

    return CreateRoute(
        UpdateCreate(),
        Path(), (value : any) : value is Business & Id => TypeType(value) && TypeId(value)
    );
}
