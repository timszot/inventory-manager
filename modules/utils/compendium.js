import {Constants} from "../values.js";
import {log} from "./logging.js";

/**
 * Returns a compendium of the given type.
 * 
 * @param {String} compendiumType 
 * @returns {Object} 
 */
export function getCompendiumsOfType(compendiumType) {
    let packsToReturn = {};
    if (!Object.values(Constants.validCompendiumTypes).includes(compendiumType)) {
        log(Constants.validLogTypes.ui, Constants.validLogSeverities.error, `Unsupported compendium type: ${compendiumType}`);
    }

    for (let pack of game.packs) {
        if (pack.metadata.type.toLowerCase() === compendiumType) {
            packsToReturn[pack.metadata.id] = pack.metadata.label;
        }
    }

    return packsToReturn;
}