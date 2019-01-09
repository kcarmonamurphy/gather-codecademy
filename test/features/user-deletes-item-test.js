// const {assert} = require('chai');
// const {buildItemObject} = require('../test-utils');

// describe('User visits root and deletes first item', () => {
//     describe('after creating a new item', () => {
//       it('should remove item', () => {
//         //setup
//         const itemToCreate = buildItemObject();
//         browser.url('/items/create');
//         browser.setValue('#title-input', itemToCreate.title);
//         browser.setValue('#description-input', itemToCreate.description);
//         browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
//         browser.click('#submit-button');

//         //excercise
//         browser.click('.item-card .delete-button');

//         //assertion
//         assert.isBelow(itemsAfterDeletion, itemsBeforeDeletion, 'should be fewer items after clicking on delte button');
//       });
//     });
// });

