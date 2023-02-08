function createActorCard(actor) {
  const actorCardHTML = document.createElement("li");
  actorCardHTML.classList.add("cardWrapper");

  const article = document.createElement("article");
  article.classList.add("card");

  const divWrapper = document.createElement("div");
  divWrapper.classList.add("cardImageWrapper");

  const divInitial = document.createElement("div");
  divInitial.classList.add("initials");
  divInitial.append(actor.name[0]);
  divInitial.style.backgroundColor = stringToColour(actor.name);

  const img = document.createElement("img");
  img.classList.add("cardImage");
  img.setAttribute("src", actor.photo);
  img.setAttribute("alt", actor.name);
  img.setAttribute("hidden", true);
  img.addEventListener("error", handleImageError);
  img.addEventListener("load", handleImageLoad);

  divWrapper.append(divInitial, img);

  const h2 = document.createElement("h2");
  h2.classList.add("cardName", "oneLine");
  h2.append(actor.name);

  const p = document.createElement("p");
  p.classList.add("cardDescription", "oneLine");
  p.append(actor.birthdate);

  article.append(divWrapper, h2, p);
  actorCardHTML.append(article);
  return actorCardHTML;
}