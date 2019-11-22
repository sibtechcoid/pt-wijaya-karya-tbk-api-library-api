import Schedule from "./schedule";

export default class Create implements Schedule {

    constructor(
        public plannedFrom  : Date,
        public plannedTo  : Date,
        public realizedFrom  : Date,
        public realizedTo  : Date,
        public place  : number,
        public type  : number,
        public members  : number[],
    ) {}
}