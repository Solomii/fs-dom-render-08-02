"use strict";

const cardsContainer = document.getElementById("cardsContainer");

const cardsHTML = actors
    .filter((actor) => actor.name && actor.photo && actor.birthdate)
    .map((actor) => createActorCard(actor));

cardsContainer.append(...cardsHTML);
