const info = [
  ["Victor Crest", "26", "London"],
  {
    followers: "80K",
    likes: "803K",
    photos: "1.4K",
  },
];

const makeCard = (infoArr) => {
  // create body, main and footer
  const body = document.querySelector("body");

  const main = document.createElement("main");
  main.classList.add("card");

  const footer = document.createElement("footer");
  footer.classList.add("attribution");

  //   create card-bg-inside-card
  const divMain = document.createElement("div");
  divMain.id = "card-bg-inside";
  const divFooter = document.createElement("div");

  body.append(main, footer);
  footer.appendChild(divFooter);
  main.appendChild(divMain);

  //   create the two sections and hr
  const sectionClassNames = ["card-top", "card-bottom"];
  for (let i = 0; i < infoArr.length; i++) {
    const section = document.createElement("section");
    main.appendChild(section);
    section.classList.add(sectionClassNames[i]);
    if (i === 0) {
      const hr = document.createElement("hr");
      main.appendChild(hr);
    }
  }

  //   Card Top

  const insideCardTop = ["img", "div"];
  const firstSection = document.querySelector(`.${sectionClassNames[0]}`);

  const insideCardTopClasses = ["user-img", "user-info"];
  for (let i = 0; i < insideCardTop.length; i++) {
    const insideCardTopElement = document.createElement(`${insideCardTop[i]}`);
    insideCardTopElement.classList.add(`${insideCardTopClasses[i]}`);
    if (insideCardTop[i] === "img") {
      insideCardTopElement.setAttribute("src", "./images/image-victor.jpg");
      insideCardTopElement.setAttribute("alt", "user image");
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
    insideNameAgeTag.innerText = `${info[0][i]}`;
    nameOrAge.appendChild(insideNameAgeTag);
  }
  const userAdress = document.querySelector(".user-adress");
  userAdress.innerText = info[0][info.length];

  const liClassNames = ["bold-info", "aux-text"];
};

makeCard(info);
