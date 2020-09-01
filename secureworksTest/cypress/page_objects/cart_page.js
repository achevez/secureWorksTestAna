
/// <reference types="cypress" />

export function validateCartURL(expectedText) {
    cy.url().should('include', expectedText)
}

export function validateProductRow(expectedText) {
    const rowProductLabel = cy.get('.woocommerce-cart-form__cart-item > .product-name')
    rowProductLabel.should('include.text', expectedText)
}

export function validateProductRowPrice(expectedPrice) {
    const rowProductPrice = cy.get('.woocommerce-cart-form__cart-item > .product-price')
    rowProductPrice.should('include.text', expectedPrice)
}

export function validateProcuctRowQuantity(expectedQuantity) {
    const rowProductQuantity = cy.get(".woocommerce-cart-form__cart-item > .product-quantity input[id*='quantity']")
    rowProductQuantity.should('include.value', expectedQuantity)
}