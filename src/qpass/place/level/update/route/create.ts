import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../create/path/create";
import Level from "../../level";
import TypeType from "../../boolean/type";
import Update from "../../../../../method/update-create";
import CreateRoute from "../../../../../route/create";

export default function Create () : Route {

    return CreateRoute(Update(), Path(), TypeType);
    //return Object.assign(Update(), Path() , new Validator<Level>(TypeType));
}
