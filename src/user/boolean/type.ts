import Text from "../find-text/response/user/user";
import NotNull from "@dikac/t-object/boolean/type";
import IsBoolean from "@dikac/t-boolean/type";
import User from "../find-text/response/user/user";

export default function Type(value : any) : value is User {

    if(!NotNull<Text>(value)) {

        return false;
    }

    if(!IsBoolean(value.nama)) {

        return false;
    }

    if(!IsBoolean(value.email)) {

        return false;
    }

    if(!IsBoolean(value.singkatan)) {

        return false;
    }

    if(!IsBoolean(value.telepon)) {

        return false;
    }

    return true;
}