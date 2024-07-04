import { Details } from "./Details.js";
import { Ui } from "./ui.js";

export class Games {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".nav-link.active").classList.remove("active");

        this.getGames(e.target.dataset.category);
        e.target.classList.add("active");
      });
    });
  }
  async getGames(cat) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6f68f3007fmshfc0d054ac78b4d1p18b922jsne414117514e8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await api.json();

    let i = new Ui();
    i.displayGames(response);
    this.expandDetails();
    loading.classList.add("d-none");
  }

  expandDetails() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelector(".gamesDetails").classList.remove("d-none");
        document.querySelector(".games").classList.add("d-none");

        let id = card.dataset.id;
        const details = new Details(id);
      });
    });
  }
}
