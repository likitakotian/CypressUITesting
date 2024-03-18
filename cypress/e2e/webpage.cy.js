describe('test webpage', () => {
  it.skip('validate title of the webpage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')

    cy.url().should('include', "orangehrmlive")
    cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('contain', "orangehrmlive")

    cy.url().should('include', "orangehrmlive")
      .should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .should('contain', "orangehrmlive")

    cy.url().should('include', "orangehrmlive")
      .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      .and('contain', "orangehrmlive")
      .and('not.contain', "Abdc")

    cy.get('.oxd-sheet > p:nth-child(1)').should('be.visible')
      .and('exist')

    // total number of links--use xpath
    //cy.get(li).should('have.length',12)
  })

  it.skip('explicite assertion validate title of the webpage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    let actualName = "ABC"
    cy.get('.oxd-userdropdown-tab').then((x) => {
      //store element to x and then get the text
      let expectedName = x.text();
      //BDD style--> expect
      expect(actualName).to.equal(expectedName)
      //TDD style
      assert.equal(actualName, expectedName)
    })
  })

  it.skip("select the  dynamic drop down from google.com", () => {
    cy.visit("https://www.google.com/")
    cy.get("textarea[name='q']").type("cypress automation")
    cy.wait(3000)
    cy.get("div.wM6W7d>span").should('have.length', 13)
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() == 'cypress automation tutorial') {
        cy.wrap($el).click();
      }
    })
    cy.get("textarea[name='q']").should('have.value', "cypress automation tutorial")
  })

  it.skip("simple alert, which has only ok button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get(':nth-child(1) > button').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains("I am a JS Alert")

    })
    cy.get('#result').should('have.text', "You successfully clicked an alert")
  })

  it("confirmation alert with oka nd cancle--.ok button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get(':nth-child(2) > button').click();
    cy.on('window:confirm', (t) => {
      expect(t).to.contains("I am a JS Confirm")
    })
    cy.get('#result').should('have.text', "You clicked: Ok")
  })

  it("confirmation alert with oka nd cancle->cancle button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get(':nth-child(2) > button').click();
    cy.on('window:confirm', (t) => {
      expect(t).to.contains("I am a JS Confirm")
    })
    cy.on('window:confirm', () => false); //cancle 
    cy.get('#result').should('have.text', "You clicked: Cancel")
  })

  it("alert having input box", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get(':nth-child(3) > button').click();

    cy.get('#result').should('have.text', "You entered: welcome")
  })

  it(' handling child tabs', () => {
    cy.visit("https://the-internet.herokuapp.com/windows")
    cy.get('.example > a').invoke('removeAttr', 'target').click();
    cy.go('back')
  })

  it('handle i frame', () => {
    cy.visit("https://the-internet.herokuapp.com/iframe")
    const iframe = cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);
    iframe.clear().type("welcome  {cmd+a}")
    cy.get("[title='Bold']").click();
  })

  it('mouse over', () => {
    cy.visit('https://demo.opencart.com/')
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
    cy.get('.navbar-collapse>ul>li:nth-of-type(1)>div>div>ul>li:nth-of-type(1)').should('be.visible')
  })

})
