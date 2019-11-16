import Level from "../level/level";

export default interface Type {

    id : number,
    created : Date,
    updated : Date,
    name : string,
    abbreviation : string,
    deactivated : null|Date
}