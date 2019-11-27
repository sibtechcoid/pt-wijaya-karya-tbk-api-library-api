import UnprocessableEntity from "./unprocessable-entity";
export default class UnprocessableEntityCreate<Body> implements UnprocessableEntity<Body> {
    body: Body;
    code: 422;
    message: string;
    constructor(body: Body);
}
