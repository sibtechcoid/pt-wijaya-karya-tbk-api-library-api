import Login from "../login";
import Read from "../../../method/read-create";
import Validator from "../../../validator/create";
import Type from "../boolean/type";
import Route from "./route";
import Path from "../path/create";

export default function Create() : Route {

    return Object.assign(Read(), Path() , new Validator<Login>(Type));
}
