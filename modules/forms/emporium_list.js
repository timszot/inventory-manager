import { ItemCollectionData } from "../item_collection_data.js";
import { ItemEmporium } from "../item_emporium.js";
import { log } from "../utils/logging.js";
import { Constants } from "../constants.js";

export class EmporiumList extends FormApplication {
    /**
     * @override
     */
    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const title = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.EMPORIUM_LIST_TITLE");
      
        const overrides = {
            height: 'auto',
            id: 'emporium-list',
            template: Constants.TEMPLATES.EMPORIUM_LIST,
            title: title,
            userId: game.userId,
            closeOnSubmit: false,
            submitOnChange: true
        };
      
        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        
        return mergedOptions;
    }

    /**
     * @override
     */
    getData(options) {
        return {
            itemCollections: ItemCollectionData.getAllItemCollectionsForUser(options.userId)
        }
    }

    async _handleButtonClick(event) {
        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().action;
        const itemCollectionId = clickedElement.parents('[data-item-collection-id]')?.data()?.itemCollectionId;

        switch (action) {
            case 'new-emporium': {
                const id = foundry.utils.randomID(16);
                
                await ItemCollectionData.createItemCollection(game.userId, id, '', {});
                
                ItemEmporium.emporiumGenerator.render(true, {userId: game.userId, itemCollectionId: id});
                this.render();
                break;
            }
            case 'edit-emporium': {
                ItemEmporium.emporiumGenerator.render(true, {userId: game.userId, itemCollectionId: itemCollectionId});
                break;
            }
            case 'delete-emporium': {
                const content = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.CONFIRMS.DELETE_EMPORIUM.CONTENT");
                const title = game.i18n.localize("SZOTSKI_INV_MANAGER.UI.CONFIRMS.DELETE_EMPORIUM.TITLE");
                
                const confirmed = await Dialog.confirm({
                    content: content,
                    title: title,
                });
          
                if (confirmed) {
                    await ItemCollectionData.deleteItemCollection(itemCollectionId);
                    this.render();
                }

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
        const expandedData = foundry.utils.expandObject(formData);
        log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, 'emporium_list:_updateObject', formData, expandedData);
        await ItemCollectionData.updateItemCollection(this.options.userId, expandedData);
    }
}
