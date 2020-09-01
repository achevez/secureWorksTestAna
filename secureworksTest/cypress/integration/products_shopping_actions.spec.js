/// <reference types="cypress" />

import { 
    navigate,
    setProductQuantity,
    clickAddToCart,
    clickShoppingCart,
    validateProductURL,
    validateProductTitle,
    validateProductPrice,
    validateProductQuantity,
    validateCartQuantity } from "../page_objects/product_page"

import {
    validateCartURL,
    validateProductRow,
    validateProductRowPrice,
    validateProcuctRowQuantity } from "../page_objects/cart_page"

describe('Product shopping actions', () => {
    const productURL = '/Anita_test_product/'
    const cartURL = '/cart/'
    const productQuantity = 7
    const productDescription = {
        name: 'Anita_test_product',
        type: 'simple',
        regular_price: '50.5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor massa quis tortor congue scelerisque.',
        short_description: 'Lorem ipsum dolor sit amet'
    }

    let itemId

    before(() => {
        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products',
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: productDescription
        }).then((response) => {
            itemId = response.body.id
        })
    })

    beforeEach(() => {
        navigate(productDescription.name)
    })

    it('should load the product information', () => {
        validateProductURL(productURL)
        validateProductTitle(productDescription.name)
        validateProductPrice(productDescription.regular_price)
    })

    it('should increase the quantity of the product', () => {
        setProductQuantity(productQuantity)
        validateProductQuantity(productQuantity)
    })

    it('should add the product to the cart', () => {
        setProductQuantity(productQuantity)
        clickAddToCart()
        validateCartQuantity(productQuantity)
    })

    it('should navigate to the cart page', () => {
        setProductQuantity(productQuantity)
        clickAddToCart()
        clickShoppingCart()
        validateCartURL(cartURL)
        validateProductRow(productDescription.name)
        validateProductRowPrice(productDescription.regular_price)
        validateProcuctRowQuantity(productQuantity)
    })

    after(() => {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/${itemId}`,
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            }
        })
    })
})
