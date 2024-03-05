/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const StatusChunk: core.serialization.ObjectSchema<serializers.StatusChunk.Raw, DoptApi.StatusChunk> =
    core.serialization.object({
        type: core.serialization.stringLiteral("status"),
        status: core.serialization.lazy(async () => (await import("..")).StatusChunkStatus),
    });

export declare namespace StatusChunk {
    interface Raw {
        type: "status";
        status: serializers.StatusChunkStatus.Raw;
    }
}