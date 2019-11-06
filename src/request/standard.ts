import Request from "./request";
import HttpMethod from "../method/method";

export default class Standard<Method extends HttpMethod, Path extends string, Body> implements Request<Method, Path, Body> {

    constructor(
        readonly method : Method,
        readonly path : Path,
        readonly body : Body,
    ) {}
}