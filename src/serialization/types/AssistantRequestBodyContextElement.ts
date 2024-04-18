/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";
import { AssistantRequestBodyContextElementValue } from "./AssistantRequestBodyContextElementValue";

export const AssistantRequestBodyContextElement: core.serialization.ObjectSchema<
    serializers.AssistantRequestBodyContextElement.Raw,
    DoptApi.AssistantRequestBodyContextElement
> = core.serialization.object({
    type: core.serialization.stringLiteral("element"),
    value: AssistantRequestBodyContextElementValue,
});

export declare namespace AssistantRequestBodyContextElement {
    interface Raw {
        type: "element";
        value: AssistantRequestBodyContextElementValue.Raw;
    }
}
