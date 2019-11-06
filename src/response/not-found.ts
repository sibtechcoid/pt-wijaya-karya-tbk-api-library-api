import Response from './response';

export default interface NotFound<Body> extends Response<400, Body> {

}