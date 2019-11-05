import Request from "./request";
import Text from "../text";
import HTTPMethod from "http-method-enum";
import ValidatableInterface from "t-validatable/validatable";
import Is from "../boolean/type";
import ValidatableRequest from "../../../../request/validatable/validatable";

export default function Validatable(body : Text|null = null) : ValidatableRequest<Text> {

    return new ValidatableRequest<Text>(
        '/user/find/text',
        HTTPMethod.POST,
        body,
        Is
    )
}
