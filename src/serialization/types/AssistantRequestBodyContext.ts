/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantRequestBodyContext: core.serialization.ObjectSchema<
    serializers.AssistantRequestBodyContext.Raw,
    DoptApi.AssistantRequestBodyContext
> = core.serialization.object({
    document: core.serialization
        .lazyObject(async () => (await import("..")).AssistantRequestBodyContextDocument)
        .optional(),
    visual: core.serialization
        .lazyObject(async () => (await import("..")).AssistantRequestBodyContextVisual)
        .optional(),
    element: core.serialization
        .lazyObject(async () => (await import("..")).AssistantRequestBodyContextElement)
        .optional(),
    semantic: core.serialization
        .lazyObject(async () => (await import("..")).AssistantRequestBodyContextSemantic)
        .optional(),
});

export declare namespace AssistantRequestBodyContext {
    interface Raw {
        document?: serializers.AssistantRequestBodyContextDocument.Raw | null;
        visual?: serializers.AssistantRequestBodyContextVisual.Raw | null;
        element?: serializers.AssistantRequestBodyContextElement.Raw | null;
        semantic?: serializers.AssistantRequestBodyContextSemantic.Raw | null;
    }
}
