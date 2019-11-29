import Qpass from "../../../qpass/qpass";
import Internal from "../../../internal/internal";
import Body from "./body";

export default class Create implements Body {

    constructor(
        public qpass : Qpass[],
        public internal : Internal[],
    ) {
    }
}