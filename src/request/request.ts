import HttpMethod from "../method/type/type";
import Method from "../method/method";
import Path from "../path/path";
import Body from "../body/body";

export default interface Request <M extends HttpMethod, P extends string, B> extends Method<M>, Path<P>, Body<B> {
    method : M;
    body : B;
    path : P;
}