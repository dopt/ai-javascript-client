/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as DoptApi from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.assistant.search.Response.Raw,
    DoptApi.SearchResponseItem[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).SearchResponseItem));

export declare namespace Response {
    type Raw = serializers.SearchResponseItem.Raw[];
}