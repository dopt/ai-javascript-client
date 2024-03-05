/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantSearchRequestBody: core.serialization.ObjectSchema<
    serializers.AssistantSearchRequestBody.Raw,
    DoptApi.AssistantSearchRequestBody
> = core.serialization.object({
    query: core.serialization.string().optional(),
    context: core.serialization
        .lazyObject(async () => (await import("..")).AssistantSearchRequestBodyContext)
        .optional(),
});

export declare namespace AssistantSearchRequestBody {
    interface Raw {
        query?: string | null;
        context?: serializers.AssistantSearchRequestBodyContext.Raw | null;
    }
}
