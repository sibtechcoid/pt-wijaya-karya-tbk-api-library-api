import Route from "../../../../../../dist/qpass/place/type/update/route/create";
import CreateId from "../../../../../../dist/qpass/place/type/create-id";
import Type from "../../../../../../dist/qpass/place/type/type";
import TypeCreate from "../../../../../../dist/qpass/place/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('user/login request', () => {

    RequestRoute<(Type & Id)[]>(
        (body) => Request(body),
        Route(),
        [CreateId(new TypeCreate('username', 'password'), new IdCreate(1))]
    );
});
