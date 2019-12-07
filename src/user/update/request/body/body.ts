import User from "../../../create/request/user/user";
import Id from "../../../../id/id";

export default interface Body extends Id {

    name            ?: string;
    password        ?: string;
    user            ?: string;
    abbreviation    ?: string;
    phone           ?: string;
    email           ?: string;

}