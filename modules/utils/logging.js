import {Constants} from "../values.js";

/**
 * Handles logging to both console and UI with some validation.
 * 
 * @param {String} type 
 * @param {String} severity 
 * @param {String} message 
 */
export function log(type, severity, message) {
    let formattedMessage = `${Constants.module.name} | ${message}`;

    switch(type) {
        case Constants.validLogTypes.console:
            switch(severity) {
                case Constants.validLogSeverities.log:
                    console.log(formattedMessage);
                    break;
                case Constants.validLogSeverities.info:
                    console.info(formattedMessage);
                    break;
                case Constants.validLogSeverities.warning:
                    console.warning(formattedMessage);
                    break;
                case Constants.validLogSeverities.error:
                    console.error(formattedMessage);
                    break;
                default:
                    console.error(`${Constants.module.name} | Invalid Severity! ${type} message follows as a log`);
                    console.log(formattedMessage);
            }
            break;
        case Constants.validLogTypes.ui:
            switch(severity) {
                case Constants.validLogSeverities.log:
                    ui.notifications.log(formattedMessage);
                    break;
                case Constants.validLogSeverities.info:
                    ui.notifications.info(formattedMessage);
                    break;
                case Constants.validLogSeverities.warning:
                    ui.notifications.warning(formattedMessage);
                    break;
                case Constants.validLogSeverities.error:
                    ui.notifications.error(formattedMessage);
                    break;
                default:
                    console.error(`${Constants.module.name} | Invalid Severity! ${type} message follows as a log`);
                    ui.notifications.log(formattedMessage);
            }
            break;
        default:
            console.error(`${Constants.module.name} | Invalid type! Message follows as a console log`);
            console.log(formattedMessage);
    }
}
