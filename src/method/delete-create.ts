import Method from "./method";
import Type from "./type/type";
import Standard from "./standard";


export default function DeleteCreate () : Method<Type.DELETE> {

    return new Standard(Type.DELETE);
}