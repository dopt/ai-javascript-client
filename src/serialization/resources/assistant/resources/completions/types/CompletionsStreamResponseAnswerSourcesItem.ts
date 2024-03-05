/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsStreamResponseAnswerSourcesItem: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsStreamResponseAnswerSourcesItem.Raw,
    DoptApi.assistant.CompletionsStreamResponseAnswerSourcesItem
> = core.serialization.object({
    id: core.serialization.number(),
    title: core.serialization.string(),
    url: core.serialization.string(),
    chunks: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("../../../../..")).assistant.CompletionsStreamResponseAnswerSourcesItemChunksItem
        )
    ),
});

export declare namespace CompletionsStreamResponseAnswerSourcesItem {
    interface Raw {
        id: number;
        title: string;
        url: string;
        chunks: serializers.assistant.CompletionsStreamResponseAnswerSourcesItemChunksItem.Raw[];
    }
}