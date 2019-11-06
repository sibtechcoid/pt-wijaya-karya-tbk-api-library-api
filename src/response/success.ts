import Response from "./response";


export default interface Success<Body> extends Response<200, Body> {
}