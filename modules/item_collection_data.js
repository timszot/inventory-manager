import { Constants } from "./constants.js";

/**
 * A collection of items, such as a store inventory or a loot chest. Stored in the user data.
 * 
 * @typedef {Object} ItemCollection
 * 
 * @property {string} id - A unique ID to identify this collection
 * @property {string} name - A nice name for the collection
 * @property {Object} presets - Saved presets from the generator form
 * @property {string} userId - User the collection belongs to
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
     * @param {string} id - random Id
     * @param {string} name - Nice name of the collection
     * @param {Object} presets - Saved presets from the generator form
     */
    static createItemCollection(userId, id, name, presets) {
        const newItemCollection = {
            id,
            name,
            presets,
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

        return game.users.get(relevantCollection.userId)?.setFlag(Constants.MODULE.ID, Constants.MODULE.FLAGS.ITEM_COLLECTIONS, keyDeletion);
    }
}
