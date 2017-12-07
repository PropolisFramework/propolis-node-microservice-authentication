/**
 * @file Edit account of a user test Jest script.
 * @description A user needs to be able to edit his/her account information.
 * Actions:
 * - Change username (if permitted in the configuration file)
 * - Change password
 * - Offer OAuth2 Sign-In (if permitted in the configuration file)
 * - Change email (multiple emails if in the configuration file)
 * - Cellphone (if permitted in the configuration)
 * - Other inputs coming from another microservice (if in the configuration file)
 * - Two-legged Sign-In (if permitted in the configuration)
 *  - SMS
 *  - Email
 *  - MFA (with app)
 *  - Key...
 */

require('../index');

/**
 * @description Get username and compare it to the DB
 */
test('Show username', () => {
    expect().toBe();
});

/**
 * @description
 * 1. Changing username and how the API reacts
 * 2. Test DB to make sure it has the new password in the DB
 */
test('Change username', () => {
    expect().toBe(true);
});

/**
 * @description
 * 1. Changing user and how the API reacts
 * 2. Test DB to make sure it has the new changed username
 */
test('Change password', () => {
    expect().toBe(true);
});

/**
 * @description
 */
test('List OAuth2 Sign-In', () => {

});

/**
 * @description
 */
test('Show OAuth2 specific login service details', () => {

});

/**
 * @description
 */
test('Add login with OAuth2', () => {

});

/**
 * @description
 */
test('Remove login with OAuth2', () => {

});

/**
 * @description
 * 1. Change email and test the API result
 * 2. Compare with the DB to make sure it was changed
 */
test('Change email', () => {

});

test('Add cellphone', () => {

});

test('Change cellphone', () => {

});

test('Show inputs from another microservice', () => {

});

test('Add value to the test inputs from the other microservice', () => {

});

test('Allow SMS two-legged sign-in', () => {

});

test('Disallow SMS two-legged sign-in', () => {

});

test('Allow email two-legged sign-in', () => {

});

test('Disallow email two-legged sign-in', () => {

});

test('Allow MFA two-legged sign-in', () => {

});

test('Disallow MFA two-legged sign-in', () => {

});

test('Allow Key... two-legged sign-in', () => {

});

test('Disallow Key... two-legged sign-in', () => {

});


