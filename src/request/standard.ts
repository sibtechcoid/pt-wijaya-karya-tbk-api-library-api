import HTTPMethod from "http-method-enum";
import Request from "./request";

export default class Standard<Method extends HTTPMethod, Path extends string, Body> implements Request<Method, Path, Body> {

    constructor(
        readonly method : Method,
        readonly path : Path,
        readonly body : Body,
    ) {}
}