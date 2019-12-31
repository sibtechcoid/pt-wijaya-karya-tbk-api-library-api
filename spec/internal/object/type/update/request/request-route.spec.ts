import Route from "../../../../../../dist/internal/object/type/update/route/create";
import Type from "../../../../../../dist/internal/object/type/update/request/body/body";
import Request from "../../../../../../dist/internal/object/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('internal/object/type/update request', () => {

    RequestRoute<Type>(
        Request,
        Route(),
        {name:'username', abbreviation:'password',id:1}
    );
});
