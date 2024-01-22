import {Constants} from "../values.js";

export function consoleLogging(message, severity) {
    let formattedMessage = `${Constants.MODULE_NAME} | ${message}`;

    if (!Constants.validLogSeverities.includes(severity)) {
        console.error(`${Constants.MODULE_NAME} | Invalid Severity! Message follows as a log`);
        console.log(formattedMessage);
    } else if (severity === Constants.LOG_INFO) {
        console.info(formattedMessage);
    } else if (severity === Constants.LOG_LOG) {
        console.log(formattedMessage);
    } else if (severity === Constants.LOG_WARNING) {
        console.warn(formattedMessage);
    } else if (severity === Constants.LOG_ERROR) {
        console.error(formattedMessage);
    }
}