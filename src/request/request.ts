import HttpMethod from "../method/method";

export default interface Request <Method extends HttpMethod, Path extends string, Body> {

    readonly method : Method;
    readonly body : Body;
    readonly path : Path;
}