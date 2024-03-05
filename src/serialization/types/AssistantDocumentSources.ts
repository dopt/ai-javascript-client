/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantDocumentSources: core.serialization.Schema<
    serializers.AssistantDocumentSources.Raw,
    DoptApi.AssistantDocumentSources
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("..")).AssistantDocumentSourcesItem)
);

export declare namespace AssistantDocumentSources {
    type Raw = serializers.AssistantDocumentSourcesItem.Raw[];
}