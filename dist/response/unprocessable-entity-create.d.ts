import UnprocessableEntity from "./unprocessable-entity";
export default class UnprocessableEntityCreate<Body> implements UnprocessableEntity<Body> {
    message: string;
    body: Body;
    code: 422;
    constructor(message: string, body: Body);
}
