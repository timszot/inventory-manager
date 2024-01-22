/**
 * Declare and organize constant values
 */
export class Constants {
    static LOG_ERROR = "error";
    static LOG_INFO = "info";
    static LOG_LOG = "log";
    static LOG_WARNING = "warning";
    static MODULE_ID = "inventory-management";
    static MODULE_NAME = "Szotskis Inventory Management";

    static validLogSeverities = [
        this.LOG_ERROR,
        this.LOG_INFO,
        this.LOG_LOG,
        this.LOG_WARNING
    ];
}