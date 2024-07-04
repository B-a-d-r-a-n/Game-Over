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

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".gamesDetails").classList.add("d-none");
      document.querySelector(".games").classList.remove("d-none");
    });

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
    loading.classList.add("d-none");
  }
}

// async function getGamesDetails(id) {
//   const loading = document.querySelector(".loading");
//   loading.classList.remove("d-none");
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "6f68f3007fmshfc0d054ac78b4d1p18b922jsne414117514e8",
//       "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//     },
//   };

//   const api = await fetch(
//     `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
//     options
//   );
//   const response = await api.json();

//   let i = new Ui();
//   i.displayDetails(response);
//   document.getElementById("btnClose").addEventListener("click", () => {
//     document.querySelector(".gamesDetails").classList.add("d-none");
//     document.querySelector(".games").classList.remove("d-none");
//   });
//   loading.classList.add("d-none");
// }

export class Ui {
  displayGames(x) {
    let box = "";
    for (let i = 0; i < x.length; i++) {
      box += `            <div class="col">
              <div
                data-id="${x[i].id}"
                class="card h-100 bg-transparent border-dark text-white"
                role="button"
              >
                <div class="card-img p-3">
                  <img
                    src="${x[i].thumbnail}"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body pt-0 position-relative">
                  <h5 class="card-title d-flex justify-content-between">
                    <span>${x[i].title}</span>
                    <span class="badge text-bg-primary d-flex justify-content-center align-items-center">Free</span>
                  </h5>
                  <p class="card-text text-center">
                    ${x[i].short_description.slice(0, 100)}
                  </p>
                </div>

                <div
                  class="card-footer row row-cols-2 me-0 ms-0 align-items-center justify-content-between"
                >
                  <span class="col p-2 p-sm-0">
                    <span class="badge text-bg-secondary">${
                      x[i].genre
                    }</span></span
                  >
                  <div
                    class="col p-1 p-m-2 d-flex justify-content-end align-items-center p-sm-0"
                  >
                    <span class="badge text-bg-secondary">${
                      x[i].platform
                    }</span>
                  </div>
                </div>
              </div>
            </div>`;
    }

    document.querySelector(".gameBox").innerHTML = box;
  }
  displayDetails(x) {
    let box;
    box = `           <div class="row gy-2 gameDetails">
          <header class="justify-content-between d-flex align-items-center">
            <h1>Game details</h1>
            <button class="btn-close btn-close-white" id="btnClose"></button>
          </header>
           <div class="col-md-4">
            <img src="${x.thumbnail}" class="w-100" alt="" />
          </div>
          <div class="col-md-8">
            <h3>Title: <span>${x.title}</span></h3>
            <p>Category: <span class="badge text-bg-info">${x.genre}</span></p>
            <p>
              Platform:
              <span class="badge text-bg-info">${x.platform}</span>
            </p>
            <p>Status: <span class="badge text-bg-info">${x.status}</span></p>
            <p class="small">${x.description}</p>
            <a
              class="btn btn-outline-warning"
              target="_blank"
              href="${x.game_url}"
              >Show Game</a
            >
          </div>`;

    document.querySelector(".gameDetails").innerHTML = box;
  }
}
