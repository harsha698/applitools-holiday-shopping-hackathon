/// <reference types="cypress" />

describe(`AppliFashion Tests for ${Cypress.env('VERSION')}`, () => {

    it('should display the main page of the AppliFashion app correctly', function () {
        cy.eyesOpen({
            testName: 'Test 1',
            stepName: 'main page',
        });
        cy.visit(Cypress.env('APP_NAME'));
        cy.eyesCheckWindow({tag: 'Main Page', target: 'window', fully: true});
        cy.eyesClose();
    })

    it('should filter out all black color shoes correctly', function () {
        cy.eyesOpen({
            testName: 'Test 2',
            stepName: 'filter by color'
        })
        cy.visit(Cypress.env('APP_NAME'));
        cy.get('#colors__Black').check();
        cy.get('#filterBtn').click();
        cy.get('#product_grid').each((element, index)=>{
            cy.get('h3[id*=H3____]').eq(index).should('include.text', 'Appli Air')
        })
        cy.eyesCheckWindow({ tag: 'Product Grid', target: 'region', selector: '#product_grid' });
        cy.eyesClose();
    })

    it('should display Appli Air x Night shoe product details page correctly', function () {
        cy.eyesOpen({
            testName: 'Test 3',
            stepName: 'product details'
        })
        cy.visit(Cypress.env('PRODUCT_DETAILS_URL'));
        cy.eyesCheckWindow({tag: 'Appli Air x Night Product Detail', target: 'window', fully: true});
        cy.eyesClose();
    })
})
