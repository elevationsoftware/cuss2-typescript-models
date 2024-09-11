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

/**
 * Interface Data Type Codes with the following semantics... <p>  # MSR remove: *DS_TYPES_UNDEFINED:* For all data not having a specific data type (yet)<p>  # MSR remove: *DS_TYPES_PAYMENT_ISO:* ISO track data without truncation <p>  # MSR remove: *DS_TYPES_PAYMENT_JIS2:* JIS-2 track data without truncation <p>  # MSR remove: *DS_TYPES_FOID_JIS2:* JIS-2 track data with FOID Data truncation <br>  # MSR remove: *DS_TYPES_FOID_ISO:* ISO track data with FOID Data truncation <br>  # MSR remove: *DS_TYPES_DISCRETIONARY_ISO:* ISO track data with DISCRETIONARY Data truncation <p>  # MSR remove: *DS_TYPES_DISCRETIONARY_JIS2:* JIS-2 track data with DISCRETIONARY Data truncation <p>  *DS_TYPES_ISO:* ISO encoded data <br>  *DS_TYPES_VING:* VING encoded data <br>  *DS_TYPES_TESSA:* TESSA encoded data <br>  *DS_TYPES_SAFLOK:* SAFLOK encoded data <br>  *DS_TYPES_TIMELOX:* TIMELOC encoded data <br>  *DS_TYPES_KABA_ILCO:* KABA iLco encoded data <br>  *DS_TYPES_KABA_ILCO_FOLIO:* KABA iLco (folio) enc <p>  *DS_TYPES_IMAGE_IR:* Infrared image <br>  *DS_TYPES_IMAGE_VIS:* Visible image <br>  *DS_TYPES_IMAGE_UV:* Ultraviolet image <br>  *DS_TYPES_IMAGE_PHOTO:* Photo image <br> *DS_TYPES_IMAGE_COAX:* Coaxial image <p>  *DS_TYPES_IMAGE_RED:* Red Image <br>  *DS_TYPES_IMAGE_GREEN:* Green Image <br>  *DS_TYPES_IMAGE_BLUE:* Blue Image <br>  *DS_TYPES_IMAGE_GS:* Greyscale Image (8 bit/pixel)<br>  *DS_TYPES_IMAGE_BW:* Black and White Image (1 bit/pixel)<br>  *DS_TYPES_IMAGE_BMP:* BMP formatted image <br>  *DS_TYPES_IMAGE_GIF:* GIF formatted image <br>  *DS_TYPES_IMAGE_TIF:* TIFF formatted image <br>  *DS_TYPES_IMAGE_PNG:* PNG formatted image <br>  *DS_TYPES_IMAGE_JPG:* JPG/JPEG formatted image <br>  *DS_TYPES_IMAGE_XBM:* XBM formatted image <br>  *DS_TYPES_IMAGE_XPM:* XPM formatted image <br>  *DS_TYPES_IMAGE_PPM:* PPM formatted image <p>  *DS_TYPES_VIDEO_AVI:* AVI formatted video <br>  *DS_TYPES_VIDEO_MP4:* MP4 formatted video <br>  *DS_TYPES_VIDEO_MOV:* MOV formatted video <br>  *DS_TYPES_VIDEO_MKV:* MKV formatted video <br>  *DS_TYPES_VIDEO_WMV:* WMV formatted video <p>  *DS_TYPES_CODELINE:* Codeline data <br>  *DS_TYPES_BARCODE:* Barcode data <br>  *DS_TYPES_MIWA:* Miwa data <p>  *DS_TYPES_SCAN_PDF417:* PDF417 2D barcode <br>  *DS_TYPES_SCAN_AZTEC:* Aztec 2D barcode <br>  *DS_TYPES_SCAN_DMATRIX:* Datamatrix 2D barcode <br>  *DS_TYPES_SCAN_QR:* QR Code 2D barcode <br>  *DS_TYPES_SCAN_CODE39:* Code39 1D barcode <br>  *DS_TYPES_SCAN_CODE128:* Code128 1D barcode <br>  *DS_TYPES_SCAN_CODE2OF5:* Code2of5 1D barcode <p>  *DS_TYPES_ISO7816:* Communication protocols for PICC/RFID/NFC devices <p>  *DS_TYPES_PRINT_2S_PAGE:* 2-Sided Single-page printing <br>  *DS_TYPES_PRINT_2S_MULTI:* 2-Sided Multi-page printing <br>  *DS_TYPES_PRINT_PDF:* Adobe PDF print format <p>  *DS_TYPES_PRINT_SVG:* Scalable Vector Graphics format <p>  *DS_TYPES_MIFARE:* Communication protocols for PICC/RFID/NFC devices <br>  *DS_TYPES_SUICA:* Communication protocols for PICC/RFID/NFC devices <p>  *DS_TYPES_ISO15961:* IATA RFID baggage tag devices <br>  *DS_TYPES_ITPS:* IATA Technical Peripheral Specifications (former AEA) formatted data <br>  *DS_TYPES_RP1745:* IATA Baggage Service Messages Format <br>  *DS_TYPES_WEIGHT:* Baggage Weight from Scale or Conveyor <p>  *DS_TYPES_DIMENSION:* Baggage Dimensions from Conveyor <p>          *DS_TYPES_EPASSPORT_DG1:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG2:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG3:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG4:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG5:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG6:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG7:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG8:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG9:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG10:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG11:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG12:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG13:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG14:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG15:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG16:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG17:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG18:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG19:* e-Passport format <br>  *DS_TYPES_EPASSPORT_DG20:* e-Passport format <p>  *DS_TYPES_EPAYMENT:* E-Payment - CUSS2 Payments Domain<p>  *DS_TYPES_ILLUMINATION:* Illumination LEDs Interface - CUSS2 Illumination Domain<p>  *DS_TYPES_SSML:* SSML Specification supported by the Announcement Interface <br>  *DS_TYPES_KEY:* Navigation keypad events supported by Keypad Interface <br>  *DS_TYPES_KEY_UP:* Navigation keypad event supported by Keypad Interface <br>  *DS_TYPES_KEY_DOWN:* Navigation keypad event supported by Keypad Interface <p>  *DS_TYPES_BIOMETRIC:* Biometric Interface - CUSS2 Biometrics Domain 
 * @export
 * @enum {string}
 */
