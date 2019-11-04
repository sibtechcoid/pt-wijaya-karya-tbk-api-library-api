export default interface Response <Body> {

    readonly body : Body;
    code : number;
    message : string;
}