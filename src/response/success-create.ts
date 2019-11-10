import Success from "./success";


export default class SuccessCreate<Body> implements Success<Body> {

    public code : 200 = 200;
    public message : string  = 'OK';

    constructor(
        public body : Body
    ) {

    }
}