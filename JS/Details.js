import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.getGamesDetails(id);
  }
  async getGamesDetails(id) {
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
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();

    let i = new Ui();
    i.displayDetails(response);
    document.querySelector("#btnClose").addEventListener("click", () => {
      document.querySelector(".gamesDetails").classList.add("d-none");
      document.querySelector(".games").classList.remove("d-none");
    });
    loading.classList.add("d-none");
  }
}
