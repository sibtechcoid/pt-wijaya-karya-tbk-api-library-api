import Success from "./success";
import UnprocessableEntity from "./unprocessable-entity";


export default class UnprocessableEntityCreate<Body> implements UnprocessableEntity<Body> {

    public code : 422 = 422;
    public message : string  = 'Unprocessable Entity';

    constructor(
        public body : Body
    ) {

    }
}