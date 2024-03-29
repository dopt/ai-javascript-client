/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsStreamRequestContextElementValue: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsStreamRequestContextElementValue.Raw,
    DoptApi.assistant.CompletionsStreamRequestContextElementValue
> = core.serialization.object({
    position: core.serialization.lazyObject(
        async () => (await import("../../../../..")).assistant.CompletionsStreamRequestContextElementValuePosition
    ),
    content: core.serialization.string(),
    tag: core.serialization.string(),
});

export declare namespace CompletionsStreamRequestContextElementValue {
    interface Raw {
        position: serializers.assistant.CompletionsStreamRequestContextElementValuePosition.Raw;
        content: string;
        tag: string;
    }
}
