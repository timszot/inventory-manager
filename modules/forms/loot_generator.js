import { Constants } from "../constants.js";

export class LootGenerator extends FormApplication {
    /**
     * @override
     */
    static get defaultOptions() {
        const defaults = super.defaultOptions;
      
        const overrides = {
          height: 'auto',
          id: 'loot-generator',
          template: Constants.TEMPLATES.LOOT_GENERATOR,
          title: 'Loot Generator',
          userId: game.userId,
        };
      
        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        
        return mergedOptions;
    }

    /**
     * @override
     */
    getData(options) {
        return {};
    }
}
