import Id from "../../id/id";

export default interface Place<_Id extends number|undefined> extends Id<_Id> {


    name : string;
    abbreviation : string;
    address : string;

    /**
     * type id
     */
    type: number;

    /**
     * level id
     */
    level: number;
}