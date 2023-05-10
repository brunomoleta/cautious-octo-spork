const topInfo = ["Victor Crest", "26", "London"];

const cardTags = ["main"];
const cardTagsClasses = ["card", "attribution"];

const insideMainTags = ["section", "hr", "section"];
const insideMainClassNames = ["card-top", "", "card-bottom"];

const insideFooter = ["ul"];

const makeCard = () => {
  // Primeira parte
  // create main
  const body = document.body;

  for (let i = 0; i < cardTags.length; i++) {
    const tag = document.createElement(`${cardTags[i]}`);
    tag.classList.add(`${cardTagsClasses[i]}`);
    body.appendChild(tag);
  }

  const main = document.querySelector("main");

  //   create the two sections and hr
  for (let i = 0; i < insideMainTags.length; i++) {
    const mainTags = document.createElement(`${insideMainTags[i]}`);
    if (insideMainTags[i] !== "hr") {
      mainTags.classList.add(`${insideMainClassNames[i]}`);
    }
    main.appendChild(mainTags);
  }

  //   Card Top

  const insideCardTop = ["img", "div"];
  const insideCardTopClasses = ["user-img", "user-info"];
  const imgAttribute = ["src", "alt"];
  const imgAttributeData = ["./images/image-victor.jpg", "user image"];

  const firstSection = document.querySelector(`.${insideMainClassNames[0]}`);

  for (let i = 0; i < insideCardTop.length; i++) {
    const insideCardTopElement = document.createElement(`${insideCardTop[i]}`);
    insideCardTopElement.classList.add(`${insideCardTopClasses[i]}`);
    if (insideCardTop[i] === "img") {
      for (let i = 0; i < imgAttribute.length; i++) {
        insideCardTopElement.setAttribute(
          `${imgAttribute[i]}`,
          `${imgAttributeData[i]}`
        );
      }
    }
    firstSection.appendChild(insideCardTopElement);
  }

  const insideCardTopUserInfoTag = ["div", "adress"];
  const insideUserInfoClass = ["user-name-age", "user-adress"];

  const userInfo = document.querySelector(".user-info");
  for (let i = 0; i < insideCardTopUserInfoTag.length; i++) {
    const userNameAgeOrAdress = document.createElement(
      `${insideCardTopUserInfoTag[i]}`
    );
    userNameAgeOrAdress.classList.add(`${insideUserInfoClass[i]}`);
    userInfo.appendChild(userNameAgeOrAdress);
  }

  const insideUserTags = [
    ["h1", "p"],
    ["user-name", "user-age"],
  ];

  const nameOrAge = document.querySelector(`.${insideUserInfoClass[0]}`);
  for (let i = 0; i < insideUserTags.length; i++) {
    const insideNameAgeTag = document.createElement(insideUserTags[0][i]);
    insideNameAgeTag.classList.add(insideUserTags[1][i]);
    insideNameAgeTag.innerText = `${topInfo[i]}`;
    nameOrAge.appendChild(insideNameAgeTag);
  }
  const userAdress = document.querySelector(".user-adress");
  userAdress.innerText = topInfo.at(-1);

  // // card Bottom

  const cardBottomSec = document.querySelector(
    `.${insideMainClassNames.at(-1)}`
  );

  const insideCardBttomLi = "span";
  const liClass = "user-info-li-item";
  const spanClasses = ["bold-info", "aux-text"];
  const bottomInfo = [
    ["80K", "Followers"],
    ["803K", "Likes"],
    ["1.4K", "Photos"],
  ];

  const ul = document.createElement("ul");
  ul.classList.add("user-info-list");
  cardBottomSec.appendChild(ul);

  for (let i = 0; i < bottomInfo.length; i++) {
    const li = document.createElement(`li`);
    li.classList.add(`${liClass}`);
    for (let j = 0; j < bottomInfo[i].length; j++) {
      const liSpan = document.createElement(`${insideCardBttomLi}`);
      li.appendChild(liSpan);
      liSpan.innerText = `${bottomInfo[i][j]}`;
      liSpan.classList.add(`${spanClasses[j]}`);
    }
    ul.appendChild(li);
  }

  // // footer
  // const ulFooter = document.querySelector("#footer-list");
  // // const l = "li";
  // const textInFooter = [
  //   [
  //   "Challenge by Frontend Mentor",
  //   ["href", "https://www.frontendmentor.io?ref=challenge"]],
  //   [
  //     "Coded by Bruno Moleta Santos",
  //     ["href", "https://github.com/brunomoleta"],
  //   ],
  // ];

  // for (let i = 0; i < textInFooter.length; i++) {
  //   const li = document.createElement("li");
  //   for (let j=0; j<src.length;j++){
  //     li.innerText = `${textInFooter[0][i]}`;
  //   }
  //   ulFooter.appendChild(li);
  //   // li.setAttribute(`${src[i][j]}`)
  //   // }
  
}
makeCard();
