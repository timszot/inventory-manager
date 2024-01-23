/**
 * Declare and organize constant values
 */
export class Constants {
    static module = {
        id: "inventory-manager",
        name: "Szotskis Inventory Management",
    };

    static validLogTypes = {
        console: "console",
        ui: "ui"
    };

    static validLogSeverities = {
        error: "error",
        info: "info",
        log: "log",
        warning: "warning"
    };

    static validCompendiumTypes = {
        actor: "actor",
        item: "item",
        card_stack: "card stack",
        journal_entry: "journal entry",
        macro: "macro",
        playlist: "playlist",
        rollable_table: "rollable table",
        scene: "scene",
        adventure: "adventure"
    };

    static user_defined_compendiums = {
        potion: {
            name: "Potion Compendium",
            setting: "PotionCompendium",
            setting_hint: "Select compendium that contains potions."
        },
        spell: {
            name: "Spell Compendium",
            setting: "SpellCompendium",
            setting_hint: "Select compendium that contains spells."
        },
        magic_item: {
            name: "Magic Item Compendium",
            setting: "MagicItemCompendium",
            setting_hint: "Select compendium that contains magic items."
        },
        armor: {
            name: "Armor Compendium",
            setting: "ArmorCompendium",
            setting_hint: "Select compendium that contains armor."
        },
        weapon: {
            name: "Weapon Compendium",
            setting: "WeaponCompendium",
            setting_hint: "Select compendium that contains weapons."
        },
        mundane: {
            name: "Mundane Compendium",
            setting: "MundaneCompendium",
            setting_hint: "Select compendium that contains mundane or non-magic items."
        }
    };
}
