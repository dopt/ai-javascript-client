/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsCreateRequestContextElementValue: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsCreateRequestContextElementValue.Raw,
    DoptApi.assistant.CompletionsCreateRequestContextElementValue
> = core.serialization.object({
    position: core.serialization.lazyObject(
        async () => (await import("../../../../..")).assistant.CompletionsCreateRequestContextElementValuePosition
    ),
    content: core.serialization.string(),
    tag: core.serialization.string(),
});

export declare namespace CompletionsCreateRequestContextElementValue {
    interface Raw {
        position: serializers.assistant.CompletionsCreateRequestContextElementValuePosition.Raw;
        content: string;
        tag: string;
    }
}