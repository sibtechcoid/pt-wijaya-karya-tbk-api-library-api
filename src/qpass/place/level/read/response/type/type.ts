import Level from "../level/level";

export default interface Type {

    id : number;
    /**
     * Date object compatible
     */
    created : string;
    /**
     * Date object compatible
     */
    updated : null|string;
    name : string;
    abbreviation : string;

}