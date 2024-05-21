$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });

  const tooltipTrigger = document.querySelectorAll("[data-bs-toggle='tooltip']");
  const tooltipContent = [...tooltipTrigger].map(tooltipEl => new bootstrap.Tooltip(tooltipEl));

  const pythonCard = [ 
    {img: 'img/pythonimg.jpg',price: '41,900', text:'Automate The Boring Stuff with Python Programming ',ctext:'Ai Sweigart'},
    {img: 'img/womanpython.jpg',price: '41,900' , text:'100 Days of coding:The <br> complete python pro..',ctext:'Dr Anjela Yu'},
    {img: 'img/torch.jpg',price: '41,900', text:'The complete Python Bootcamp From Zero to He.',ctext:' Jose Portilla,Pierian training'},
    {img: 'img/rev.jpg',price: '41,900' , text:'Python Programming-From Basics to Advanced Level...',ctext:'Dipesh sharma'}

    ];
    let caro = document.querySelector('.owl-carousel');
    pythonCard.forEach( element =>{
        caro.innerHTML +=`
        <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>`
    });

    let ex = document.querySelector('#excel');
    pythonCard.forEach(element =>{
        ex.innerHTML += `
         <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
        `
    });

    let we = document.querySelector('#web');
    pythonCard.forEach(element =>{
        we.innerHTML += `
         <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
        `
    });

    let jav = document.querySelector('#jav');
    pythonCard.forEach(element =>{
        jav.innerHTML += `
         <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
        `
    });

    let dat = document.querySelector('#data');
    pythonCard.forEach(element =>{
        dat.innerHTML += `
         <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
        `
    });

    let am = document.querySelector('#ama');
    pythonCard.forEach(element =>{
        am.innerHTML += `
         <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">AI Sweigart</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
        `
    });

    let dra = document.querySelector('#draw');
    pythonCard.forEach(element =>{
        dra.innerHTML += `
         <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6>${element.text}</h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
        `
    })
    const meme= document.querySelector('.meme');
    pythonCard.forEach(element =>{
       meme.innerHTML +=`
       <div class="item">
        <div class="card" style="width: 18rem" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-toggle="tooltip" title="The Complete Python Bootcamp From Zero to Hero in Python">
          <img src="${element.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6> Automate The Boring Stuff with <br>Python Programming </h6>
            <p class="card-text">
            <p class="card-text">${element.ctext}</p>
            <span class="stars">
              <p>4.6</p>
              <div class="st">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
              </div>
              <p class="noms">(112.704)</p>
            </span>
            <p class="price">${element.price}</p>
            </p>
          </div>
        </div>
      </div>
       `

    })