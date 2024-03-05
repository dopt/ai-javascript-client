/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as DoptApi from "../../../../api";
import * as core from "../../../../core";

export const SearchResponseItem: core.serialization.ObjectSchema<
    serializers.SearchResponseItem.Raw,
    DoptApi.SearchResponseItem
> = core.serialization.object({
    id: core.serialization.number(),
    title: core.serialization.string(),
    url: core.serialization.string(),
    chunks: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).SearchResponseItemChunksItem)
    ),
});

export declare namespace SearchResponseItem {
    interface Raw {
        id: number;
        title: string;
        url: string;
        chunks: serializers.SearchResponseItemChunksItem.Raw[];
    }
}