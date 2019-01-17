---
layout: post
title: Writing Sensible Tests for Happiness
date: '2013-08-27T00:11:00+10:00'
tags:
- Ruby
- testing
- tests
- integration
- tdd
- rspec
- mocha
- turnip
- api taster
redirect_from:
- /post/59395419899/writing-sensible-tests-for-happiness
---
Writing good, sensible tests is hard. As a Rubyist, I feel lucky to be part of a community that embraces tests. Though at the same time, I have come across too many projects that suffered from not having sensible tests.

## What are Sensible Tests?

There often isn’t a silver bullet when it comes to software development. Technical stuff aside, many things contribute to the solution to a given problem - the team, the project and the business to name a few. This article does not attempt to present any insights into _the_ best practices for testing, rather it collects a few tips I believe would benefit those who are not yet comfortable with writing tests.

To me, sensible tests often have the following characteristics:


- it does not replicate implementation details;
- it does not provide false sense of security;
- it runs reasonably quickly;
- it does not slow down the development significantly;
- it guides the programmer towards a better architecture;
- and, it does not make you _sigh_ every time you want to modify your tests.

## Art and Science, TDD or Not TDD

Just like writing production code, writing tests is also a combined form of art and science. It takes not only _experience_, but also _intuition_ to write sensible tests. You have to remember that not all projects and programmers are equal - **take what you get, practise, and reflect on your findings**.

Many times I had come across seasoned programmers practising TDD, only to find themselves cornered into a bad design that ultimately had to be thrown away. TDD does not save you from writing bad code, this article is not about TDD, it’s about testing in general.

I am most comfortable with using RSpec, FactoryGirl, Capybara and Turnip, so I’m going to use these tools in the code. The principles however apply to any testing framework.

## Test as Little as Possible to Reach a Given Level of Confidence

