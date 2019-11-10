import Method from "./method";
import Type from "./type/type";
import Standard from "./standard";

export default function UpdateCreate () : Method<Type.PATCH> {

    return new Standard(Type.PATCH);
}