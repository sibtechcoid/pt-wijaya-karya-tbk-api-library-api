"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-number/boolean/type");
const compatible_1 = require("t-date/boolean/compatible");
function Schedule(value) {
    if (!type_1.default(value)) {
        return false;
    }
    // public plannedFrom  : Date,
    // public plannedTo  : Date,
    // public realizedFrom  : Date,
    // public realizedTo  : Date,
    // public place  : number,
    // public type  : number,
    // public members  : number[],
    if (!compatible_1.default(value.plannedFrom)) {
        return false;
    }
    if (!compatible_1.default(value.plannedTo)) {
        return false;
    }
    if (!compatible_1.default(value.realizedFrom)) {
        return false;
    }
    if (!compatible_1.default(value.realizedTo)) {
        return false;
    }
    if (!type_2.default(value.type)) {
        return false;
    }
    // if(!IsString(value.abbreviation)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Schedule;
//# sourceMappingURL=schedule.js.map