import Activable from "./activable";

export default class Create implements Activable {

    constructor(
        public id : number,
        public active : boolean
    ) {

    }
}