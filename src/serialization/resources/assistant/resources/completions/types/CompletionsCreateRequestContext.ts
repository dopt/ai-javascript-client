/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsCreateRequestContext: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsCreateRequestContext.Raw,
    DoptApi.assistant.CompletionsCreateRequestContext
> = core.serialization.object({
    document: core.serialization
        .lazyObject(async () => (await import("../../../../..")).assistant.CompletionsCreateRequestContextDocument)
        .optional(),
    visual: core.serialization
        .lazyObject(async () => (await import("../../../../..")).assistant.CompletionsCreateRequestContextVisual)
        .optional(),
    element: core.serialization
        .lazyObject(async () => (await import("../../../../..")).assistant.CompletionsCreateRequestContextElement)
        .optional(),
    semantic: core.serialization
        .lazyObject(async () => (await import("../../../../..")).assistant.CompletionsCreateRequestContextSemantic)
        .optional(),
});

export declare namespace CompletionsCreateRequestContext {
    interface Raw {
        document?: serializers.assistant.CompletionsCreateRequestContextDocument.Raw | null;
        visual?: serializers.assistant.CompletionsCreateRequestContextVisual.Raw | null;
        element?: serializers.assistant.CompletionsCreateRequestContextElement.Raw | null;
        semantic?: serializers.assistant.CompletionsCreateRequestContextSemantic.Raw | null;
    }
}