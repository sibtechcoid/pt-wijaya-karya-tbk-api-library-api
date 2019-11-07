import Id from "../../id/id";

export default interface Place {

    name : string;
    abbreviation : string;
    address : string;

    /**
     * type id
     */
    type: number;
}