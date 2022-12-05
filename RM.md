> Cypress Installation
- install Nodejs: nodejs.org
- install VS Code
- install Cypress: cypress.io
    > npm init -y       // khởi tạo project js đơn giản
    > npm i yarn -g     // cài đặt yarn
    > yarn add -D cypress
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