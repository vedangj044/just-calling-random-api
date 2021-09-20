# Just Calling Random APIs
![CI/CD](https://github.com/vedangj044/just-calling-random-api/workflows/Build%20and%20Deploy/badge.svg)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)
[![Gitter](https://badges.gitter.im/JustCallingRandomAPI/community.svg)](https://gitter.im/JustCallingRandomAPI/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This is a react project to help you get started on your open-source journey. All you need to do is to call any [public API](https://github.com/public-apis/public-apis) and show us its response in your react component. It could be quotes, cat images, bitcoin - anything. Design it the way you want! Complete your Hacktoberfest challenge this year.

## Table of content
- [Hacktoberfest](#hacktoberfest)
- [Learning objective](#learning-objective)
- [Prerequisite](#prerequisite)
    - [Git and Github](#git--github)
    - [What's an API?](#whats-an-api)
    - [React](#react)
    - [Tailwind](#tailwind)
    - [Local setup](#setup-local)
- [How to contribute?](#how-to-contribute)
- [Contributors](#setup-local)

## Hacktoberfest

![Hacktoberfest](https://hacktoberfest.digitalocean.com/img/logo-hacktoberfest-full.7d5e2645.svg)

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is a global challenge organized by DigitalOcean. It encourages participation in giving back to the open-source community by completing pull requests and participating in events. You can sign up anytime between 1 and October 31. Pull requests can be submitted to this repo or any opted-in GitHub or GitLab repo. To get a T-shirt :tshirt:, you must make 4 approved pull requests (PRs). :tada:

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://hacktoberfest.digitalocean.com/resources/participation)

## Learning Objective
After contributing you would find yourself familiar and more confident with 

:heavy_check_mark: Basics of GitHub workflow :metal: 

:heavy_check_mark: Basics of React and Tailwind :yellow_heart:

:heavy_check_mark: How to read API documentation and consume APIs :computer:

## Prerequisite

### Git & Github
Here, we have mentioned the instructions to set up git. If you don't already know what Git is, check out this blog by [Free Code Camp](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/).

- Login / Sign-up to [Github](https://github.com/login).
- Download and install [Git](https://git-scm.com/downloads).
- Configure git
    - Launch terminal or command promt.
    - Run the commands.
        - `git config --global user.name "Your name"`
        - `git config --global user.email "Your email address"` 
 - Optionally, you can [setup ssh keys](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to authenticate easily. 

### What's an API?
API stands for Application Programming Interface. Imagine what happens at a restaurant :fork_and_knife: - You order your favorite food :pizza: ( Request ), the waiter serves your order when it's ready (API Response). You are not aware of how the food is prepared. Similarly, you request data from an API, and the API returns it to you. You need not be aware of what's happening behind the scenes. Now, anybody who knows where the restaurant is, and how to communicate with the waiter can place an order. Similarly, anyone can consume an API even computer programs :robot:. 

Whenever you visit [just-callling-random-api](https://vedangj044.github.io/just-calling-random-api/) you would see a new quote, I could have manually created a list of 1000 quotes and picked up anyone at random, instead, I can just consume [`Quotable`](https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373/5) API offered by FreeCodeCamp which saves me all the trouble of manually creating the list and offers way more quotes that I could I added. 

There are amazing people out there, who have created a large number of awesome APIs - random Cat pictures :cat2: , random dogs pictures :dog:, breaking bad quotes, harry potter quotes, bitcoin prices :moneybag: , NASA space images, etc. You can find all of these and many more at [Public APIs repository](https://github.com/public-apis/public-apis).

For this project, you need to pick up any API you like from this list, read about how you can use it, try calling it and understanding its response, and then consuming it your react components. We are extremely excited to see what API you choose and what you make with it! :tada:

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)


### React 
React is a JavaScript library created for building fast and interactive user interfaces for web applications. It allows developers to create web applications that can change data, without reloading the page. Above all it's simple and easy to learn. Here's a quick [![Youtube Video](https://img.shields.io/badge/-Youtube-red?style=plastic&logo=youtube)](https://www.youtube.com/watch?v=Tn6-PIqc4UM) by Fireship.

We are also going to use React Hooks - These allow developers to use state inside a functional component. More about it - [![Youtube Video](https://img.shields.io/badge/-Youtube-red?style=plastic&logo=youtube)](https://www.youtube.com/watch?v=TNhaISOUy6Q)

To start with react you need to install NPM. If you don't have it installed on your system, then you need to head to the [official Node.js website](https://nodejs.org/en/) to download and install Node, which also includes NPM (Node Package Manager). Select the "Recommended For Most Users" button and download the current version for your operating system.

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://www.w3schools.com/REACT/react_getstarted.asp)


### Tailwind
Tailwind is a utility-first CSS framework. For this project, we don't need to know about it in detail, but it would help you style your contribution if you understand the basics. To style a component, all you need to do is specify a tailwind class in its class name. Tailwind classes are very intuitive and you can find all of them in this [cheat sheet](https://nerdcave.com/tailwind-cheat-sheet). Tailwind is pretty awesome and you can know more about it [here](https://tailwindcss.com/docs).

### Local setup
- Go to the top of this page and click on "Fork". This would make a copy of this codebase.
- Go to your fork.
- Clone the repository.
- Run `npm run install`
- Run `npm run start`

## How to contribute?
- First check that the main branch should be even with the upstream repo. If it is lagging click the "Fetch and sync" function and go to the project folder on your computer and run `git pull` to update the changes in your local repo.
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
- Once you are satisfied with the changes, you are ready to contribute.
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

Certain things may not work as expected, one of them is Merge Conflicts. 

### Contributors

Waiting for you! 