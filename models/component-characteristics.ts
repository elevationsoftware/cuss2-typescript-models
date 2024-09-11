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

import { BiometricsCharacteristics } from './biometrics-characteristics';
import { CUSSDataTypes } from './cussdata-types';
import { ComponentCharacteristicsAudioOutput } from './component-characteristics-audio-output';
import { ComponentCharacteristicsConveyorSBD } from './component-characteristics-conveyor-sbd';
import { ComponentCharacteristicsDeviceHelpInstruction } from './component-characteristics-device-help-instruction';
import { ComponentCharacteristicsDisplayType } from './component-characteristics-display-type';
import { ComponentCharacteristicsDocumentBin } from './component-characteristics-document-bin';
import { ComponentCharacteristicsNavigationType } from './component-characteristics-navigation-type';
import { DeviceTypes } from './device-types';
import { MediaTypes } from './media-types';
import { PaymentsCharacteristics } from './payments-characteristics';
import { SupportedColors } from './supported-colors';
 /**
 * The characteristics for each component within the CUSS device.
 *
 * @export
 * @interface ComponentCharacteristics
 */
export interface ComponentCharacteristics {

    /**
     * @type {ComponentCharacteristicsAudioOutput}
     * @memberof ComponentCharacteristics
     */
    audioOutput?: ComponentCharacteristicsAudioOutput;

    /**
     * @type {ComponentCharacteristicsDeviceHelpInstruction}
     * @memberof ComponentCharacteristics
     */
    deviceHelpInstruction?: ComponentCharacteristicsDeviceHelpInstruction;

    /**
     * A list of data types identifiers.
     *
     * @type {Array<CUSSDataTypes>}
     * @memberof ComponentCharacteristics
     */
    dsTypesList?: Array<CUSSDataTypes>;

    /**
     * A list of media type identifiers.
     *
     * @type {Array<MediaTypes>}
     * @memberof ComponentCharacteristics
     */
    mediaTypesList: Array<MediaTypes>;

    /**
     * A list of device type identifiers.
     *
     * @type {Array<DeviceTypes>}
     * @memberof ComponentCharacteristics
     */
    deviceTypesList?: Array<DeviceTypes>;

    /**
     * @type {ComponentCharacteristicsNavigationType}
     * @memberof ComponentCharacteristics
     */
    navigationType?: ComponentCharacteristicsNavigationType;

    /**
     * @type {ComponentCharacteristicsDisplayType}
     * @memberof ComponentCharacteristics
     */
    displayType?: ComponentCharacteristicsDisplayType;

    /**
     * ITPS/AEA version supported by printers (BTP/BPP). - The minimum version must be [current version -1]. Example: 2018
     *
     * @type {string}
     * @memberof ComponentCharacteristics
     */
    itpsVersion?: string;

    /**
     * Scalable Vector Graphics (SVG) 1.1. - Please refer also to: https://www.w3.org/TR/SVG11/
     *
     * @type {string}
     * @memberof ComponentCharacteristics
     */
    svgVersion?: string;

    /**
     * If true, the baggage tag printer supports color printing (black and red).
     *
     * @type {boolean}
     * @memberof ComponentCharacteristics
     */
    supportsColor?: boolean;

    /**
     * @type {ComponentCharacteristicsDocumentBin}
     * @memberof ComponentCharacteristics
     */
    documentBin?: ComponentCharacteristicsDocumentBin;

    /**
     * @type {ComponentCharacteristicsConveyorSBD}
     * @memberof ComponentCharacteristics
     */
    conveyorSBD?: ComponentCharacteristicsConveyorSBD;

    /**
     * A list of color options for illumination devices
     *
     * @type {Array<SupportedColors>}
     * @memberof ComponentCharacteristics
     */
    illuminationColors?: Array<SupportedColors>;

    /**
     * A list of characteristics for the biometric subsystem.
     *
     * @type {Array<BiometricsCharacteristics>}
     * @memberof ComponentCharacteristics
     */
    subsystemBiometrics?: Array<BiometricsCharacteristics>;

    /**
     * A list of characteristics for the payments subsystem.
     *
     * @type {Array<PaymentsCharacteristics>}
     * @memberof ComponentCharacteristics
     */
    subsystemPayments?: Array<PaymentsCharacteristics>;
}
