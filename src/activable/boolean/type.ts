import Activable from "../activable";
import NotNull from "t-object/boolean/type";
import ArrayOf from "t-array/boolean/array-of";
import TypeInterface from "../../internal/place/type/type";
import TypeBoolean from "t-boolean/type";
import FiniteNumber from "t-number/boolean/finite";

export default function Type(value : any) : value is Activable {

    return ArrayOf(value, TypeBoolean);
}