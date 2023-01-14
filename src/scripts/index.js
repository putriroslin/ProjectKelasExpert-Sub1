import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

const ratting = (rating) => {
  if (rating >= 1 && rating < 2) {
    return "⭐";
  } else if (rating >= 2 && rating < 3) {
    return "⭐⭐";
  } else if (rating >= 3 && rating < 4) {
    return "⭐⭐⭐";
  } else if (rating >= 4 && rating < 5) {
    return "⭐⭐⭐⭐";
  } else if (rating == 5) {
    return "⭐⭐⭐⭐⭐";
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const main = document.querySelector("main");

  hamburger.addEventListener("click", (event) => {
    menu.classList.toggle("open");
    event.stopPropagation();
  });
  main.addEventListener("click", () => {
    menu.classList.remove("open");
  });

  const restoList = document.querySelector(".resto_list");
  data.restaurants.forEach((resto) => {
    restoList.innerHTML += `
	<article class="resto_item">
	<p tabindex="0" class="city">${resto.city}</p>
		<img tabindex="0" alt="gambar ${resto.name}" src="${resto.pictureId}">
		<div class="resto_item_detail" idData=${resto.id}>
			<h3 tabindex="0" class="name">${resto.name}</h3>
			<p tabindex="0" class="rating">
				Rating : ${ratting(resto.rating)} 
				<span>${resto.rating}</span>
			</p>
			<p tabindex="0" class="desc">${resto.description}</p>
			
		</div>
	</article>
	`;
  });
});
