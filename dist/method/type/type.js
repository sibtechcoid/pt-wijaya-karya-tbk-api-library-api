"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type;
(function (Type) {
    /**
     * The `CONNECT` method establishes a tunnel to the server identified by the
     * target resource.
     */
    Type["CONNECT"] = "connect";
    /**
     * The `DELETE` method deletes the specified resource.
     */
    Type["DELETE"] = "delete";
    /**
     * The `GET` method requests a representation of the specified resource.
     * Requests using GET should only retrieve data.
     */
    Type["GET"] = "get";
    /**
     * The `HEAD` method asks for a response identical to that of a GET request,
     * but without the response body.
     */
    Type["HEAD"] = "head";
    /**
     * The `OPTIONS` method is used to describe the communication options for the
     * target resource.
     */
    Type["OPTIONS"] = "options";
    /**
     * The PATCH method is used to apply partial modifications to a resource.
     */
    Type["PATCH"] = "patch";
    /**
     * The `POST` method is used to submit an entity to the specified resource,
     * often causing a change in state or side effects on the server.
     */
    Type["POST"] = "post";
    /**
     * The `PUT` method replaces all current representations of the target
     * resource with the request payload.
     */
    Type["PUT"] = "put";
    /**
     * The `TRACE` method performs a message loop-back test along the path to the
     * target resource.
     */
    Type["TRACE"] = "trace";
})(Type || (Type = {}));
/**
 * @public
 */
exports.default = Type;
