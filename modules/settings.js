import {Constants} from "./values.js";
import {log} from "./utils/logging.js";
import {getCompendiumsOfType} from "./utils/compendium.js";

/**
 * Register all settings
 */
export function registerSettings() {
    // First register all the settings for any user defineable compendiums
    let userCompendiums = Constants.user_defined_compendiums;
    Object.values(userCompendiums).forEach(compendium => {
        log(Constants.validLogTypes.console, Constants.validLogSeverities.info, `Registering ${compendium.setting} setting`)
        game.settings.register(Constants.module.id, compendium.setting,
            {
                name: compendium.name,
                hint: compendium.setting_hint,
                scope: "client",
                requiresReload: true,
                type: String,
                choices: getCompendiumsOfType(Constants.validCompendiumTypes.item),
                config: true,
                default: ""
            }
        );
    });
}
