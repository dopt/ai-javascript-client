/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsStreamRequestContextDocumentValue: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsStreamRequestContextDocumentValue.Raw,
    DoptApi.assistant.CompletionsStreamRequestContextDocumentValue
> = core.serialization.object({
    url: core.serialization.string(),
    title: core.serialization.string(),
    width: core.serialization.number(),
    height: core.serialization.number(),
});

export declare namespace CompletionsStreamRequestContextDocumentValue {
    interface Raw {
        url: string;
        title: string;
        width: number;
        height: number;
    }
}
