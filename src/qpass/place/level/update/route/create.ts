import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../create/path/create";
import CreateRoute from "../../../../../route/create";
import UpdateCreate from "../../../../../method/update-create";
import ArrayOf from "t-array/boolean/array-of";
import Level from "../../level";
import TypeType from "../../boolean/type";
import Id from "../../../../../id/id";
import TypeId from "../../../../../id/boolean/type";

export default function Create () : Route {

    let withId = (value : any) : value is Level & Id => TypeType(value) && TypeId(value);
    let validator = (body : any) : body is (Level & Id)[] => ArrayOf<Level & Id>(body, withId);

    return CreateRoute(
        UpdateCreate(),
        Path(), validator
    );
}
