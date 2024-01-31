import { registerSettings } from "./settings.js";
import { ItemCollectionData } from "./item_collection_data.js"
import { EmporiumList } from "./forms/emporium_list.js";
import { EmporiumGenerator } from "./forms/emporium_generator.js";
import { LootGenerator } from "./forms/loot_generator.js";

export class ItemEmporium {
    static initialize() {
        this.emporiumList = new EmporiumList();
        this.emporiumGenerator = new EmporiumGenerator();
        this.lootGenerator = new LootGenerator();
    }
}

Hooks.once("init", () => {
    CONFIG.debug.hooks = true;
    ItemEmporium.initialize();
});

Hooks.on("ready", async () => {
    registerSettings();
});

Hooks.on("renderItemDirectory", (itemDirectory, html) => {
    const itemHeaders = html.find(`[class="directory-header"]`);
    const lootText = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.BUTTONS.FIND_LOOT");
    const lootTooltip = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.BUTTONS.FIND_LOOT_TOOLTIP");
    const emporiumText = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.BUTTONS.EMPORIUM_LIST");
    const emporiumTooltip = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.BUTTONS.EMPORIUM_LIST_TOOLTIP");
    
    itemHeaders.append(`<div class='header-actions action-buttons flexrow item-emporium'><button type='button' class='interface-button loot-button' title='${lootTooltip}'><i class='fas fa-treasure-chest'></i> ${lootText}</button><button type='button' class='interface-button emporium-list-button' title='${emporiumTooltip}'><i class='fas fa-shopping-cart'></i> ${emporiumText}</button></div>`);
    
    html.on("click", ".loot-button", (event) => {
        ItemEmporium.lootGenerator.render(true);
    });

    html.on("click", ".emporium-list-button", (event) => {
        ItemEmporium.emporiumList.render(true, ItemCollectionData.allItemCollections);
    });
});
