"use strict";

// *** Select elements ***
const btn = document.querySelector(".search__btn");
const input = document.querySelector(".search__input");
const search = document.querySelector(".search");

// *** Functionality ***
// *** click event on the button ( .btn ) ***

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});
