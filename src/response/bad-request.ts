import Response from './response';

export default interface BadRequest<Body> extends Response<400, Body> {

}