import Body from "./body";

export default class Create<B> implements Body<B> {

    constructor(
        public body : B
    ) {

    }
}