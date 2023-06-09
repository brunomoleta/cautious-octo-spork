# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). 

Frontend Mentor helps you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

- Build a user card using Javascript to create tags and embedded texts. At first, it's given a base HTML to work on. I put all this data on arrays to work exclusively on Javascript.

### Screenshot

![](./images/Screenshot_1.jpg)


### Links

- Solution URL: [https://github.com/brunomoleta/cautious-octo-spork]
- Live Site URL: [https://cautious-octo-spork.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

Since I built the data from how the arrays are displayed, it was hard to figure out how to organize them.
Here's the snippet from the bottom part of the card:

The starting point received for developing was:
```html
<body>
  Victor Crest
  26
  London

  80K
  Followers

  803K
  Likes

  1.4K
  Photos
  
</body>
```

The given data translated to JS:
```js
const cardBottomSec = document.querySelector(
    `.${insideMainClassNames.at(-1)}`
  );

  const insideBottomSection = ["h2", "ul"];
  const insideBottomSectionClasses = [
    `${insideMainClassNames[0]}`,
    "user-info-list",
  ];
  const insideCardBttomLi = ["p", "span"];
  const liClass = "user-info-li-item";
  const spanClasses = ["bold-info", "aux-text"];
  const bottomInfo = [
    ["80K", "Followers"],
    ["803K", "Likes"],
    ["1.4K", "Photos"],
  ];

  for (let i = 0; i < insideBottomSection.length; i++) {
    const element = document.createElement(`${insideBottomSection[i]}`);
    element.classList.add(`${insideBottomSectionClasses[i]}`);
    cardBottomSec.appendChild(element);
  }

  const profileStats = document.querySelector(".card-bottom>h2");
  profileStats.innerText = "Profile Statistics";

  for (let i = 0; i < bottomInfo.length; i++) {
    const unList = document.querySelector(`.${insideBottomSectionClasses[1]}`);
    const li = document.createElement(`li`);
    li.classList.add(`${liClass}`);
    for (let j = 0; j < bottomInfo[i].length; j++) {
      const liItem = document.createElement(`${insideCardBttomLi[j]}`);
      li.appendChild(liItem);
      liItem.innerText = `${bottomInfo[i][j]}`;
      liItem.classList.add(`${spanClasses[j]}`);
    }
    unList.appendChild(li);
  }
  ```
Which results in the following html:
```html
<h2>
<ul>
  <li class="user-info-li-item">
    <p class="bold-info">
      80K
    </p>
    <span class="aux-text">
      Followers
    </span>
  </li> 
  <li class="user-info-li-item">
    <p class="bold-info">
      803K
    </p>
    <span class="aux-text">
      Likes
    </span>
  </li> 
  <li class="user-info-li-item">
    <p class="bold-info">
      1.4K
    </p>
    <span class="aux-text">
      Photos
    </span>
  </li> 
</ul>
```

It was the first time I wrote longer Javascript code, and I'm satisfied that concepts such as:
```js
appendChild
```
```js
createElement
```
```js
querySelector
```
don't feel strange anymore.

### Continued development

Refactor the functions with methods.


### Useful resources

- [Learn Javascript](https://learnjavascript.online/app.html) - Jad Joubran JS course.
- [Learn HTML/CSS](https://learnhtmlcss.online/) - Jad Joubran html/css course.
- [Kenzie Academy](https://kenzie.com.br/) - The place I'm developing coding skills.

## Author

- Website - [Bruno Moleta](https://github.com/brunomoleta)
- Frontend Mentor - [@brunomoleta](https://www.frontendmentor.io/profile/brunomoleta)

