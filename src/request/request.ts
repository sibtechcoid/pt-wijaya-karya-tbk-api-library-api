import HTTPMethod from "http-method-enum";

export default interface Request <Body> {

    readonly method : HTTPMethod;
    readonly body : Body;
    readonly path : string;
}