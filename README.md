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