export enum CUSSDataTypes {
    ISO = 'DS_TYPES_ISO',
    FOIDISO = 'DS_TYPES_PAYMENT_ISO',
    VING = 'DS_TYPES_VING',
    TESSA = 'DS_TYPES_TESSA',
    SAFLOK = 'DS_TYPES_SAFLOK',
    TIMELOX = 'DS_TYPES_TIMELOX',
    KABAILCO = 'DS_TYPES_KABA_ILCO',
    KABAILCOFOLIO = 'DS_TYPES_KABA_ILCO_FOLIO',
    IMAGEIR = 'DS_TYPES_IMAGE_IR',
    IMAGEVIS = 'DS_TYPES_IMAGE_VIS',
    IMAGEUV = 'DS_TYPES_IMAGE_UV',
    IMAGEPHOTO = 'DS_TYPES_IMAGE_PHOTO',
    IMAGECOAX = 'DS_TYPES_IMAGE_COAX',
    IMAGERED = 'DS_TYPES_IMAGE_RED',
    IMAGEGREEN = 'DS_TYPES_IMAGE_GREEN',
    IMAGEBLUE = 'DS_TYPES_IMAGE_BLUE',
    IMAGEGS = 'DS_TYPES_IMAGE_GS',
    IMAGEBW = 'DS_TYPES_IMAGE_BW',
    IMAGEBMP = 'DS_TYPES_IMAGE_BMP',
    IMAGEGIF = 'DS_TYPES_IMAGE_GIF',
    IMAGETIF = 'DS_TYPES_IMAGE_TIF',
    IMAGEPNG = 'DS_TYPES_IMAGE_PNG',
    IMAGEJPG = 'DS_TYPES_IMAGE_JPG',
    IMAGEXBM = 'DS_TYPES_IMAGE_XBM',
    IMAGEXPM = 'DS_TYPES_IMAGE_XPM',
    IMAGEPPM = 'DS_TYPES_IMAGE_PPM',
    VIDEOAVI = 'DS_TYPES_VIDEO_AVI',
    VIDEOMP4 = 'DS_TYPES_VIDEO_MP4',
    VIDEOMOV = 'DS_TYPES_VIDEO_MOV',
    VIDEOMKV = 'DS_TYPES_VIDEO_MKV',
    VIDEOWMV = 'DS_TYPES_VIDEO_WMV',
    CODELINE = 'DS_TYPES_CODELINE',
    BARCODE = 'DS_TYPES_BARCODE',
    MIWA = 'DS_TYPES_MIWA',
    SCANPDF417 = 'DS_TYPES_SCAN_PDF417',
    SCANAZTEC = 'DS_TYPES_SCAN_AZTEC',
    SCANDMATRIX = 'DS_TYPES_SCAN_DMATRIX',
    SCANQR = 'DS_TYPES_SCAN_QR',
    SCANCODE39 = 'DS_TYPES_SCAN_CODE39',
    SCANCODE128 = 'DS_TYPES_SCAN_CODE128',
    SCANCODE2OF5 = 'DS_TYPES_SCAN_CODE2OF5',
    ISO7816 = 'DS_TYPES_ISO7816',
    PRINT2SPAGE = 'DS_TYPES_PRINT_2S_PAGE',
    PRINT2SMULTI = 'DS_TYPES_PRINT_2S_MULTI',
    PRINTPDF = 'DS_TYPES_PRINT_PDF',
    MIFARE = 'DS_TYPES_MIFARE',
    SUICA = 'DS_TYPES_SUICA',
    ISO15961 = 'DS_TYPES_ISO15961',
    RP1745 = 'DS_TYPES_RP1745',
    WEIGHT = 'DS_TYPES_WEIGHT',
    DIMENSION = 'DS_TYPES_DIMENSION',
    EPASSPORTDG1 = 'DS_TYPES_EPASSPORT_DG1',
    EPASSPORTDG2 = 'DS_TYPES_EPASSPORT_DG2',
    EPASSPORTDG3 = 'DS_TYPES_EPASSPORT_DG3',
    EPASSPORTDG4 = 'DS_TYPES_EPASSPORT_DG4',
    EPASSPORTDG5 = 'DS_TYPES_EPASSPORT_DG5',
    EPASSPORTDG6 = 'DS_TYPES_EPASSPORT_DG6',
    EPASSPORTDG7 = 'DS_TYPES_EPASSPORT_DG7',
    EPASSPORTDG8 = 'DS_TYPES_EPASSPORT_DG8',
    EPASSPORTDG9 = 'DS_TYPES_EPASSPORT_DG9',
    EPASSPORTDG10 = 'DS_TYPES_EPASSPORT_DG10',
    EPASSPORTDG11 = 'DS_TYPES_EPASSPORT_DG11',
    EPASSPORTDG12 = 'DS_TYPES_EPASSPORT_DG12',
    EPASSPORTDG13 = 'DS_TYPES_EPASSPORT_DG13',
    EPASSPORTDG14 = 'DS_TYPES_EPASSPORT_DG14',
    EPASSPORTDG15 = 'DS_TYPES_EPASSPORT_DG15',
    EPASSPORTDG16 = 'DS_TYPES_EPASSPORT_DG16',
    EPASSPORTDG17 = 'DS_TYPES_EPASSPORT_DG17',
    EPASSPORTDG18 = 'DS_TYPES_EPASSPORT_DG18',
    EPASSPORTDG19 = 'DS_TYPES_EPASSPORT_DG19',
    EPASSPORTDG20 = 'DS_TYPES_EPASSPORT_DG20',
    EPAYMENT = 'DS_TYPES_EPAYMENT',
    ILLUMINATION = 'DS_TYPES_ILLUMINATION',
    SSML = 'DS_TYPES_SSML',
    KEY = 'DS_TYPES_KEY',
    KEYUP = 'DS_TYPES_KEY_UP',
    KEYDOWN = 'DS_TYPES_KEY_DOWN',
    BIOMETRIC = 'DS_TYPES_BIOMETRIC',
    PRINTSVG = 'DS_TYPES_PRINT_SVG',
    ITPS = 'DS_TYPES_ITPS'
}

