const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
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
    const res = await fetch(url);
    const data = await res.json();
    singleDisplayCategory(data.data);

}

const singleDisplayCategory = (categorys) => {
    console.log(categorys);

    const phonesContainer = document.getElementById('card-section ');
    phonesContainer.textContent = '';
    categorys.forEach(category => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `

<div class="card mb-3 bg-card-color p-3" style="max-width: 100%;">
                <div class="row g-4  mb-3">
                    <div class="col-md-4">
                        <img src="${category.image_url}"
                            class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${category.title}</h5>
                            <p class="card-text">${category.details}</p>
                           

                            <div class="d-flex  align-items-center justify-content-between">
                                <div class="d-md-flex gap-3 d-xxl-flex  d-xl-flex d-sm-inline">
                                    <img class="rounded-circle img-logo" src="${category.author.img}" alt="">
                                    <div>
                                        <p>${category.author.name ? category.author.name : "No Name Found"}</p>
                                         <p class="card-text"><small class="text-muted">${category.author.published_date}</small></p>
                                    </div>
                                </div>
                                <div>aasadda</div>
                                <div>safrerf</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        `
        phonesContainer.appendChild(phoneDiv);
    })


}


// const categorysContainer = document.getElementById('single-category-list');
// categorys.forEach(category => {
//     console.log(category);
//     const categorysDiv = document.createElement('div');
//     categorysDiv.classList.add('col');
//     categorysDiv.innerHTML = `
//  <li class="nav-item ">
//                             <a onclick="categoryLoad(${categorys.category_id})"  class=" text-base-color text-decoration-none me-3 fw-bold " aria-current="page"
//                                 href="#">${category.category_name}</a>
//                         </li>          
// `;
//     categorysContainer.appendChild(categorysDiv);
// });






// const singleDisplayCategory = singleCategorys => {
// console.log(singleCategorys);

// const userContainer = document.getElementById('single-category-list');
// for (const key in singleCategorys) {
//     let value = (singleCategorys[key]);
//     const pair = Object.entries(singleCategorys);
//     // console.log(pair);
// for (const [key, value] of Object.entries(singleCategorys)) {
// console.log(key, value);
//     console.log(singleCategorys.title);
//     singleCategorys.forEach(singleCategory => {
//         console.log(singleCategory);
//     })
// }
// const userDiv = document.createElement('div');

// userDiv.classList.add('user');
// userDiv.innerHTML = `
//  <h3> User Name :${singleCategorys.title} </h3>
//  <p> Email :  </p>
//  <p>Gender :</p>
//  <p> User Location :  </p>
//  `;
// userContainer.appendChild(userDiv);
// }


// }


loadCategory();
