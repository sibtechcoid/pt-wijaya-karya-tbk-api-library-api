import Deactivate from "./deactivate";

export default class Create implements Deactivate {

    constructor(
        public deactivate : boolean
    ) {
    }
}