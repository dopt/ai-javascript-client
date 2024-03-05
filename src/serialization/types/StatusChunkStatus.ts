/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const StatusChunkStatus: core.serialization.Schema<
    serializers.StatusChunkStatus.Raw,
    DoptApi.StatusChunkStatus
> = core.serialization.enum_(["searching", "answering"]);

export declare namespace StatusChunkStatus {
    type Raw = "searching" | "answering";
}