import { Constants } from "./constants.js";
import { log } from "./utils/logging.js";
import { getCompendiumsOfType } from "./utils/compendium.js";

/**
 * Register all settings
 */
export function registerSettings() {
    let compendiumList = getCompendiumsOfType(Constants.FOUNDRY_COMPENDIUM_TYPES.ITEM);

    Object.keys(Constants.COMPENDIUM_SETTINGS).forEach(key => {
        let name = game.i18n.localize(`SZOTSKI_INV_MANAGER.SETTINGS.${key}.NAME`);
        let settingHint = game.i18n.localize(`SZOTSKI_INV_MANAGER.SETTINGS.${key}.SETTING_HINT`);
        log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, `Registering ${Constants.COMPENDIUM_SETTINGS[key]} setting`)

        game.settings.register(Constants.MODULE.ID, Constants.COMPENDIUM_SETTINGS[key],
            {
                name: name,
                hint: settingHint,
                scope: "client",
                requiresReload: true,
                type: String,
                choices: compendiumList,
                config: true,
                default: ""
            }
        );
    });

    log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, "Settings registered");
}
