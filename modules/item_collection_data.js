import { Constants } from "./constants.js";
import { log } from "./utils/logging.js";

/**
 * A collection of items, such as a store inventory or a loot chest. Stored in the user data.
 * 
 * @typedef {Object} ItemCollection
 * 
 * @property {string} id - A unique ID to identify this collection
 * @property {string} name - A nice name for the collection
 * @property {Array} compendiums - List of compendiums the items were generated from
 * @property {{{item_id: string, item_name: string, quantity: int, price: float}}} inventoryData - Item data that forms the inventory
 */
export class ItemCollectionData {
    /**
     * Get all ItemCollections in a reduced list
     * 
     * @returns {Object}
     */
    static get allItemCollections() {
        return game.users.reduce((accumulator, user) => {
            const userItemCollections = this.getAllItemCollectionsForUser(user.id);

            return {
                ...accumulator,
                ...userItemCollections
            }
        }, {});
    }

    /**
     * Get all stored ItemCollections for a specified user.
     * 
     * @param {string} userId 
     * 
     * @returns {ItemEmporiumCollection}
     */
    static getAllItemCollectionsForUser(userId) {
        return game.users.get(userId)?.getFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTIONS);
    }

    static getItemCollectionById(itemCollectionId) {
        return this.allItemCollections[itemCollectionId];
    }

    /**
     * Create a new item collection for a specified user.
     * 
     * @param {string} userId - User the collection belongs to
     * @param {string} name - Nice name of the collection
     * @param {Array} compendiums - Compendiums inventory was generated from
     * @param {{{item_id: string, item_name: string, item_compendium: string, quantity: int, price: float}}} inventoryData - Item data that forms the inventory
     */
    static createItemCollection(userId, id, name, compendiums, inventoryData) {
        const newItemCollection = {
            id,
            name,
            compendiums,
            inventoryData,
            userId
        };
        const newItemCollections = {
            [newItemCollection.id]: newItemCollection
        };
        
        return game.users.get(userId)?.setFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTIONS, newItemCollections);
    }

    static updateItemCollection(itemCollectionId, updatedItemCollectionData) {
        const relevantCollection = this.allItemCollections[itemCollectionId];
        const updatedItemCollection = {
            [itemCollectionId]: updatedItemCollectionData
        };

        return game.users.get(relevantCollection.userId)?.setFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTIONS, updatedItemCollection);
    }

    static deleteItemCollection(itemCollectionId) {
        // Foundry specific syntax required to delete a key from a persisted object in the database
        const keyDeletion = {
            [`-=${itemCollectionId}`]: null
        }
        const relevantCollection = this.allItemCollections[itemCollectionId];
        log(Constants.LOG_TYPES.CONSOLE, Constants.LOG_SEVERITIES.INFO, 'Deleting item collection:', {itemCollectionId, relevantCollection});

        return game.users.get(relevantCollection.userId)?.setFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTIONS, keyDeletion);
    }
}
