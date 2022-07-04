const objMap = [{
  id: 1,
  name: "toshkent",
  title: "toshkent shahar",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 2,
  name: "xorazm",
  title: "Samarqand shahar",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 3,
  name: "buxoro",
  title: "Buxoro shahar",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 4,
  name: "qoraqolpakston",
  title: "Andijon shahar",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
];

let list = document.querySelector(".list");

let buxoro = document.querySelector(".map-svg .buxoro");
let xorazm = document.querySelector(".map-svg .xorazm");
let qoraqolpakston = document.querySelector(".map-svg .qoraqolpakstan");

buxoro.addEventListener("click", () => showData(buxoro, 3));
xorazm.addEventListener("click", () => showData(xorazm, 2));
qoraqolpakston.addEventListener("click", () => showData(qoraqolpakston, 4));

function showData(smth, num) {
  document.querySelector(".map-svg path").setAttribute("fill", "#d4d3c4")
  smth.setAttribute("fill", "red");
  list.innerHTML = ""
  objMap.forEach((item) => {
    if(item.id == num){
      let elItem = document.createElement("div");
      elItem.className = "hududiy__info-div";
      elItem.innerHTML = `
                <div class="hududiy__info-title">
                  <p class="hududiy__info-t">
                    ${item.title}
                  </p>
                </div>
                <div class="hududiy__info d-flex mb-3">
                  <div class="hududiy__day1 d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.day}
                    </span>
                    <p class="hududiy__info-text">
                      Xafta kunlari
                    </p>
                  </div>
                  <div class="hududiy__day d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.study}
                    </span>
                    <p class="hududiy__info-text">
                      O’quv-mashg’ulot vaqti
                    </p>
                  </div>
                </div>
                <div class="hududiy__info d-flex">
                  <div class="hududiy__day2 d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.teachers}
                    </span>
                    <p class="hududiy__info-text">
                      Murabbiylar
                    </p>
                  </div>
                  <div class="hududiy__day d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.students}
                    </span>
                    <p class="hududiy__info-text">
                      O’quvchilar
                    </p>
                  </div>
                </div>
                <a class="text-deco" href="/boglanish.html">
                  <button class="heaeder__btn1 d-flex align-items-center ms-5">
                    bog’lanish
                    <i class='bx bx-right-arrow-alt header__btn-icon'></i>
                  </button>
                </a>
        `;
  
      list.appendChild(elItem);
    }

  })
}