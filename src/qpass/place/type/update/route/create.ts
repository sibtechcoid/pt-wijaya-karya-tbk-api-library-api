import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../create/request/path/create";
import CreateRoute from "../../../../../route/create";
import UpdateCreate from "../../../../../method/update-create";
import ArrayOf from "t-array/boolean/array-of";
import Data from "../../create/request/data/data";
import TypeType from "../../create/request/data/boolean/type";
import Id from "../../../../../id/id";
import TypeId from "../../../../../id/boolean/type";

export default function Create () : Route {

    // let withId = (value : any) : value is Data & Id => TypeType(value) && TypeId(value);
    // let validator = (body : any) : body is (Data & Id)[] => ArrayOf<Data & Id>(body, withId);

    return CreateRoute(
        UpdateCreate(),
        Path(), (value : any) : value is Data & Id => TypeType(value) && TypeId(value)
    );
}
