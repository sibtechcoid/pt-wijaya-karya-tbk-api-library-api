import BaseRequest from '../../../../../request/request';
import HttpMethod from "../../../../../method/method";

export default interface Request<Method extends HttpMethod, Body> extends BaseRequest<Method, '/qpass/place/type', Body> {

}