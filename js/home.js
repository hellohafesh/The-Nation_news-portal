

const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCategory(data.data.news_category);

    }
    catch (error) {
        console.log(error);
    }

}


const displayCategory = (categorys) => {
    const categorysContainer = document.getElementById('category-list');
    categorys.forEach(category => {
        const categorysDiv = document.createElement('div');
        categorysDiv.classList.add('col');
        categorysDiv.innerHTML = `
     <li class="nav-item ">
                                <a onclick="categoryLoad(${category.category_id})"  class=" text-base-color text-decoration-none me-3 fw-bold " aria-current="page"
                                    href="#">${category.category_name}</a>
                            </li>          
    `;
        categorysContainer.appendChild(categorysDiv);
    });

}

const categoryLoad = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`
    try {

        const res = await fetch(url);
        const data = await res.json();
        singleDisplayCategory(data.data);
    }
    catch (error) {
        console.log(error);
    }

}

const singleDisplayCategory = (categorys) => {
    // console.log(categorys);

    const container = document.getElementById('card-section ');
    container.textContent = '';
    categorys.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `

<div   onclick="cardDetails('${category._id}')" class="card mb-3 bg-card-color p-3" style="max-width: 100%;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div class="row g-4  mb-3">
                    <div class="col-md-2">
                        <img src="${category.thumbnail_url}"
                            class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${category.title}</h5>
                            <p class="card-text">${category.details.slice(0, 320)}.....</p>
                           

                            <div class="d-flex  align-items-center justify-content-between">
                                <div class="d-md-flex gap-3 d-xxl-flex  d-xl-flex d-sm-inline">
                                    <img class="rounded-circle img-logo" src="${category.author.img}" alt="">
                                    <div>
                                        <p class="text-base-color fw-bold  ">${category.author.name ? category.author.name : "No Name Found"}</p>
                                         <p class="card-text"><small class="text-muted">${category.author.published_date}</small></p>
                                    </div>
                                </div>
                                <div class= "text-base-color fw-bold  d-flex gap-2">
                               <div> <i class="fa-regular fa-eye"></i></div> <p>${category.total_view ? category.total_view : "No View"} </p></i>
                                </div>
                                <div>
                                <a class="text-base-color fw-bold "> <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        `
        container.appendChild(categoryDiv);

    })

}

const cardDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        cardMoalDetails(data.data[0]);
    }
    catch (error) {
        console.log(error);
    }

}

const cardMoalDetails = card => {
    console.log(card.title);
    const modalTitle = document.getElementById('card-modal-title');
    modalTitle.innerText = card.title;
    const modalDetails = document.getElementById('modal-body');
    modalDetails.innerHTML = `
     <img  src="${card.image_url}" class="card-img-top" alt="..."></div>
     <p>${card.details} </p>
      <div class="d-md-flex gap-3 d-xxl-flex  d-xl-flex d-sm-inline">
                                    <img class="rounded-circle img-logo" src="${card.author.img}" alt="">
                                    <div>
                                        <p class="text-base-color fw-bold  ">${card.author.name}</p>
                                         <p class="card-text"><small class="text-muted">${card.author.published_date ? card.author.published_date : "No Publish Date"}</small></p>
                                    </div>
                                </div>
    `;
}



cardDetails();

loadCategory();
