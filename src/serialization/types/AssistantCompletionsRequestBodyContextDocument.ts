/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantCompletionsRequestBodyContextDocument: core.serialization.ObjectSchema<
    serializers.AssistantCompletionsRequestBodyContextDocument.Raw,
    DoptApi.AssistantCompletionsRequestBodyContextDocument
> = core.serialization.object({
    type: core.serialization.stringLiteral("document"),
    value: core.serialization.lazyObject(
        async () => (await import("..")).AssistantCompletionsRequestBodyContextDocumentValue
    ),
});

export declare namespace AssistantCompletionsRequestBodyContextDocument {
    interface Raw {
        type: "document";
        value: serializers.AssistantCompletionsRequestBodyContextDocumentValue.Raw;
    }
}