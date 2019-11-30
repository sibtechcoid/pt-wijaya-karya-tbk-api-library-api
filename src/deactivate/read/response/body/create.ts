import Body from "./body";

export default class Create implements Body {

    constructor(
        public deactivate : string|null
    ) {
    }
}