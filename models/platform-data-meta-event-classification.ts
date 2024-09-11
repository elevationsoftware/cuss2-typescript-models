/* tslint:disable */
/* eslint-disable */
/**
 * Common Use Self Service V2 API Definition
 * <h3>Definition of the new CUSS2 API.</h3><p>This API definition describes  IATA Common Use Self Service (IATA RP 1706c), a standard that allows multiple  airlines or entities to share physical kiosks or other hardware devices to offer  self-services to their passengers. These services include, but are not limited to  passenger check-in functionality and self-service baggage drop off. The standard  also defines how airlines and other application suppliers can develop CUSS-compliant  applications that are able to run on any device whose platform is CUSS-compliant.<p> In its official release the API definition is accompanied by the CUSS Specification  (CUSS-TS), describing in human readable form (textual and graphical) the concepts,  requirements, interaction, workflows and behavior for both CUSS platforms and  CUSS applications, and the CUSS Development Guide (CUSS-DG) describing best practices and giving examples on how to implement CUSS compliant platforms- and applications.<p> The API requires and includes further schema definitions/domains as listed below<p> - CUSS2 Basic Schemas<br> - CUSS2 Self Bag Drop<br> - CUSS2 Biometrics<br> - CUSS2 Payments<br> - CUSS2 Illumination <p>The IATA Delivery on Orders Working Group (DOWG) and the CUSS Task Force (CUSS-TF)  maintain this API. - <b>Because of the continuing work on the API and its data model the  provided content is subject to change without notice</b>.<p> For bug reports, design issues and/or any other feedback send your e-mail to:<p> <a href=\"mailto:deliveryonorders@iata.org\"><b>CUSS-TF @ IATA</b></a><p> -----------<p> <b>General and important note on handling timeouts:</b><p> In contrast to earlier CUSS versions applications are now responsible for tracking and  handling the time and timeouts for any directive that may require longer execution.  Applications shall use the <b>cancel</b>-directive to terminate a too long pending call.<p> -----------<p> &copy; International Air Transport Association (IATA) 2022-2024. - All rights reserved.<p> THIS API DEFINITION AND ALL RELATED DOMAINS ARE PROVIDED ON AN \"AS IS\" AND  \"AS AVAILABLE\" BASIS, WITHOUT WARRANTY OF ANY KIND.<p>TO THE FULLEST EXTENT PERMITTED  BY APPLICABLE LAW, IATA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT  LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND WARRANTIES OF FITNESS FOR A  PARTICULAR PURPOSE, QUALITY, PERFORMANCE, ACCURACY, COMPLETENESS AND NON-INFRINGEMENT  OF THIRD PARTY RIGHTS.<p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IATA SHALL  NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE,  OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE,  GOODWILL, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION OR ANY OTHER PECUNIARY LOSS  (EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), HOWEVER CAUSED,  AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF, OR RELATED TO, THIS LICENSE OR  THE SPECIFICATIONS, INCLUDING THE USE OR PERFORMANCE OF THE SPECIFICATIONS AND OF ANY  PRODUCTS OR SERVICES IMPLEMENTING, IN WHOLE OR IN PART, THE SPECIFICATIONS.<p> THE IATA PSC DATA EXCHANGE SPECIFICATIONS LICENSE TERMS APPLY TO ANY USE OF THIS API AND RELATED DOMAINS.<p> ----------- 
 *
 * OpenAPI spec version: 0.0.0
 * Contact: deliveryonorders@iata.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { EventCategories } from './event-categories';
import { EventModes } from './event-modes';
import { EventTypes } from './event-types';
 /**
 * 
 *
 * @export
 * @interface PlatformDataMetaEventClassification
 */
export interface PlatformDataMetaEventClassification {

    /**
     * @type {EventModes}
     * @memberof PlatformDataMetaEventClassification
     */
    eventMode?: EventModes;

    /**
     * @type {EventTypes}
     * @memberof PlatformDataMetaEventClassification
     */
    eventType?: EventTypes;

    /**
     * @type {EventCategories}
     * @memberof PlatformDataMetaEventClassification
     */
    eventCategory?: EventCategories;
}
