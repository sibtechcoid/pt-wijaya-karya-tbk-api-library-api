import Route from "../../../../../../dist/internal/object/type/update/route/create";
import Type from "../../../../../../dist/internal/object/type/update/request/body/body";
import TypeCreate from "../../../../../../dist/internal/object/type/create/request/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/internal/object/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";
import Assign from "../../../../../../dist/id/assign";

describe('internal/object/type/update request', () => {

    RequestRoute<Type>(
        Request,
        Route(),
        {name:'username', abbreviation:'password',id:1}
    );
});
