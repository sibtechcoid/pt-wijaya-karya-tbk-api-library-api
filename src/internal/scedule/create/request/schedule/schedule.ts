export default interface Schedule {

    plannedFrom  : Date;
    plannedTo  : Date;
    realizedFrom  : Date;
    realizedTo  : Date;
    place  : number;
    type  : number;
    members  : number[];

}