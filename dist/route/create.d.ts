import Route from "./route";
import Path from "../path/path";
import Method from "../method/method";
import Type from "../method/type/type";
export default function Create<T extends Type, P extends string, B>(method: Method<T>, path: Path<P>, validator: (value: any) => value is B): Route<T, P, B>;
