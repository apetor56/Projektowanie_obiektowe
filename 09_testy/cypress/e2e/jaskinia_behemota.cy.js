describe('jaskinia behemota', () => {

  beforeEach(() => {
    cy.visit('https://heroes.net.pl/')
  })

  it('should have the correct title', () => {
    cy.title().should('eq', 'Jaskinia Behemota - najstarszy polski serwis o serii Heroes of Might and Magic')
  })

  it('should display the main header', () => {
    cy.get('header').should('be.visible')
  })

  it('should have news', () => {
    cy.contains('news').should('exist');
  });

  it('should have logo', () => {
    cy.get('img[src*="logo.png"]').should('exist')
  });

  it('should have menu bar', () => {
    cy.get('nav#jbms-menu').should('exist')
  });

  it('should have footer', () => {
    cy.get('footer').should('exist')
  });

  it('should have archive', () => {
    cy.get('article.archive').should('exist')
  });

  it('should have pyrkon info', () => {
    cy.get('a[href="/nowina/3843"]').contains('Turniej Heroes na Pyrkonie').should('exist')
  });

  it('should have media links', () => {
    cy.get('a[href*="youtube.com"]').should('exist')
    cy.get('a[href*="discord.gg"]').should('exist')
    cy.get('a[href*="facebook.com"]').should('exist')
  });

  it('should have login button', () => {
    cy.contains('Logowanie').should('exist');
  });

  it('should have heroes III board game button', () => {
    cy.contains('Heroes III Board Game').should('exist');
  });

  it('should have Maps button', () => {
    cy.contains('Mapy').should('exist');
  });

  it('should have Heroes I button', () => {
    cy.contains('Heroes I').should('exist');
  });

  it('should have Heroes II button', () => {
    cy.contains('Heroes II').should('exist');
  });

  it('should have Heroes III button', () => {
    cy.contains('Heroes III').should('exist');
  });

  it('should have Heroes IV button', () => {
    cy.contains('Heroes IV').should('exist');
  });

  it('should have Heroes V button', () => {
    cy.contains('Heroes V').should('exist');
  });

  it('should have Heroes VI button', () => {
    cy.contains('Heroes VI').should('exist');
  });

  it('should have Heroes VII button', () => {
    cy.contains('Heroes VII').should('exist');
  });

  it('should have HotA button', () => {
    cy.contains('HotA').should('exist');
  });

})
