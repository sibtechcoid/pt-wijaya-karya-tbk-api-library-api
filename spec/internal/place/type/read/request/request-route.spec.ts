import Route from "../../../../../../dist/internal/place/type/read/route/create";
import CreateId from "../../../../../../dist/internal/place/type/create-id";
import Type from "../../../../../../dist/internal/place/type/type";
import TypeCreate from "../../../../../../dist/internal/place/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/internal/place/type/read/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('internal/place/type/read request', () => {

    RequestRoute<undefined>(() => Request(), Route(),undefined);
});
