import { Constants } from "./values.js";
import { log } from "./utils/logging.js";
import { registerSettings } from "./settings.js";
import { createItemCollection } from "./item_collection.js"

Hooks.once("init", function() {
    CONFIG.debug.hooks = true;
});

Hooks.on("ready", async function () {
    registerSettings();
    const testCollection = createItemCollection(game.userId, 'Test Emporium Collection', ['test'], {});
    log(Constants.VALID_LOG_TYPES.CONSOLE, Constants.VALID_LOG_SEVERITIES.INFO, `Collection created: ${testCollection.id} | ${testCollection.name}`);
});
