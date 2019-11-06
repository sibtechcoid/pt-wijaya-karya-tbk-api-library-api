import Login from "./update";
import Qpass from "./type/qpass";
import Internal from "./type/internal";

export default class Standard implements Login {

    constructor(
        public qpass : Qpass[],
        public internal : Internal[]
    ) {
    }
}