/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e6vz5ywgrum3lt2",
    "created": "2024-08-30 19:04:43.776Z",
    "updated": "2024-08-30 19:04:43.776Z",
    "name": "faqs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pi04g9o7",
        "name": "question",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8jjhkox8",
        "name": "answer",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e6vz5ywgrum3lt2");

  return dao.deleteCollection(collection);
})
