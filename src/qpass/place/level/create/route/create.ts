import CreateCreate from "../../../../../method/create-create";
import LevelType from "../../boolean/type";
import Level from "../../level";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../path/create";
import ArrayOf from "t-array/boolean/array-of";

export default function Create() : Route {

    return CreateRoute(CreateCreate(), Path(), (value : any) : value is  Level[] => ArrayOf(value, LevelType));
}
