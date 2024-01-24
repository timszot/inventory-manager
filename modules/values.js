/**
 * Declare and organize constant values
 */
export class Constants {
    static MODULE = {
        ID: "item-emporium",
        NAME: "Szotskis Item Emporium",
        FLAGS: {
            ITEM_COLLECTION: "item-collection"
        }
    };

    static VALID_LOG_TYPES = {
        CONSOLE: "console",
        UI: "ui"
    };

    static VALID_LOG_SEVERITIES = {
        ERROR: "error",
        INFO: "info",
        LOG: "log",
        WARNING: "warning"
    };

    static VALID_FOUNDRY_COMPENDIUM_TYPES = {
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

    static GAME_SYSTEMS = {
        DND5E: {
            RARITIES: {
                COMMON: "Common",
                UNCOMMON: "Uncommon",
                RARE: "Rare",
                VARY_RARE: "Very Rare",
                LEGENDARY: "Legendary",
                ARTIFACT: "Artifact"
            },
            SPELL_LEVELS: {
                0: "Cantrip",
                1: "1st Level",
                2: "2nd Level",
                3: "3rd Level",
                4: "4th Level",
                5: "5th Level",
                6: "6th Level",
                7: "7th Level",
                8: "8th Level",
                9: "9th Level"
            }
        }
    };

    static TEMPLATES = {
        ITEM_EMPORIUM: `modules/${this.MODULE_ID}/templates/item_emporium.hbs`
    };
}
