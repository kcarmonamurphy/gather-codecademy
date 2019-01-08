const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the single item page', () => {
    describe('after creating a new item', () => {
      it('should show description', () => {
        //setup
        const itemToCreate = buildItemObject();
        browser.url('/items/create');
        browser.setValue('#title-input', itemToCreate.title);
        browser.setValue('#description-input', itemToCreate.description);
        browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
        browser.click('#submit-button');

        //excercise
        browser.click('.item-card a');

        //assertion
        assert.include(browser.getText('body'), itemToCreate.description);
      });
    });
});

