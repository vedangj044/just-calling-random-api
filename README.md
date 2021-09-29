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
    - [Local setup](#local-setup)
- [How to contribute?](#how-to-contribute)
- [Contributors](#contributors)

## Hacktoberfest

![Hacktoberfest](https://i.imgur.com/pZaosIp.png)

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is a global challenge organized by DigitalOcean. It encourages participation in giving back to the open-source community by completing pull requests and participating in events. You can sign up anytime between 1 and October 31. Pull requests can be submitted to this repo or any opted-in GitHub or GitLab repo. To get a T-shirt :tshirt:, you must make 4 approved pull requests (PRs). :tada:

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://hacktoberfest.digitalocean.com/resources/participation)

## Learning Objective
After contributing you would find yourself familiar and more confident with 

:heavy_check_mark: Basics of GitHub workflow :metal: 

:heavy_check_mark: Basics of React and Tailwind :yellow_heart:

:heavy_check_mark: How to read API documentation and consume APIs :computer:

## Prerequisite

### Git & Github
Here, we have mentioned the instructions to set up git. If you don't already know what Git is, check out this blog by [FreeCodeCamp](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/).

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

Whenever you visit [just-callling-random-api](https://vedangj044.github.io/just-calling-random-api/) you would see a new quote, I could have manually created a list of 1000 quotes and picked up anyone at random but instead, I can just consume [`Quotable`](https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373/5) API offered by FreeCodeCamp which saves me all the trouble of manually creating the list and offers way more quotes that I could have added. 

There are amazing people out there, who have created a large number of awesome APIs - random Cat pictures :cat2: , random dogs pictures :dog:, breaking bad quotes, harry potter quotes, bitcoin prices :moneybag: , NASA space images, etc. You can find all of these and many more at [Public APIs repository](https://github.com/public-apis/public-apis).

For this project, you need to pick up any API you like from this list, read about how you can use it, try calling it and understanding its response, and then consuming it your react components. We are extremely excited to see what API you choose and what you make with it! :tada:

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)


### React 
React is a JavaScript library created for building fast and interactive user interfaces for web applications. It allows developers to create web applications that can change data, without reloading the page. Above all, it's simple and easy to learn. Here's a quick [![Youtube Video](https://img.shields.io/badge/-Youtube-red?style=plastic&logo=youtube)](https://www.youtube.com/watch?v=Tn6-PIqc4UM) by Fireship.

We are also going to use React Hooks - These allow developers to use state inside a functional component. More about it - [![Youtube Video](https://img.shields.io/badge/-Youtube-red?style=plastic&logo=youtube)](https://www.youtube.com/watch?v=TNhaISOUy6Q)

To start with react you need to install NPM. If you don't have it installed on your system, then you need to head to the [official Node.js website](https://nodejs.org/en/) to download and install Node, which also includes NPM (Node Package Manager). Select the "Recommended For Most Users" button and download the current version for your operating system.

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://www.w3schools.com/REACT/react_getstarted.asp)


### Tailwind
Tailwind is a utility-first CSS framework. For this project, we don't need to know about it in detail, but it would help you style your contribution if you understand the basics. To style a component, all you need to do is specify a tailwind class in its class name. Tailwind classes are very intuitive and you can find all of them in this [cheat sheet](https://nerdcave.com/tailwind-cheat-sheet). Tailwind is pretty awesome and you can know more about it [here](https://tailwindcss.com/docs).

### Local setup
- Go to the top of this page and click on the "Fork" button. 

![Fork](https://user-images.githubusercontent.com/43697446/133995687-beb33eda-f200-4a85-b110-0625f527835a.jpeg)

This would make a copy of this repository in your account. You will see `<your_username>/just-calling-random-api`.

![My fork](https://user-images.githubusercontent.com/43697446/133995696-26190d23-26fa-4445-8957-91c987cca505.jpeg)

- Clone the repository 
    - Click on the "Code" button and copy the URL.
    - On your local machine, run terminal / cmd and type `git clone <copied_url>`. This creates a new folder named "just-calling-random-api".
    - Go to the folder.
- Run `npm install` to install all dependencies.
- Run `npm start` to start the web app.

## How to contribute?

### Preparation
- Make sure that the main branch of your fork is even with this repo. 

![Even](https://user-images.githubusercontent.com/43697446/133995701-7c93959d-e9ce-4c39-b354-57cba5634af8.jpeg)

- Otherwise, click on the "Fetch and merge" button and go to the project folder on your computer and run `git pull` to update the changes in your local repo.

![Fetch upstream](https://user-images.githubusercontent.com/43697446/133995707-085789bc-2379-4d11-b7f6-efa0dd9b87e5.jpeg)

- Launch a terminal and run the commands
    - `git branch <your_branch_name>` - This creates a new branch. The branch name should be similar to the API name. 
    - `git checkout <your_branch_name>` - Checkout to your branch. This helps you work in parallel but without disturbing files on the main branch.
 
 ### Working on your contribution
- Go to the [Public APIs repository](https://github.com/public-apis/public-apis).
- Browse through the list and pick any.
- The chosen API should have HTTPS enabled.
- Think of some creative use-case of this API, something you would like everybody to see.
- Now, Open VS code or any text editor.
- Create a new file in the `src/cards` folder.
- Create and export a basic function component. An example is given here. The components' name should briefly describe its purpose.
```
import React from "react";
function MyComponent() {
  return <h2>Hi, This is my component.</h2>;
}
```
- Now, go to `app.js`. Import and render the component you just created. Now when you do `npm start` you should see a new component.
- Go through the documentation of your API. It would contain instructions on its usage. Use those instructions to create a fetch request. Take help from randomQuotes component. This step would be different for all of us. Don't worry, API documentation and code in other components would give you enough clues. Consume the API and display its response in your component.
- If your API requires an API Key, follow these [instructions](https://dev.to/thepuskar/how-to-hide-your-api-keys-in-react-4k55). Never add API key in the code. Text us on the Gitter channel and we would add an environment variable for your key.  
- Great, if you have done the above part Congratulations! :tada:
- Use the tailwind [cheatsheet](https://nerdcave.com/tailwind-cheat-sheet) to style your work.
- Include the following in your component after making appropriate changes.
```
<ContributorInfo username= [ Your name ] profilePic= [ Your profile pic URL ] />
<ApiInfo apiUrl= [ URL of API used ] > apiName= [ Name of API used ] />
```
- Run the project to verify your code works as expected.

### Submitting your work
- Open a terminal and run these commands
    - `git add .` - stage your changes.
    - `git commit -m <your commit message>` - commit changes
    - `git checkout main` - checkout back to the main branch
    - `git push --all` - push all changes to Github.
- Go to your fork, you would see a pop-up asking you to make a PR. Click on it.
- Write a small description and complete the checklist. Click on "Make a PR".

Wait for it to get approved and merged. Awesome, you have made your first contribution. To make a further contribution, you need to create new branches. Your next contributions could be improvements to previous work or a new API call. Certain things may not work as expected, or you may have doubts about some steps mentioned above. Need not worry, just hop on to our [gitter channel](https://gitter.im/JustCallingRandomAPI/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) and ask. 

### Contributors

Waiting for you! 