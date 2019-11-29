import Body from "./body";
export default class Create<Data> implements Body<Data> {
    body: Data;
    constructor(body: Data);
}
