import CreateCreate from "../../../../../method/create-create";
import IsType from "../../boolean/type";
import Type from "../../type";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../path/create";
import ArrayOf from "t-array/boolean/array-of";

export default function Create() : Route {

    return CreateRoute(CreateCreate(), Path(), (value : any) : value is Type[] => ArrayOf(value, IsType));
}
