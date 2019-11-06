import HTTPMethod from "http-method-enum";

export default interface Request <Method extends HTTPMethod, Path extends string, Body> {

    readonly method : Method;
    readonly body : Body;
    readonly path : Path;
}