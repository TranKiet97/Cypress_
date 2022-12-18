import AmazonHomePage from '../models/pages/AmazonHomePage';
import AmazonSearchResultPage from '../models/pages/AmazonSearchResultPage';

describe('Amz Search', () => {

    it('Should be able to search dinning table', () => {
        const SEARCH_TEXT = 'Dinning table';
        let amzHomePage = new AmazonHomePage();
        cy.visit('https://www.amazon.com/')
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomePage.searchBtnElem.click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchItemElemList.should('not.have.length', 0)
    });

})