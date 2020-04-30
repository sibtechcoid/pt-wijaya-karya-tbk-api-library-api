import ReadBody from "../../../read/response/body/body";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";
import StringType from "@dikac/t-string/boolean/type";

export default interface Body {

    externalOrganisasiRep: string;
    externalOrganisasiNo: string;
    externalAuditNo: string;
}
