/// <reference types="cypress" />

export function navigate(productURL) {
    cy.visit(`/product/${productURL}/`)
}

export function setProductQuantity(quantity) {
    cy.get("input[id*='quantity']").clear()
    cy.get("input[id*='quantity']").type(quantity)
}

export function clickAddToCart() {
    cy.get('.single_add_to_cart_button').click()
}

export function clickShoppingCart() {
    cy.get('.cart-contents').click()
}

export function validateProductURL(expectedText) {
    cy.url().should('include', expectedText)
}

export function validateProductTitle(expectedTitle) {
    const productTitle = cy.get('.product_title')
    productTitle.should('have.text', expectedTitle)
}

export function validateProductPrice(expectedPrice) {
    const productPrice = cy.get('.summary > .price > .woocommerce-Price-amount')
    productPrice.should('include.text', expectedPrice)
}

export function validateProductQuantity(expectedQuantity) {
    const quantityLabel = cy.get("input[id*='quantity']")
    quantityLabel.should('include.value', expectedQuantity)
}

export function validateCartQuantity(expectedQuantity) {
    const cartQuantityLabel = cy.get('.cart-contents > .count')
    cartQuantityLabel.should('include.text', expectedQuantity)
}