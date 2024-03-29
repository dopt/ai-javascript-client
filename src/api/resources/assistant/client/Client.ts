/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DoptApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";
import { Completions } from "../resources/completions/client/Client";

export declare namespace Assistant {
    interface Options {
        environment?: core.Supplier<environments.DoptApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Assistant {
    constructor(protected readonly _options: Assistant.Options) {}

    /**
     * @throws {@link DoptApi.BadRequestError}
     * @throws {@link DoptApi.UnauthorizedError}
     * @throws {@link DoptApi.NotFoundError}
     * @throws {@link DoptApi.InternalServerError}
     *
     * @example
     *     await doptApi.assistant.search("string", {
     *         userIdentifier: "string",
     *         context: {
     *             document: {
     *                 type: "document",
     *                 value: {
     *                     url: "string",
     *                     title: "string",
     *                     width: 1.1,
     *                     height: 1.1
     *                 }
     *             },
     *             visual: {
     *                 type: "visual",
     *                 value: "string"
     *             },
     *             element: {
     *                 type: "element",
     *                 value: {
     *                     position: {
     *                         top: 1.1,
     *                         left: 1.1
     *                     },
     *                     content: "string",
     *                     tag: "string"
     *                 }
     *             },
     *             semantic: {
     *                 type: "semantic",
     *                 value: {
     *                     semanticContent: "string",
     *                     neighboringSemanticContent: "string"
     *                 }
     *             }
     *         }
     *     })
     */
    public async search(
        sid: string,
        request: DoptApi.SearchRequest,
        requestOptions?: Assistant.RequestOptions
    ): Promise<DoptApi.SearchResponseItem[]> {
        const { userIdentifier, groupIdentifier, model, ..._body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        _queryParams["userIdentifier"] = userIdentifier;
        if (groupIdentifier != null) {
            _queryParams["groupIdentifier"] = groupIdentifier;
        }

        if (model != null) {
            _queryParams["model"] = model;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v0/assistant/${sid}/search`
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.SearchRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.assistant.search.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DoptApi.BadRequestError(_response.error.body);
                case 401:
                    throw new DoptApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new DoptApi.NotFoundError(_response.error.body);
                case 500:
                    throw new DoptApi.InternalServerError(_response.error.body);
                default:
                    throw new errors.DoptApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DoptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DoptApiTimeoutError();
            case "unknown":
                throw new errors.DoptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _completions: Completions | undefined;

    public get completions(): Completions {
        return (this._completions ??= new Completions(this._options));
    }
}
