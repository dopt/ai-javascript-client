/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";
import { AssistantSearchResponseItem } from "./AssistantSearchResponseItem";

export const AssistantSearchResponse: core.serialization.Schema<
    serializers.AssistantSearchResponse.Raw,
    DoptApi.AssistantSearchResponse
> = core.serialization.list(AssistantSearchResponseItem);

export declare namespace AssistantSearchResponse {
    type Raw = AssistantSearchResponseItem.Raw[];
}
