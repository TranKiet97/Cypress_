> Cypress Installation
- install Nodejs: nodejs.org
- install VS Code
- install Cypress: cypress.io
    > npm init -y       // khởi tạo project js đơn giản
    > npm i yarn -g     // cài đặt yarn
    > yarn add -D cypress or npm i cypress --save-dev
- create .ignore file (+-)
- clone project
    > yarn
- open cypress
    solution 1: (cài đặt vào project)
    > ./node_modules/.bin/cypress open
    > continue > select E2E testing > continue > Chrome > Start E2E testing in Chrome
    solution 2: (sử dụng thư viện bên ngoài)
    > npx cypress open
- edit script in package.json file
    > "test" : "cypress open"

========================================================================================
> Custom scripts location in configuration file
- mặc định cypress sẽ tìm đến folder cypress/e2e/ để lấy file test
- để custom lại location ta thực hiện như sau
    > vào cypress.io > Docs > References > Configuration > Testing Type-Specific Options > e2e
    > copy specPattern option và giá trị defaults: cypress/e2e/**/*.cy.{js,jsx,ts,tsx}
    > edit tên thư mục chứ file test thay thế thư mục e2e

========================================================================================
> GET method and verify response
- truy cập website: JSONPlaceholder.typicode.com
- tìm hiểu thêm về mocha famework
- truy cập website: chaijs.com

========================================================================================
> Data destructuring, random verification and simple support methods

========================================================================================
> POST request, combine request object from multiple objects

========================================================================================
> PUT request, updating an existing resource

========================================================================================
> How to locate elements
    Sử dụng $ để lấy 1 giá trị đầu và $$ để lấy tất cả giá trị
    Mở inspect > tab console
    1. Theo id: $('#username')
    2. Theo attributes: $('[name="username"]')  or  $('input[name="username"]')
    3. Theo tabname: $('input')         or      $('div>input[name="username"]')
    4. Theo giá trị động: 
        - containing Finding  $$('[class*="FooterSubheading]')
        - starting Finding    $$('[class^="style_"]')
        - ending Finding      $$('[class$="heading"]')

========================================================================================
> Open page, input, click and cy wait method
    Vào file cypress.config.js và thêm:
        specPattern: 'cypress/tests/**.*',
        baseUrl: 'https://the-internet.herokuapp.com'
    Vào file package.json và thêm vào object scripts:
        "dev": "cypress open",
        "test": "cypress run --browser chrome --headed"

========================================================================================
> Handle mutil matched elements, Single test run, hot reload
    Để run 1 file test ta dùng: yarn test --spec .\cypress\tests\filename.js
    Multiple matching using: eq, closure, each

========================================================================================
> DELETE method
    require DELETE method sẽ trả về respond là một body rỗng 

========================================================================================
> REQUEST CHAINING and understand then then method in Cypress

========================================================================================
> ENVIRONMENT variables and custom commands
    Cypress.env() // {host: 'kevin.dev.local', api_server: 'http://localhost:8888/api/v1'}
    Cypress.env('host') // 'kevin.dev.local'
    Cypress.env('api_server') // 'http://localhost:8888/api/v1/'

    In Terminal:    yarn test --spec .\cypress\tests\filename.js --env host=kevin.dev.local,api_server=http://localhost:8888/api/v1

========================================================================================
> Using JSDoc for custom command to resolve the reference

========================================================================================
> Test report
    Cài đặt mochawesome > yarn add -D mochawesome
                        > yarn add -D mochawesome-merge
                        > yarn add -D marge
                        > yarn add -D serve
    Trong file config   > reporter: "mochawesome"
    Thêm vào script (packages.json) > "test:mocha-reporter": "yarn test --reporter mochawesome --reporter-options reportDir=\"results\",overwrite=false,html=false,json=true"
                                    > "merge-report": "mochawesome-merge \"cypress/results/*.json\" > index.json"
                                    > "build-report": "marge index.json"
                                    > "open-report": "yarn merge-report && yarn build-report && serve mochawesome-report"

========================================================================================
> defaultTimeOut scopes
    1- Increase time to retry
        - change the default timeout for all commands

cypress run --config defaultCommandTimeout=10000   

        - pass the individual command's { timeout: ms } option to retry for a different period of time

// we've modified the timeout which affects default + added assertions
cy.get('[data-testid="mobile-nav"]', { timeout: 10000 })
  .should('be.visible')
  .and('contain', 'Home')

    2- Disable retry
        - Overriding the timeout to 0 will essentially disable retrying the query or waiting on an other, since it will spend 0 milliseconds retrying

======================================================================================== 
> Handle checkboxes, Handle Dropdown

========================================================================================
> Page Object Model
    - in cypress folder, create a folder models/pages

========================================================================================
> [within] and [find] method in Cypress
    - within(): cô lập đối tượng cần tìm trong một vùng (component) cụ thể
    - Scopes all subsequent cy commands to within this element. Useful when working within a particular group of elements such as a <form>
    - Syntax:
        .within(callbackFn)
        .within(options, callbackFn)
    - Example:
        <form>
            <input name="email" type="email" />
            <input name="password" type="password" />
            <button type="submit">Login</button>
        </form>

        cy.get('form').within(($form) => {
            // you have access to the found form via
            // the jQuery object $form if you need it

            // cy.get() will only search for elements within form,
            // not within the entire document
            cy.get('input[name="email"]').type('john.doe@email.com')
            cy.get('input[name="password"]').type('password')
            cy.root().submit()
        })
    - Find(): Get the descendent DOM elements of a specific selector

========================================================================================
> Page Object advanced, component base design

========================================================================================
> Get element data and use in another method

========================================================================================
> Get UI data from list of elements and verify against static data

========================================================================================
> Intercept the request and verify UI data against backend data

========================================================================================
> Using before/beforeEach hook to intercept network request

========================================================================================
> cookies and login with login API request