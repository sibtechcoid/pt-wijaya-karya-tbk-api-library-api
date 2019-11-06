import HttpMethod from "../method/method";

export default interface Request <Method extends HttpMethod, Path extends string, Body> {

    method : Method;
    body : Body;
    path : Path;
}