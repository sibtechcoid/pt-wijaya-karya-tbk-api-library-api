import CreateCreate from "../../../../../method/create-create";
import BusinessType from "../../boolean/type";
import Business from "../../business";
import Route from "./route";
import CreateRoute from "../../../../../route/create";
import Path from "../path/create";
import ArrayOf from "t-array/boolean/array-of";

export default function Create() : Route {

    return CreateRoute(CreateCreate(), Path(), (value : any) : value is Business[] => ArrayOf(value, BusinessType));
}
