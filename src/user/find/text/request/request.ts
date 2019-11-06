import BaseRequest from '../../../../request/request';
import Text from "../text";
import Method from "../../../../method/method";


export default interface Request extends BaseRequest<Method.POST, '/user/find/text', Text> {

}