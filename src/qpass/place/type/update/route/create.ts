import Validator from "../../../../../validator/create";
import Route from "./route";
import Path from "../../path/create";
import TypeInterface from "../../type";
import TypeType from "../../boolean/type";
import Update from "../../../../../method/update-create";

export default function Create () : Route {

    return Object.assign(Update(), Path() , new Validator<TypeInterface>(TypeType));
}
