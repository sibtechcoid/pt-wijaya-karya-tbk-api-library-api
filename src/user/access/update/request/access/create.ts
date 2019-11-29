import Qpass from "../../qpass/qpass";
import Internal from "../../internal/internal";
import Access from "./access";

export default class Create implements Access {

    constructor(
        public qpass : Qpass[],
        public internal : Internal[],
    ) {
    }
}