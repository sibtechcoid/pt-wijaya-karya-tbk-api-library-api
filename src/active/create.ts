import Active from "./active";

export default class Create implements Active {

    constructor(
        public id : number,
        public active : boolean
    ) {

    }
}