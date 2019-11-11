import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../path/create";
import TypeLimit from "../../../../../limit/boolean/type";
import Read from "../../../../../method/read-create";
import Limit from "../../../../../limit/limit";
import CreateRoute from "../../../../../route/create";

export default function Create () : Route {

    return CreateRoute(Read(), Path(), TypeLimit);
   // return Object.assign(Read(), Path() , new Validator<Limit>(TypeLimit));
}
