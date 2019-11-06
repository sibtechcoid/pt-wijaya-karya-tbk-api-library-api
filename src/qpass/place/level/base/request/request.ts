import BaseRequest from '../../../../../request/request';
import Type from "../../type";
import HttpMethod from "http-method-enum";

export default interface Request<Method extends HttpMethod, Body> extends BaseRequest<Method, '/qpass/place/level', Body> {

}