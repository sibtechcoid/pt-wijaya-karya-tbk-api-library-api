import Response from './response';

export default interface Conflict<Body> extends Response<409, Body> {

}