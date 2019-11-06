import Id from "../../../id/id";

export default interface Type<_Id extends number|undefined> extends Id<_Id> {


    /**
     * full name
     */
    name : string;

    /**
     * abbreviation, initial, or short version of name
     */
    identifier : string;
}