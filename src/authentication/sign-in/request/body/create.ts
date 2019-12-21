import Body from "./body";


export default class Create implements Body{

    constructor(
        public username : string,
        public password : string,
    ) {

    }
}