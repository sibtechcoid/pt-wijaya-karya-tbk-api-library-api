import UpdateAbbreviation from "../update/abbreviation";

export default interface Abbreviation extends UpdateAbbreviation {
    /**
     * abbreviation, initial, or short version of name
     */
    abbreviation : string|null;
}