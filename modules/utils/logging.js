import { Constants } from "../values.js";

/**
 * Handles logging to both console and UI with some validation.
 * 
 * @param {String} type 
 * @param {String} severity 
 * @param {String} message 
 */
export function log(type, severity, message) {
    let formattedMessage = `${Constants.MODULE.NAME} | ${message}`;

    switch(type) {
        case Constants.VALID_LOG_TYPES.CONSOLE:
            switch(severity) {
                case Constants.VALID_LOG_SEVERITIES.LOG:
                    console.log(formattedMessage);
                    break;
                case Constants.VALID_LOG_SEVERITIES.INFO:
                    console.info(formattedMessage);
                    break;
                case Constants.VALID_LOG_SEVERITIES.WARNING:
                    console.warning(formattedMessage);
                    break;
                case Constants.VALID_LOG_SEVERITIES.ERROR:
                    console.error(formattedMessage);
                    break;
                default:
                    console.error(`${Constants.MODULE.NAME} | Invalid Severity! ${type} message follows as a log`);
                    console.log(formattedMessage);
            }
            break;
        case Constants.VALID_LOG_TYPES.UI:
            switch(severity) {
                case Constants.VALID_LOG_SEVERITIES.LOG:
                    ui.notifications.log(formattedMessage);
                    break;
                case Constants.VALID_LOG_SEVERITIES.INFO:
                    ui.notifications.info(formattedMessage);
                    break;
                case Constants.VALID_LOG_SEVERITIES.WARNING:
                    ui.notifications.warning(formattedMessage);
                    break;
                case Constants.VALID_LOG_SEVERITIES.ERROR:
                    ui.notifications.error(formattedMessage);
                    break;
                default:
                    console.error(`${Constants.MODULE.NAME} | Invalid Severity! ${type} message follows as a log`);
                    ui.notifications.log(formattedMessage);
            }
            break;
        default:
            console.error(`${Constants.MODULE.NAME} | Invalid type! Message follows as a console log`);
            console.log(formattedMessage);
    }
}
