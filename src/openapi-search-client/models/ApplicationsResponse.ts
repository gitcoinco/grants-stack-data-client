/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.js';
import type { ApplicationSummary } from './ApplicationSummary.js';
import {
    ApplicationSummaryFromJSON,
    ApplicationSummaryFromJSONTyped,
    ApplicationSummaryToJSON,
} from './ApplicationSummary.js';

/**
 * 
 * @export
 * @interface ApplicationsResponse
 */
export interface ApplicationsResponse {
    /**
     * 
     * @type {Array<ApplicationSummary>}
     * @memberof ApplicationsResponse
     */
    applicationSummaries: Array<ApplicationSummary>;
}

/**
 * Check if a given object implements the ApplicationsResponse interface.
 */
export function instanceOfApplicationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "applicationSummaries" in value;

    return isInstance;
}

export function ApplicationsResponseFromJSON(json: any): ApplicationsResponse {
    return ApplicationsResponseFromJSONTyped(json, false);
}

export function ApplicationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationSummaries': ((json['applicationSummaries'] as Array<any>).map(ApplicationSummaryFromJSON)),
    };
}

export function ApplicationsResponseToJSON(value?: ApplicationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationSummaries': ((value.applicationSummaries as Array<any>).map(ApplicationSummaryToJSON)),
    };
}

