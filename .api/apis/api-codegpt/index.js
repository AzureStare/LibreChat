"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'api-codegpt/3.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get Agent
     *
     * @throws FetchError<422, types.GetAgentBetaResponse422> 422
     */
    SDK.prototype.getAgentBeta = function (metadata) {
        return this.core.fetch('/agent/{id}', 'get', metadata);
    };
    /**
     * Delete Agent
     *
     * @throws FetchError<400, types.DeleteAgentBetaResponse400> 400
     */
    SDK.prototype.deleteAgentBeta = function (metadata) {
        return this.core.fetch('/agent/{id}', 'delete', metadata);
    };
    SDK.prototype.updateAgentBeta = function (body, metadata) {
        return this.core.fetch('/agent/{id}', 'patch', body, metadata);
    };
    /**
     * List Agents
     *
     * @throws FetchError<401, types.ListAgentsBetaResponse401> 401
     */
    SDK.prototype.listAgentsBeta = function () {
        return this.core.fetch('/agent', 'get');
    };
    /**
     * Create un new Agent
     *
     * @summary Create Agent
     * @throws FetchError<422, types.CreateAgentBetaResponse422> 422
     */
    SDK.prototype.createAgentBeta = function (body, metadata) {
        return this.core.fetch('/agent', 'post', body, metadata);
    };
    /**
     * Completion
     *
     * @throws FetchError<400, types.CompletionBetaResponse400> 400
     * @throws FetchError<422, types.CompletionBetaResponse422> 422
     */
    SDK.prototype.completionBeta = function (body, metadata) {
        return this.core.fetch('/chat/completions', 'post', body, metadata);
    };
    /**
     * Get Document
     *
     * @throws FetchError<400, types.GetDocumentCopyResponse400> 400
     */
    SDK.prototype.getDocumentCopy = function (metadata) {
        return this.core.fetch('/document/{id}', 'get', metadata);
    };
    /**
     * Delete Document
     *
     * @throws FetchError<400, types.DeleteDocumentCopyResponse400> 400
     * @throws FetchError<404, types.DeleteDocumentCopyResponse404> 404
     * @throws FetchError<422, types.DeleteDocumentCopyResponse422> 422
     */
    SDK.prototype.deleteDocumentCopy = function (metadata) {
        return this.core.fetch('/document/{id}', 'delete', metadata);
    };
    /**
     * Update my user data
     *
     * @throws FetchError<400, types.UpdateMyUserDataResponse400> 400
     */
    SDK.prototype.updateMyUserData = function (body) {
        return this.core.fetch('/user', 'patch', body);
    };
    /**
     * Create un new Agent
     *
     * @summary Get my user data
     * @throws FetchError<422, types.MeCopyResponse422> 422
     */
    SDK.prototype.meCopy = function () {
        return this.core.fetch('/user', 'get');
    };
    /**
     * List document
     *
     * @throws FetchError<400, types.ListDocumentCopyResponse400> 400
     */
    SDK.prototype.listDocumentCopy = function (metadata) {
        return this.core.fetch('/document', 'get', metadata);
    };
    SDK.prototype.updateAgentDocuments = function (body, metadata) {
        return this.core.fetch('/agent/{id}/documents', 'patch', body, metadata);
    };
    /**
     * Update my user avatar
     *
     * @throws FetchError<400, types.UpdateMyUserAvatarResponse400> 400
     */
    SDK.prototype.updateMyUserAvatar = function (body) {
        return this.core.fetch('/user/avatar', 'patch', body);
    };
    SDK.prototype.updateDocumentMetadata = function (body, metadata) {
        return this.core.fetch('/document/{id}/metadata', 'patch', body, metadata);
    };
    /**
     * Get Document Metadata
     *
     * @throws FetchError<400, types.GetDocumentMetadataResponse400> 400
     */
    SDK.prototype.getDocumentMetadata = function () {
        return this.core.fetch('/document/metadata', 'post');
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
