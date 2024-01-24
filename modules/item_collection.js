import { Constants } from "./values";

/**
 * A collection of items, such as a store inventory or a loot chest. Stored in the user data.
 * 
 * @typedef {Object} ItemEmporiumCollection
 * 
 * @property {string} id - A unique ID to identify this collection
 * @property {string} name - A nice name for the collection
 * @property {Array} compendiums - List of compendiums the items were generated from
 * @property {{{item_id: string, item_name: string, item_compendium: string, quantity: int, price: float}}} inventory - Item data that forms the inventory
 */
class ItemEmporiumCollectionData {
    static get allItemCollections() {
        return allItemCollections = game.users.reduce((accumulator, user) => {
            const userItemCollections = this.getItemCollectionsForUser(user.id);

            return {
                ...accumulator,
                ...userItemCollections
            }
        }, {});
    }

    /**
     * Get a stored ItemEmporiumCollection for a specified user.
     * 
     * @param {string} userId 
     * 
     * @returns {ItemEmporiumCollection}
     */
    static getItemCollectionsForUser(userId) {
        return game.client.get(userId)?.getFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTION);
    }

    /**
     * Create a new item collection for a specified user.
     * 
     * @param {string} userId - User the collection belongs to
     * @param {string} name - Nice name of the collection
     * @param {Array} compendiums - Compendiums inventory was generated from
     * @param {{{item_id: string, item_name: string, item_compendium: string, quantity: int, price: float}}} inventoryData - Item data that forms the inventory
     * 
     * @returns {ItemEmporiumCollection}
     */
    static createItemCollection(userId, name, compendiums, inventoryData) {
        const newItemCollection = {
            id: foundry.utils.randomID(16),
            name: name,
            compendiums: compendiums,
            inventoryData: inventoryData,
            userId
        };

        const newItemCollections = {
            [newItemCollection.id]: newItemCollection
        };

        return game.users.get(userId)?.setFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTION, newItemCollections);
    }
}
