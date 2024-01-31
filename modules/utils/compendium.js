import { Constants } from "../constants.js";
import { log } from "./logging.js";

/**
 * Returns a compendium of the given type.
 * 
 * @param {String} compendiumType Valid FoundryVTT compendium type
 * @returns {Object} List of compendium names mapped to their ids
 */
export function getCompendiumsOfType(compendiumType) {
    if (!Object.values(Constants.FOUNDRY_COMPENDIUM_TYPES).includes(compendiumType)) {
        log(Constants.LOG_TYPES.UI, Constants.LOG_SEVERITIES.ERROR, `Unsupported compendium type: ${compendiumType}`);
    }

    let packsToReturn = {};
    for (let pack of game.packs) {
        if (pack.metadata.type.toLowerCase() === compendiumType) {
            packsToReturn[pack.metadata.id] = pack.metadata.label;
        }
    }

    return packsToReturn;
}