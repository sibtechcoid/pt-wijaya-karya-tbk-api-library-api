import Method from "./method";
import Type from "./type/type";
import Standard from "./standard";

export default function CreateCreate () : Method<Type.PUT> {

    return new Standard(Type.PUT);
}