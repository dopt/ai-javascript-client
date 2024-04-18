/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const DocumentContextValue: core.serialization.ObjectSchema<
    serializers.DocumentContextValue.Raw,
    DoptApi.DocumentContextValue
> = core.serialization.object({
    url: core.serialization.string(),
    title: core.serialization.string(),
    width: core.serialization.number(),
    height: core.serialization.number(),
});

export declare namespace DocumentContextValue {
    interface Raw {
        url: string;
        title: string;
        width: number;
        height: number;
    }
}
