# Just Calling Random APIs
![CI/CD](https://github.com/vedangj044/just-calling-random-api/workflows/Build%20and%20Deploy/badge.svg)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)


This is a react project to help you get started on your open-source journey. All you need to do is create a react component, call any public API, and show us its response in your component. It could be quotes, cat images, bitcoin - anything. Design it the way you want! Complete your Hacktoberfest challenge this year.

## Table of content
- [Hacktoberfest](#Hactoberfest)
- Learning objective
- Prerequisite
    - Git and Github
    - What's an API?
    - React 
    - Tailwind
- Installation and set-up
- How to contribute?
    - Making a branch
    - Adding changes
    - Creating a PR
    - Solving Merge Conflicts
- Contributors

## Hacktoberfest

![Hacktoberfest](https://hacktoberfest.digitalocean.com/img/logo-hacktoberfest-full.7d5e2645.svg)

Hacktoberfest is a global challenge organized by DigitalOcean. It encourages participation in giving back to the open-source community by completing pull requests and participating in events. You can sign up anytime between 1 and October 31. Pull requests can be submitted to this repo or any opted-in GitHub or GitLab. To get a T-shirt, you must make 4 approved pull requests (PRs). 

## Learning Objective
The most important section of this Readme. After making a contribution you would find yourself familiar and more confident with 
- The basic GitHub workflow
- Basics of React and Tailwind
- and most importantly - How to read the API documentation and consume APIs.

## Prerequisite

### Git & Github
- Login / Sign-up to Github.
- Install Git from GIT-SCM.
- Configure git
    - Launch a terminal
    - Run the commands 

### What's an API?
API stands for Application Programming Interface. It helps two services communicate with each other over HTTP. 

### React
React is the most popular front-end JavaScript library in the field of web development. React is a JavaScript library created for building fast and interactive user interfaces for web applications. Read W3 school's React tutorial for more info. 
We are also going to use React Hooks - These allow developers to use state inside a functional component. More about it here.

To start with react you need to install node first. It can be downloaded from here. Click on the "Recommended for most users".

### Tailwind
Tailwind is a utility framework. For this project, we don't need to know about it in detail, but it would help you style your contribution if you understand the basics. To style a component, all you need to do is specify a tailwind class in its class name. Tailwind classes are very intuitive and you can find all of them in this cheat sheet. Tailwind is pretty awesome and you can know more about it here.

### Setup Local
- Go to the top of this page and click on "Fork". This would make a copy of this codebase.
- Go to your fork.
- Clone the repository.
- Run `npm run install`
- Run `npm run start`

## How to contribute?
- First check that the main branch should be even with the upstream repo. If it is lagging behind click the "Fetch and sync" function and go to the project folder on your computer and run `git pull` to update the changes in your local repo.
- Create a new branch. `git branch <your_branch_name>
- Checkout to the new branch `git checkout <your_branch_name>
- Go to the Public APIs repository.
- Choose any API you like, it should have HTTPS enabled. Come up with creative usage of this API.
  - Example - Fetching any random cat picture.
  - or Fetching the price of bitcoin.
- When you think, this is something you can submit as a contribution go back to your code.
- Create a new file in the cards folder.
- You can copy the code from other files as most of it would be the same.
- Call your API using the fetch. This completely depends on the API you choose, you need to read the API documentation for an example of how to call this API and what its response would look like.
- Once your API gets called, display its response in your component.
- Components are mandatory to include.
- Now go to app.js and call your component.
- Run the project to verify your code works as expected.
- Once you are satisfied with the changes, you are ready to make a contribution.
- Run `git add .` to stage your changes.
- Run `git commit -m <your commit name>`.
- Now checkout to main branch `git checkout main`.
- Run `git push --all` to push the changes.
- Go to GitHub, and you would see `Make a PR`.
- Click on that.
- Write the PR message according to the template.
- Press create PR.
- Wait for it to get approved and merged.
- You have made your first contribution!!
- To make a further contribution, you need to create new branches. Your next contributions could be improvements to previous work or a new API call.

There are certain things that may not work as expected, one of them is Merge Conflicts. 

### Contributors

Waiting for you! 