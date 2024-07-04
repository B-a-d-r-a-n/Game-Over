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
