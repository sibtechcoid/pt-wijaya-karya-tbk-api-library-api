import Body from "./body";

export default class Create<Data> implements Body<Data> {

    constructor(
        public body : Data
    ) {

    }
}