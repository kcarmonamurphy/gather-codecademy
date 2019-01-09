const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

const Item = require('../../models/item');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id/delete', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:
  describe('POST', () => {
  	it('deletes from database', async () => {
      const item = await seedItemToDatabase();

      const response = await request(app)
        .post(`/items/${item._id}/delete`)
        .type('form')
        .send();

      const foundItem = await Item.findOne(item);
      assert.isNull(foundItem, 'Item was not deleted');
    });
  });
  
});
