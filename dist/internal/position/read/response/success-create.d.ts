import Success from "./sucess";
import BaseSuccessCreate from "../../../../response/success-create";
import Position from "./position/position";
export default class SuccessCreate extends BaseSuccessCreate<Position[]> implements Success {
    constructor(body: Position[]);
}
