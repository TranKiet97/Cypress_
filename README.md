> PROJECT FOLDER STRUCTURE 
    1- Test Files (./cypress/integration)
    2- Fixture Files (./cypress/fixtures) > Execute data driven testing or using json file, csv file, etc
    3- Downloaded Files (./cypress/downloads)
    4- Screenshot Files (./cypress/screenshots)
    5- Video Files (./cypress/videos)
    6- Plugin Files (./cypress/plugins)
    7- Support Files (./cypress/support) > run before every single spect test file

================================================================================================================
> CYPRESS HOOKS
    1- before => Executed once, as soon as the first test script
    2- beforeEach => Executed before each test script
    3- testExecution
    4- afterEach => Executed after each test script
    5- after => Executed once, as soon as the last test script

    When you use it.only('',()=>{}) that only this test case is executed

================================================================================================================
> CYPRESS URL
    Create the cypress.json file with the code inside
    1- cy.title()
    2- cy.url()
    3- cy.location('protocol').should('contains','https')
    4- cy.location('hostname').should('eq','www.saucedemo.com')
    5- cy.location('pathname').should('eq','/inventory.html')

================================================================================================================
> SELECTORS IN CYPRESS
    1- get()
    2- eq()
    3- first()
    4- last()
    5- filter()
    6- find()
    7- parent()

================================================================================================================
> CYPRESS FIXTURES EXPLAINED
    Create the data.json file in fixtures folder
    When using fixture(), we should use function(){} instead of arrow function

================================================================================================================
> CYPRESS INTERCEPT RESPONSE
    Spy and stub network requests and responses

    Syntax
    1- spying only
        cy.intercept(url)
        cy.intercept(method, url)
        cy.intercept(routeMatcher)
    2- spycing and response stubbing
        cy.intercept(url, staticResponse)
        cy.intercept(method, url, staticResponse)
        cy.intercept(routeMatcher, staticResponse)
        cy.intercept(url, routeMatcher, staticResponse)
    3- spying, dynamic stubbing, request modification, etc.
        cy.intercept(url, routeHandler)
        cy.intercept(method, url, routeHandler)
        cy.intercept(routeMatcher, routeHandler)
        cy.intercept(url, routeMatcher, routeHandler)

    Arguments
    1- method (String)  - GET, POST, PUT, etc
    2- url (String, Glob, RegExp)
    3- routeMatcher (RouteMatcher) - is an object used to match the incoming HTTP requests with this intercepted route - auth, headers, hostname, https, method, middleware, path, pathname, port, query, etc.
    4- staticResponse (StaticResponse) - statusCode, headers, body, etc.
    5- routeHandler (Function)

    Waiting on a request - Use cy.wait() with aliasing an intercepted route to wait for the request/response cycle to complete

    You can chain .its() and .should() to assert against request/response cycles: 
        cy.wait('@someRoute').its('request.body').should('include', 'user')
        cy.wait('@someRoute').its('response.statusCode').should('eq', 500)

    You can use cy.wait() to wait on requests that end with network errors:
        cy.intercept('GET', '/should-err', { forceNetworkError: true }).as('err')
        cy.wait('@err').should('have.property', 'error')

================================================================================================================
> PAGE OBJECT MODEL
    Reach out the pages folder and create a page object files
    
================================================================================================================
> ITERATE over JSON OBJECT
    Reach out the fixtures folder and create a data file
    In cypress file, import from page object files and data file

================================================================================================================
> USING WRITEFILE AND READFILE
    Write a file: write to a file with the specified contents
        Syntax:
            cy.writeFile(filePath, contents)
            cy.writeFile(filePath, contents, encoding)
            cy.writeFile(filePath, contents, options)
            cy.writeFile(filePath, contents, encoding, options)
        Arguments
            1- filePath (String) (within the project root)
            2- contents (String, Array, Object or Buffer) to be written to the file
            3- encoding (String) to be used when writing to the file (ascii, base64, binary, hex, utf-8, etc.)
            4- options (Object)
    
    Read a file and yield its contents
        Syntax:
            cy.readFile(filePath)
            cy.readFile(filePath, encoding)
            cy.readFile(filePath, options)
            cy.readFile(filePath, encoding, options)
        Examples
            1- Text
                // path/to/message.txt
                Hello World

                cy.readFile('path/to/message.txt').should('eq', 'Hello World') // true
            2- JSON
                // data.json
                {
                  "name": "Eliza",
                  "email": "eliza@example.com"
                }

                cy.readFile('path/to/data.json').its('name').should('eq', 'Eliza') // true
            3- YAML
                const YAML = require('yamljs')

                cy.readFile('languages/en.yml').then((str) => {
                // parse the string into object literal
                const english = YAML.parse(str)

                cy.get('#sidebar')
                    .find('.sidebar-title')
                    .each(($el, i) => {
                    englishTitle = english.sidebar[i]

                    expect($el.text()).to.eq(englishTitle)
                    })
                })

================================================================================================================
> CYPRESS ASSERTIONS
    Assertions are the validation steps that determine whether the specified step of the automated test case succeeded
    In actual, Assertions validate the desireed state of your elements, objects or applications under test
    
1- Sharing Context
    To alias something you'd like to share use the .as() commandbeforeEach(() => {
  // alias the $btn.text() as 'text'
  cy.get('button').invoke('text').as('text')
})

it('has access to text', function () {
  this.text // is now available
})================================================================================================================
> VARIABLES && ALIASES
    - Alias doesnt work with arrow functions
    - When using closures you'll always have access to the objects that were yielded to you without assigning them
    - Return Value
    1- Closures

