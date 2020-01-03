import Body from "./body";


export default class Create implements Body{

    constructor(
        public usernama : string,
        public password : string,
    ) {

    }
}