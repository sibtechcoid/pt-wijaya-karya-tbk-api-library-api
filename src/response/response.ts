export default interface Response <Code extends number, Body> {

    readonly body : Body;
    code : Code;
    message : string;
}