import Body from "../body";
import TypeAkses from "../../../../../akses/create/request/body/boolean/type";
import TypeNama from "../../../../../../nama/update/boolean/type";
import TypeSingkatan from "../../../../../../singkatan/update/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import Group from "../../../../group/group";
import TypeId from "../../../../../../id/boolean/type";

export default function Type<Extended extends Body = Body>(value : any) : value is Extended {

    if(!TypeId<Extended>(value)) {

        return false;
    }

    if(!TypeNama(value)) {

        return false;
    }

    if(!TypeSingkatan(value)) {

        return false;
    }

    if(value.akses !== undefined) {

        if(!TypeAkses(value.akses)) {

            return false;
        }
    }

    if(value.group !== undefined) {

        if(!EnumType(value.group, Group)) {

            return false;
        }
    }

    return true;
}
