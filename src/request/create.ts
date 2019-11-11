import HttpMethod from "../method/type/type";
import Body from "../body/body";
import Method from "../method/method";
import Path from "../path/path";

export default class Create<M extends HttpMethod, P extends string, B> implements Body<B>, Method<M>, Path<P> {

    constructor(
        public method : M,
        public path : P,
        public body : B,
    ) {}
}