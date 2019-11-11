import Path from "../path/path";
import Validator from "../validator/validator";
import Method from "../method/method";
import Type from "../method/type/type";

export default interface Route<M extends Type, P extends string, Body> extends Path<P>, Validator<Body>, Method<M> {

}