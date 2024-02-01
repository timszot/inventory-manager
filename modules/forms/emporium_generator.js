import { Constants } from "../constants.js";
import { ItemCollectionData } from "../item_collection_data.js";
import { ItemEmporium } from "../item_emporium.js";
import { log } from "../utils/logging.js";

export class EmporiumGenerator extends FormApplication {
    /**
     * @override
     */
    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const title = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.EMPORIUM_GENERATOR_TITLE");
        const overrides = {
            height: 'auto',
            id: 'emporium-generator',
            template: Constants.TEMPLATES.EMPORIUM_GENERATOR,
            title: title,
            closeOnSubmit: false,
            submitOnChange: true,
            itemCollectionId: ''
        };
        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        
        return mergedOptions;
    }

    /**
     * @override
     */
    getData(options) {
        return ItemCollectionData.getItemCollectionById(options.itemCollectionId);
    }

    async _handleButtonClick(event) {
        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().action;
    
        switch (action) {
            case 'generate-emporium-inventory': {
                log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, `Generating Inventory`);
                break;
            }
            case 'save-emporium': {
                this.render();
                ItemEmporium.emporiumList.render();
                break;
            }
            case 'delete-inventory-item': {
                log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, `Delete Inventory action initiated`);
                break;
            }
            default:
                log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.ERROR, `Invalid action detected - ${action}`);
        }
    }

    /**
     * @override
     */
    activateListeners(html) {
        super.activateListeners(html);

        html.on('click', "[data-action]", this._handleButtonClick.bind(this));
    }

    /**
     * @override
     */
    async _updateObject(event, formData) {
        const currentTarget = $(event.currentTarget);
        const itemCollectionId = currentTarget.parents('[data-item-collection-id]')?.data()?.itemCollectionId;

        let expandedData = foundry.utils.expandObject(formData);

        expandedData[itemCollectionId].id = itemCollectionId;
        expandedData[itemCollectionId].userId = currentTarget.parents('[data-user-id]')?.data()?.userId;
        expandedData[itemCollectionId].presets = {};

        log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, 'emporium_generator:_updateObject', formData, expandedData);

        await ItemCollectionData.updateItemCollection(itemCollectionId, expandedData[itemCollectionId]);
    }
}
