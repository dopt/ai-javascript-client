/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Assistant } from "./api/resources/assistant/client/Client";

export declare namespace DoptApiClient {
    interface Options {
        environment?: core.Supplier<environments.DoptApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class DoptApiClient {
    constructor(protected readonly _options: DoptApiClient.Options) {}

    protected _assistant: Assistant | undefined;

    public get assistant(): Assistant {
        return (this._assistant ??= new Assistant(this._options));
    }
}
