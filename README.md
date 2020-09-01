# secureWorksTestAna

## Part I
####General Information:
1. The part I was created using Ruby for the app under test and rspec for the Unit tests.
2. The file containing words is called words.yml and it's stored in the config folder.

###Assumptions:
The app code handles any sort of information regardless of the type being passed, 
numbers and phrases could be the longest "words"

####Prerequisites:
- Ruby (version ruby 2.4.2p198 was used)
- Rspec (RSpec 3.7 was used)
  - rspec-core 3.7.1
  - rspec-expectations 3.7.0
  - rspec-mocks 3.7.0
  - rspec-rails 3.7.2
  - rspec-support 3.7.1

####Instructions to execute:
1. Clone the repository, go to the folder rubytest and open a terminal.
2. To run the app code, execute:
```ruby ruby src/main.rb```
3. To run the unit tests, execute:
```rspec spec/words_processor_spec.rb```

## Part II
####General Information:
1. The part II was created using Cypress.

####Prerequisites:
- NodeJS (version v12.16.1 was used)
- NPM (version 6.13.4 was used)
- Cypress (version 4 was used)

####Instructions to execute:
1. Clone the repository and open a terminal.
2. Open the cypress.env.json file and update the username and password API information.
2. Go to the project folder and to run the tests, execute:
```npm test```

