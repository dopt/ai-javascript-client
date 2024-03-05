/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsCreateResponse: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsCreateResponse.Raw,
    DoptApi.assistant.CompletionsCreateResponse
> = core.serialization.object({
    answer: core.serialization.string(),
    sources: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("../../../../..")).assistant.CompletionsCreateResponseSourcesItem
        )
    ),
});

export declare namespace CompletionsCreateResponse {
    interface Raw {
        answer: string;
        sources: serializers.assistant.CompletionsCreateResponseSourcesItem.Raw[];
    }
}
