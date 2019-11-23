import Success from "./success";
export default class SuccessCreate<Body> implements Success<Body> {
    body: Body;
    code: 200;
    message: string;
    constructor(body: Body);
}