cy.get('button').then(($btn) => {

  // store the button's text
  const txt = $btn.text()

  // submit a form
  cy.get('form').submit()

  // compare the two buttons' text
  // and make sure they are different
  cy.get('button').should(($btn2) => {
    expect($btn2.text()).not.to.eq(txt)
  })
})

// these commands run after all of the
// other previous commands have finished
cy.get(...).find(...).should(...)

    2- Debugging

cy.get('button').then(($btn) => {
  // inspect $btn <object>
  debugger

  cy.get('[data-testid="countries"]')
    .select('USA')
    .then(($select) => {
      // inspect $select <object>
      debugger

      cy.clock().then(($clock) => {
        // inspect $clock <object>
        debugger

        $btn // is still available
        $select // is still available too
      })
    })
})

    3- Variables
        > HTML file:
<button>increment</button>
you clicked button <span data-testid="num">0</span> times
        
        > Cypress code:
cy.get('[data-testid="num"]').then(($span) => {
  // capture what num is right now
  const num1 = parseFloat($span.text())

  cy.get('button')
    .click()
    .then(() => {
      // now capture it again
      const num2 = parseFloat($span.text())

      // make sure it's what we expected
      expect(num2).to.eq(num1 + 1)
    })
})

    - Aliases
    1- Sharing Context
        > To alias something you'd like to share use the .as() command

beforeEach(() => {
  // alias the $btn.text() as 'text'
  cy.get('button').invoke('text').as('text')
})

it('has access to text', function () {
  this.text // is now available
})
        > aliases are available as this.*
        > Additionally these aliases and properties are automatically cleaned up after each test

describe('parent', () => {
  beforeEach(() => {
    cy.wrap('one').as('a')
  })

  context('child', () => {
    beforeEach(() => {
      cy.wrap('two').as('b')
    })

    describe('grandchild', () => {
      beforeEach(() => {
        cy.wrap('three').as('c')
      })

      it('can access all aliases as properties', function () {
        expect(this.a).to.eq('one') // true
        expect(this.b).to.eq('two') // true
        expect(this.c).to.eq('three') // true
      })
    })
  })
})

    Accessing Fixtures
        > Often times you may load a fixture in a beforeEach hook but want to utilize the values in your tests

beforeEach(() => {
  // alias the users fixtures
  cy.fixture('users.json').as('users')
})

it('utilize users in some way', function () {
  // access the users property
  const user = this.users[0]

  // make sure the header contains the first
  // user's name
  cy.get('header').should('contain', user.name)
})

        > Do not forget that Cypress commands are async!
        > You cannot use a this.* reference until the .as() command runs.

it('is not using aliases correctly', function () {
  cy.fixture('users.json').as('users')

  // nope this won't work
  //
  // this.users is not defined
  // because the 'as' command has only
  // been enqueued - it has not run yet
  const user = this.users[0]
})

        > If you want to access what a command yields you have to do it in a closure using a .then()

// yup all good
cy.fixture('users.json').then((users) => {
  // now we can avoid the alias altogether
  // and use a callback function
  const user = users[0]

  // passes
  cy.get('header').should('contain', user.name)
})

        > Accessing aliases as properties with this.* will not work if you use arrow functions for your tests or hooks
        > Instead of using the this.* syntax, the cy.get() command is capable of accessing aliases with a special syntax using the @ character

beforeEach(() => {
  // alias the users fixtures
  cy.fixture('users.json').as('users')
})

it('utilize users in some way', function () {
  // use the special '@' syntax to access aliases
  // which avoids the use of 'this'
  cy.get('@users').then((users) => {
    // access the users argument
    const user = users[0]

    // make sure the header contains the first
    // user's name
    cy.get('header').should('contain', user.name)
  })
})

        > When using this.users, it is stored on the context when it is first evaluated. But when using cy.get('@users'), any queries are re-evaluated every time the alias is accessed

const favorites = { color: 'blue' }

cy.wrap(favorites).its('color').as('favoriteColor')

cy.then(function () {
  favorites.color = 'red'
})

cy.get('@favoriteColor').then(function (aliasValue) {
  expect(aliasColor).to.eql('red')

  expect(this.color).to.eql('blue')
})

        > In the second .then() block, cy.get('@favoriteColor') runs cy.wrap(favorites).its('color') fresh each time, but this.color was set when the alias was first stored, back when our favorite color was blue.

    2- Elements
        > After you alias DOM elements, you can then later access them for reuse

// alias all of the tr's found in the table as 'rows'
cy.get('table').find('tr').as('rows')

        > To reference these same "rows" later, you can use the cy.get() command

// Cypress returns the reference to the <tr>'s
// which allows us to continue to chain commands
// finding the 1st row.
cy.get('@rows').first().click()

    3- Intercepts
    Aliasing your intercepted routes enables you to
        > ensure your application makes the intended requests
        > wait for your server to send the response
        > access the actual request object for assertions

cy.intercept('POST', '/users', { id: 123 }).as('postUser')

cy.get('form').submit()

cy.wait('@postUser').then(({ request }) => {
  expect(request.body).to.have.property('name', 'Brian')
})

cy.contains('Successfully created user: Brian')

    4- Requests

cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

// other test code here

cy.get('@comments').should((response) => {
  if (response.status === 200) {
      expect(response).to.have.property('duration')
    } else {
      // whatever you want to check here
    }
  })
})

    5- Aliases are reset before each test
        > all aliases are reset before each test. A common user mistake is to create aliases using the before hook. Such aliases work in the first test only!
        > The solution is to create the aliases before each test using the beforeEach hook

beforeEach(() => {
  // we will create a new alias before each test
  cy.wrap('some value').as('exampleValue')
})

it('works in the first test', () => {
  cy.get('@exampleValue').should('equal', 'some value')
})

it('works in the second test', () => {
  cy.get('@exampleValue').should('equal', 'some value')
})

