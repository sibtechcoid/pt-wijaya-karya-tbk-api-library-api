import Type from "../../../type/create/request/data/data";

export default interface Place {

    name: string;
    abbreviation: string;
    address: string;
    type: Type;
    deactivated: Date;
    wikaDesc: string;
    wikaSlug: string;
    wikaAttach: string;
    id : number,
    created : Date,
    updated : Date,
}