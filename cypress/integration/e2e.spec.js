/// <reference types="cypress" />

const BUTTON_VISIT_AS_VISITOR = '[data-testid="visitor-link-wall"]';
const BUTTON_CREATE_LOGIN = '[data-testid="create-login"]';
const INPUT_NAME = '[data-testid="input-name"]';
const INPUT_EMAIL = '[data-testid="input-email"]';
const INPUT_PASSWORD = '[data-testid="input-password"]';
const BUTTON_LOGIN = '[data-testid="button-login"]';
const INPUT_TEXT_POST = '[data-testid="input-text-post"]';
const BUTTON_SEND_POST = '[data-testid="button-send-post"]';

const TEXT_POST = 'Hello world!'

const NAME_CY_USER = 'User Cypress'
const EMAIL_CY_USER = 'testcy@test.com'
const PASSWORD_CY_USER = 'test123'

const RANDOM_NUMBER = Math.floor(Math.random() * 1000000)
const CREATE_NAME_CY_USER = `User Cypress ${RANDOM_NUMBER}`
const CREATE_EMAIL_CY_USER = `testcy${RANDOM_NUMBER}@test.com`
const CREATE_PASSWORD_CY_USER = 'test123'

describe('e2e tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage();
  })

  it('can possible visit the wall as visitor?', () => {
    cy.contains('Welcome to THE WALL app!').should('exist')
    cy.get(BUTTON_VISIT_AS_VISITOR).should('exist')
    cy.get(BUTTON_VISIT_AS_VISITOR).click()
    cy.contains('Hello, Visitor !').should('exist')
    cy.get(BUTTON_CREATE_LOGIN).should('exist')
    cy.get(INPUT_TEXT_POST).should('not.exist')
    cy.get(BUTTON_SEND_POST).should('not.exist')
  })

  it('can possible visit the wall logged?', () => {
    cy.get(INPUT_EMAIL).type(EMAIL_CY_USER)
    cy.get(INPUT_PASSWORD).type(PASSWORD_CY_USER)
    cy.get(BUTTON_LOGIN).click()
    cy.contains(`Hello, ${NAME_CY_USER} !`).should('exist')
    cy.get(INPUT_TEXT_POST).should('exist')
    cy.get(BUTTON_SEND_POST).should('exist')
  })

  it('can create a user and make a login?', () => {
    cy.get(BUTTON_CREATE_LOGIN).click()
    cy.get(INPUT_NAME).type(CREATE_NAME_CY_USER)
    cy.get(INPUT_EMAIL).type(CREATE_EMAIL_CY_USER)
    cy.get(INPUT_PASSWORD).type(CREATE_PASSWORD_CY_USER)
    cy.get(BUTTON_CREATE_LOGIN).click()
    cy.contains(`Create user, you will redirect`).should('exist')
    cy.wait(5000) // wait sitTimeOut implematation on redirect
    cy.get(INPUT_EMAIL).type(CREATE_EMAIL_CY_USER)
    cy.get(INPUT_PASSWORD).type(CREATE_PASSWORD_CY_USER)
    cy.get(BUTTON_LOGIN).click()
    cy.contains(`Hello, ${CREATE_NAME_CY_USER} !`).should('exist')
    cy.get(INPUT_TEXT_POST).should('exist')
    cy.get(BUTTON_SEND_POST).should('exist')
  })
})