Kent Beck, the inventor (or more correctly, ‘rediscoverer’) of TDD [once said](http://stackoverflow.com/questions/153234/how-deep-are-your-unit-tests/153565#153565):

> I get paid for code that works, not for tests, so my philosophy is to test as little as possible to reach a given level of confidence.

I used to prefer testing almost everything, but over the recent years I find myself increasingly **look for key areas of the system that need the test coverage the most**. Typically, our systems would have:

- unit and functional tests for model behaviours
- unit and functional tests for services
- integration tests for controller actions
- request tests for API endpoints
- isolated JavaScript tests
- high level integration/acceptance tests in Gherkin

Model and service level tests are arguably the most important ones so we make sure we have really good test coverage for those. For controller tests we rely heavily on reusable production _and_ test code for maintainability and sanity. For API endpoints we mostly test presented data structure - as business logic and data integrity should have been covered in model, service and controller layers. Isolated JavaScript tests take care of both presentational business logic and tricky UI tasks. And finally, acceptance tests handle happy-path user interactions.

## Do Not Test Framework and Library Code

Writing application-specific business logic is difficult enough, you really should not test functionalities provided by the framework or libraries. Below is an example of such bad tests:

    describe ApprovalStakeholder do
      it { should belong_to(:approval) }
      it { should_not validate_presence_of(:approval) }
    end

Similarly to how you would add useful comments, i.e. describe _why_ instead of _what_, these tests should be replaced by tests that cover actual functionalities, for instance the reason why an `ApprovalStakeholder` doesn’t need an `Approval` to be presence should be demonstrated in the tests:

    shared_examples_for "non-approval specific stakeholder" do
      its(:action_that_does_not_care_about_approval) { should be_true }
    end

    describe ApprovalStakeholder do
      let(:approval) { create(:approval) }
      let(:user) { create(:user) }
      let(:role) { create(:role) }

      subject do
        build(:approval_stakeholder,
          :user_id => user.id,
          :role_id => role.id
        )
      end

      context "with an approval" do
        before { subject.approval = approval }

        it_behaves_like "non-approval specific stakeholder"

        its(:action_that_does_care_about_approval) { should be_true }
      end

      context "without an approval" do
        it_behaves_like "non-approval specific stakeholder"

        its(:action_that_does_care_about_approval) { should be_false }
      end
    end

## Ensure What You are Testing Makes Sense

The test case below showcases the original developer’s lack of attention and awareness on designing a functional and secure system. It actually tests the reference keys for the `ApprovalStakeholder` object are allowed to be mass assignable, which is a recipe for disaster.

    describe ApprovalStakeholder do
      it { should allow_mass_assignment_of(:user_id) }
      it { should allow_mass_assignment_of(:role_id) }
    end

## De-Duplicate Test Cases

Looking at the example below, the first thing you’d notice is the amount of duplication.

    describe ApprovalStakeholder do
      it "#traveller" do
        stakeholder = create(:approval_stakeholder,
          :approval => approval,
          :user_id => traveller.id
        )
        stakeholder.stub(:user).and_return(traveller)
        approval.stub(:stakeholders_as).and_return([stakeholder])

        approval.traveller.should == traveller
      end

      it "#authoriser" do
        stakeholder = create(:approval_stakeholder,
          :approval => approval,
          :user_id => authoriser.id
        )
        stakeholder.stub(:user).and_return(authoriser)
        approval.stub(:stakeholders_as).and_return([stakeholder])

        approval.authoriser.should == authoriser
      end
    end

It’s true that tests act as a form of specification therefore should be optimised for clarity, in this case however, we could still maintain the clarity with significantly reduced duplication:

    describe ApprovalStakeholder do
      let(:stakeholder) do
        create(:approval_stakeholder,
          :approval => approval,
          :user_id => user.id
        )
      end

      subject { approval }

      before do
        stakeholder.stub(:user).and_return(user)
        approval.stub(:stakeholders_as).and_return([stakeholder])
      end

      describe "#traveller" do
        let(:user) { traveller }

        its(:traveller) { should == traveller }
      end

      describe "#authoriser" do
        let(:user) { authoriser }

        its(:authoriser) { should == authoriser }
      end
    end

## Do Not Replicate Implementation Details

I am often surprised to see many seasoned developers “enjoy” writing tests that essentially replicate the production code logic without much benefit. See below:

    describe ApprovalStakeholder do
      it "references a user" do
        approval_stakeholder = build :approval_stakeholder, :user_id => 1
        User.should_receive(:find).with(1)
        approval_stakeholder.user
      end

      it "references a role" do
        approval_stakeholder = build :approval_stakeholder, :role_id => 1
        Role.should_receive(:find).with(1)
        approval_stakeholder.role
      end
    end

Rather than creating noisy tests, tests with actual assertions seem much more meaningful and readable:

    describe ApprovalStakeholder do
      subject do
        build(:approval_stakeholder,
          :approval => approval,
          :user_id => user.id,
          :role_id => role.id,
        )
      end

      its(:name) { should == "#{user.first_name} #{user.last_name}" }
      its(:role_name) { should == role.name }
    end

## Reduce the Reliance on Mocks and Stubs

This is a difficult and often-debated subject. In my experience, having too many mocks and stubs even though speeds up the test suite, usually leaves too many holes in your tests and makes the test suite less accurate and effective. Fortunately, by using more service objects (described below), mocking and stubbing become more manageable as you use them mostly on external objects and interfaces.

## Take Apart the System, One Service at a Time

If you’re a Rails developer, you are already familiar with MVC. But just relying on MVC to hold your application architecture is probably not going to be sufficient for an average modern day web application. Many people like [Service-oriented architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture), so do I.

> Services are unassociated, loosely coupled units of functionality that are self-contained.

In my experience, as long as you are disciplined in having services do one and only one thing really well, testing becomes much easier.

For instance, we have a `Bouncer` service that is responsible for safeguarding resources - ensuring read-only attributes don’t get overridden.

    module Services
      class Bouncer
        def self.guard(resource, options = {})
          if options[:existing_resource]
            resource.readonly_attributes.each do |attr_name|
              resource.send("#{attr_name}=", options[:existing_resource].send(attr_name))
            end
          end

          resource
        end
      end
    end

The corresponding tests for this service are both fast and self-contained:

    describe Services::Bouncer do
      class BouncerDude
        include Mos::Entity

        set_readonly_attributes :age, :gender

        attribute :name
        attribute :age
        attribute :gender
      end

      let(:resource) { BouncerDude.new(name: 'Penny', age: 28, gender: 'female') }
      let(:existing_resource) { BouncerDude.new(name: 'Sheldon Cooper', age: 34, gender: 'male') }
      subject { Services::Bouncer.guard(resource, existing_resource: existing_resource) }

      describe "#guard" do
        its(:name) { should == 'Penny' }
        its(:age) { should == 34 }
        its(:gender) { should == 'male' }
      end
    end

## Recognise Common Patterns and Refactor Them into Services

One of the reasons why service-oriented architecture is so popular is because things are broken down into smaller, more manageable and more testable pieces. It is especially helpful for TDD practitioners as it significantly reduces the amount of coupling between your production code and your tests due to having simpler internals per test subject.

Take a look at the below example, which is hard to read, hard to test and error-prone:

    module ApplicationHelper
      def branch_logo_options(branch)
        BranchLogo.where(branch_id: branch.id).map { |logo| [logo.file, logo.id] }
      end

      def branch_options(agency)
        BranchRepository.find(agency_id: agency.id, archived: false).map do |b|
          [b.name, b.id]
        end
      end

      def agency_user_options(agency, filtered_users)
        filtered_user_ids = filtered_users.compact.map(&:id) || []
        AgencyUserRepository.find(agency_id: agency.id, archived: false).select do |u|
          !filtered_user_ids.include?(u.id)
        end.map { |u| [u.full_name, u.id] }
      end

      def current_agency_user_options(filtered_users = [])
        agency_user_options(current_agency, filtered_users)
      end

      def current_agency_trust_bank_account_options
        BankAccountRepository.find(
          agency_id: current_agency.id,
          archived: false,
          account_type: BankAccount::TRUST_ACCOUNT).map do |b|
          [b.account_name, b.id]
        end
      end

      def code_options_for(klass)
        klass.all.map { |cc| ["#{cc.code} - #{cc.name}", cc.id] }.sort
      end
    end

Let’s refactor it into something more manageable, by introducing a service `ShowGirl` for fetching and presenting data collections:

    module CollectionOptionsHelper
      def branch_logo_options(branch)
        Services::ShowGirl.present(branch, from: BranchLogo, show: :file)
      end

      def branch_options
        Services::ShowGirl.present(current_agency, from: BranchRepository)
      end

      def consultant_options(excluded_users = [])
        Services::ShowGirl.present(
          current_agency,
          from: AgencyUserRepository,
          show: :full_name
        ) do |collection|
          collection.reject { |user| user.id.in?(Array.wrap(excluded_users).map(&:id)) }
        end
      end

      def trust_bank_account_options
        Services::ShowGirl.present(
          current_agency,
          from: BankAccountRepository,
          show: :account_name,
          filters: { account_type: BankAccount::TRUST_ACCOUNT },
        )
      end

      def code_options_for(name)
        Services::ShowGirl.present(
          current_agency,
          from: Admin::Configurations::Essential.descendants.find { |d| d.name =~ /::#{name.to_s.classify}/ },
          show: -> (item) { "#{item.code} - #{item.name}" }
        )
      end
    end

Better yet, we can clean it up even further by introducing another service, `BusBoy` for just serving the data, and leaving `ShowGirl` for only presenting the data:

    module CollectionOptionsHelper
      def branch_logo_options(branch)
        Services::ShowGirl.present(
          Services::BusBoy.serve(:branch_logos, branch: branch)
        )
      end

      def branch_options
        Services::ShowGirl.present(
          Services::BusBoy.serve(:branches, agency: current_agency)
        )
      end

      def consultant_options(excluded_users = [])
        Services::ShowGirl.present(
          Services::BusBoy.serve(:consultants, agency: current_agency),
          show: :full_name
        ) do |collection|
          collection.reject { |user| user.id.in?(Array.wrap(excluded_users).map(&:id)) }
        end
      end

      def trust_bank_account_options(account_type)
        Services::ShowGirl.present(
          Services::BusBoy.serve(:bank_accounts,
            { agency: current_agency, BankAccount::TRUST_ACCOUNT }
          ),
          show: :account_name
        )
      end

      def code_options_for(name, options = {})
        Services::ShowGirl.present(
          Services::BusBoy.serve(name, agency: current_agency), options
        )
      end
    end

## Basic Controller CRUD Actions

In one of our projects we have lots and lots of forms. Consequently we have lots and lots of CRUD actions. In order to keep our sanity as well as to make basic CRUD controllers maintainable, we have a custom DSL to make CRUD actions portable and testable:

    module Profiles
      class TravellersController < BaseController
        authorize_resource class: Traveller

        datamappify_resources entity: Traveller,
                              repository: TravellerRepository,
                              filter_by: :agency_id,
                              filter_value: -> { current_user.agency_id }
      end
    end

Most of our controller tests look like this:

    require 'spec_helper'

    describe Profiles::AccountsController do
      let(:existing_resources) { [] }
      let(:create_resource) { Mos::Data.create_account }
      let(:create_resources) { Mos::Data.create_accounts(2) }
      let(:a_resource) { assigns(:resource) }
      let(:invalid_param) { { name: '' } }
      let(:params_key) { :account }
      let(:redirect_path) { profiles_accounts_path }

      it_behaves_like 'datamappify resources controller'
      it_behaves_like 'searchable resources controller', :name,
                                                         :profile_id,
                                                         :branch_id,
                                                         :activated

      describe "permission" do
        context 'as a manager' do
          before do
            sign_in_as :manager
          end

          it_behaves_like 'with write access'
          it_behaves_like 'with read access'
          it_behaves_like 'with index access'
        end

        context 'as a consultant' do
          before do
            sign_in_as :consultant
          end

          it_behaves_like 'without write access'
          it_behaves_like 'with read access'
          it_behaves_like 'with index access'
        end
      end
    end

## API Endpoint Tests

One of our projects at work is an API service that is essential to our platform. Naturally, we not only need to test the models, services and controllers, we also need to ensure the API endpoints do what they are supposed to do - mostly exposing the correct data structure.

During the early stage of the development, I had come up with [ApiTaster](https://github.com/fredwu/api_taster) - a super useful gem for visually testing our Rails application’s APIs. Later on, as we continued to grow our API endpoints, we started utilising ApiTaster for our automated test suite too.

In essence, we have one API spec file responsible for describing which endpoints are tested and missed according to the information given by ApiTaster:

    describe "API" do
      load 'db/seeds.rb'
      load 'spec/api_endpoints.rb'

      ApiTaster::Route.map_routes

      ApiTaster::Route.defined_definitions.each do |route|
        it "api endpoint #{route[:verb]} #{route[:path]}" do
          params = ApiTaster::Route.params_for(route).first
          expectation = ApiTaster::Route.metadata_for(route)[:expectation]
          setup = ApiTaster::Route.metadata_for(route)[:setup]
          verb = route[:verb].downcase
          path = parse_path_with_url_params(route[:path], params[:url_params])

          setup.call if setup

          send verb, path, params[:post_params]

          response.body.should match_json_expression(expectation)
        end
      end

      # warn about undefined definitions
      ApiTaster::Route.missing_definitions.each do |route|
        pending "api endpoint #{route[:verb]} #{route[:path]}"
      end
    end

Then, we have a bunch of endpoint test files to do the actual testing, like this:

    resource_response = ResponseHash[
      :response => {
        :id => Integer,
        :name => String,
        :token => String
      }
    ]

    get '/:version/company', {}, {
      :expectation => resource_response
    }

    post '/:version/companies', {
      :model => FactoryGirl.attributes_for(:company)
    }, {
      :expectation => resource_response
    }

    put '/:version/companies/:id', {
      :id => 1,
      :model => { :name => 'New Company' }
    }, {
      :expectation => resource_response.with(:name => 'New Company')
    }

    delete '/:version/companies/:id', {
      :id => 1
    }, {
      :expectation => resource_response
    }

Notice that for API endpoint tests we don’t test the business logic or data integrity - these should be tested in models, services and controllers. What we do test are correct endpoints are exposed, correct parameters are accepted and correct data structures are returned.

## Isolated JavaScript Tests

Many developers prefer to rely on their integration test suite to do JavaScript / UI testing. This approach is fine until you start making lots of front-end changes and constantly need to pinpoint the relevant feature spec.

Having an isolated JavaScript test suite (which should be run as part of your continuous integration process) is extremely beneficial and often saves debugging time.

I like [Mocha](https://github.com/visionmedia/mocha) so we use [Konacha](https://github.com/jfirebaugh/konacha) in our Rails app. Though Mocha with [Chai](http://chaijs.com/) is really not that different to [Jasmine](https://github.com/pivotal/jasmine).

Custom JavaScript behaviour is obviously a good candidate for isolated testing:

    #= require spec_helper

    describe "form toggle", ->
      beforeEach ->
        $("body").append(JST["templates/form/toggle"])

      it "hides the collapsible field by default", ->
        $(".control-group.branch_deactivation_date").hasClass('in').should.be.false

      it "does not override if there is already a value", ->
        value = $("input#agency_deactivation_date").val()
        $("input#agency_activated").click()
        $("input#agency_deactivation_date").val().should.equal(value)

Sometimes it’s also useful to ensure library code is initiated and triggered correctly, if you have other custom JS interact with it:

    #= require spec_helper
    #= require bootstrap-datepicker

    describe "form dates", ->
      beforeEach ->
        @dateFormat = 'DD/MM/YYYY'
        $("body").append(JST["templates/form/dates"](dateFormat: @dateFormat))

      it "has a placeholder", ->
        $("input").attr("placeholder").should.equal(@dateFormat)

      it "defaults to today's date", ->
        $("input#empty").focus()
        $("input#empty").focus()
        $("input#empty").val().should.equal(moment().format(@dateFormat))

      it "does not override if there is already a value", ->
        value = $("input#filled").val()
        $("input#filled").focus()
        $("input#filled").val().should.equal(value)

## “Real” UI Tests

Isolated JavaScript tests are super fast and useful. However, there are times when having pure JavaScript tests simply isn’t enough, due to the complicated nature of DOM interaction and template rendering.

A while ago our calendar widget was broken due to a production and UAT environment issue that was not picked up by our JavaScript test suite. Since then we started adding dedicated UI tests in our acceptance test suite (we use [Turnip](https://github.com/jnicklas/turnip)):

    @ui
    Feature: UI
      Background:
        Given I am signed in
          And I go to agency consultants page
          And I click on "Add New Consultant"

      Scenario: Calendar
         When I click "#agency_user_start_date"
          And I click ".day.active" within ".datepicker"
         Then I should see today as part of the date field

## Effective Acceptance Tests

Writing acceptance tests - also known to many Rubyists as “[Cucumber](https://github.com/cucumber/cucumber) tests”, is a double-edged sword - it’s extremely useful, but very few developers can write good, maintainable [Gherkin](https://github.com/cucumber/gherkin)-style acceptance tests.

Here’s an example of a badly written feature spec with too much implementation details and noise:

    Feature: Session
      Background:
        Given I visit "/"
          And there is a user "admin" "password"

      Scenario: Sign in with valid credentials
         When I fill in "Username" with "admin"
          And I fill in "Password" with "password"
          And I click "Sign In"
         Then I should be on "/dashboard"

      Scenario: Sign in with invalid credentials
         When I fill in "Username" with "admin"
          And I fill in "Password" with "invalid_password"
          And I click "Sign In"
         Then I should not be on "/dashboard"

      Scenario: Sign out
         When I fill in "Username" with "admin"
          And I fill in "Password" with "password"
          And I click "Sign In"
          And I click "Sign Out"
         Then I should be on "/sign_in"

A much cleaner version with only high level, descriptive steps:

    Feature: Session
      Background:
        Given I am on the homepage
          And there is a user "admin" with password "password"

      Scenario: Sign in with valid credentials
         When I sign in as "admin" with password "password"
         Then I should be signed in

      Scenario: Sign in with invalid credentials
         When I sign in as "admin" with password "invalid_password"
         Then I should not be signed in

      Scenario: Sign out
        Given I am signed in as "admin" with password "password"
         When I sign out
         Then I should be signed out

## Final Thoughts

Writing good, sensible tests is hard. These examples and tips are by no means the silver bullet, and you might actually find some of them counter-intuitive in your particular situation. So again, take what you get, practise, and reflect on your findings. **For Happiness!** :)

Do you have any tips to share? If so please feel free to add a few comments!

