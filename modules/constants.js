/**
 * Declare and organize constant values
 */
export class Constants {
    static MODULE = {
        ID: "item-emporium",
        NAME: "Szotski's Item Emporium",
        FLAGS: {
            ITEM_COLLECTIONS: "item-collections"
        }
    };

    static LOG_TYPES = {
        CONSOLE: "console",
        UI: "ui"
    };

    static LOG_SEVERITIES = {
        ERROR: "error",
        INFO: "info",
        LOG: "log",
        WARNING: "warning"
    };

    static FOUNDRY_COMPENDIUM_TYPES = {
        ACTOR: "actor",
        ITEM: "item",
        CARD_STACK: "card stack",
        JOURNAL_ENTRY: "journal entry",
        MACRO: "macro",
        PLAYLIST: "playlist",
        ROLLABLE_TABLE: "rollable table",
        SCENE: "scene",
        ADVENTURE: "adventure"
    };

    static COMPENDIUM_SETTINGS = {
        POTION: "PotionCompendium",
        SPELL: "SpellCompendium",
        MAGIC_ITEM: "MagicItemCompendium",
        ARMOR: "ArmorCompendium",
        WEAPON: "WeaponCompendium",
        MUNDANE: "MundaneCompendium"
    };

    static TEMPLATES = {
        EMPORIUM_GENERATOR: `modules/${this.MODULE.ID}/templates/emporium_generator.hbs`,
        EMPORIUM_LIST: `modules/${this.MODULE.ID}/templates/emporium_list.hbs`,
        LOOT_GENERATOR: `modules/${this.MODULE.ID}/templates/loot_generator.hbs`
    };

    static RARITIES = {
        DND5E: {
            1: "Common",
            2: "Uncommon",
            3: "Rare",
            4: "Very Rare",
            5: "Legendary",
            6: "Artifact"
        },
        PF2E: {
            1: "Common",
            2: "Uncommon",
            3: "Rare",
            4: "Epic",
            5: "Masterwork",
            6: "Legendary"
        },
    };
}
