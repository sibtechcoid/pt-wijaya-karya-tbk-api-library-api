import UnprocessableEntity from "./unprocessable-entity";

export default class UnprocessableEntityCreate<Body> implements UnprocessableEntity<Body> {

    public code : 422 = 422;

    constructor(
        public body : Body,
        public message : string  = 'Unprocessable Entity',
    ) {

    }
}