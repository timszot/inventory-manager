import { Constants } from "../constants.js";

/**
 * Handles logging to both console and UI with some validation.
 * 
 * @param {String} type 
 * @param {String} severity 
 * @param {String} message 
 */
export function log(type, severity, ...args) {
    let formattedMessage = `${Constants.MODULE.NAME} | `;

    switch(type) {
        case Constants.LOG_TYPES.CONSOLE:
            switch(severity) {
                case Constants.LOG_SEVERITIES.LOG:
                    console.log(formattedMessage, ...args);
                    break;
                case Constants.LOG_SEVERITIES.INFO:
                    console.info(formattedMessage, ...args);
                    break;
                case Constants.LOG_SEVERITIES.WARNING:
                    console.warning(formattedMessage, ...args);
                    break;
                case Constants.LOG_SEVERITIES.ERROR:
                    console.error(formattedMessage, ...args);
                    break;
                default:
                    console.error(`${Constants.MODULE.NAME} | Invalid Severity! ${type} message follows as a log`);
                    console.log(formattedMessage, ...args);
            }
            break;
        case Constants.LOG_TYPES.UI:
            switch(severity) {
                case Constants.LOG_SEVERITIES.LOG:
                    ui.notifications.log(formattedMessage, ...args);
                    break;
                case Constants.LOG_SEVERITIES.INFO:
                    ui.notifications.info(formattedMessage, ...args);
                    break;
                case Constants.LOG_SEVERITIES.WARNING:
                    ui.notifications.warning(formattedMessage, ...args);
                    break;
                case Constants.LOG_SEVERITIES.ERROR:
                    ui.notifications.error(formattedMessage, ...args);
                    break;
                default:
                    console.error(`${Constants.MODULE.NAME} | Invalid Severity! ${type} message follows as a log`);
                    ui.notifications.log(formattedMessage, ...args);
            }
            break;
        default:
            console.error(`${Constants.MODULE.NAME} | Invalid type! Message follows as a console log`);
            console.log(formattedMessage, ...args);
    }
}
