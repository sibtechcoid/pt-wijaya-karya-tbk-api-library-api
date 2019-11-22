import Schedule from "./schedule";
export default class Create implements Schedule {
    plannedFrom: Date;
    plannedTo: Date;
    realizedFrom: Date;
    realizedTo: Date;
    place: number;
    type: number;
    members: number[];
    constructor(plannedFrom: Date, plannedTo: Date, realizedFrom: Date, realizedTo: Date, place: number, type: number, members: number[]);
}
