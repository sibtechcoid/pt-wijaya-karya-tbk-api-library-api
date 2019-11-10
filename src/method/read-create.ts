import Method from "./method";
import Type from "./type/type";
import Standard from "./standard";

export default function ReadCreate () : Method<Type.POST> {

    return new Standard(Type.POST);
}

