describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("/");

    // Make an alias of search bar input
    cy.get("#search-bar").as("searchBar");
  });

  it("should search for gifs", () => {
    // verify search bar is empty
    cy.get("@searchBar")
      .should("have.value", "")
      .invoke("attr", "placeholder")
      .should("contain", "Search for a gif");

    // verify no gifs rendered
    cy.get(".gif-list").should("not.exist");

    // enter search term
    cy.get("@searchBar")
      .click()
      .type("michael scott{enter}");

    // url changes to include search term
    cy.url().should("contain", "search?q=michael%20scott");

    // verify if gifs rendered
    cy.get(".gif-list li.gif-list__item").should("have.length", 25);
  });

  it("should render gifs based on url", () => {
    // go directly to search with term
    cy.visit("/search?q=michael%20scott");

    // verify search input contains term text
    cy.get("@searchBar").should("have.value", "michael scott");

    // verify if gifs rendered
    cy.get(".gif-list li.gif-list__item").should("have.length", 25);
  });

  it("should render gif details page from search", () => {
    // go directly to search with term
    cy.visit("/search?q=dwight");

    // click on the first gif
    cy.get(".gif-list li.gif-list__item a")
      .first()
      .click();

    // verify url changes to gif details page
    cy.url().should("match", /gifs\/.+$/);
  });

  it("should render gif details", () => {
    const gifId = "IcGkqdUmYLFGE";
    // go directly to gif details page
    cy.visit(`/gifs/${gifId}`);

    // title should be present
    cy.get(".gif-details__title").should("have.text", "the office crying GIF");

    // gif image should be present
    cy.get("img.gif").should("exist");
    cy.get(".gif-details__source").should("exist");
    cy.get(".gif-details__rating").should("exist");
  });
});
