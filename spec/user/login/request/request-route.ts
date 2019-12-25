import Route from "../../../../dist/authentication/sign-in/route/create";
import Request from "../../../../dist/authentication/sign-in/request/create";
import RequestRoute from "../../../request/request-route";

describe('user/login request', () => {

    RequestRoute((body) => Request(body), Route(), {username:'username', password:'password'});

});
