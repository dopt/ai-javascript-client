/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantCompletionsRequestBodyContextElementValue: core.serialization.ObjectSchema<
    serializers.AssistantCompletionsRequestBodyContextElementValue.Raw,
    DoptApi.AssistantCompletionsRequestBodyContextElementValue
> = core.serialization.object({
    position: core.serialization.lazyObject(
        async () => (await import("..")).AssistantCompletionsRequestBodyContextElementValuePosition
    ),
    content: core.serialization.string(),
    tag: core.serialization.string(),
});

export declare namespace AssistantCompletionsRequestBodyContextElementValue {
    interface Raw {
        position: serializers.AssistantCompletionsRequestBodyContextElementValuePosition.Raw;
        content: string;
        tag: string;
    }
}
