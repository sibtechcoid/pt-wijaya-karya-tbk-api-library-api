import UnprocessableEntity from "./unprocessable-entity";
export default class UnprocessableEntityCreate<Body> implements UnprocessableEntity<Body> {
    body: Body;
    message: string;
    code: 422;
    constructor(body: Body, message?: string);
}
