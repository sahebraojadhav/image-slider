const slider = document.querySelector(".slider");
const dotsContainer=document.querySelector('.dots-container');
const image=document.querySelector(".images")

async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=5",
      {
        method: "GET",
      }
    );
    const imagesList = await response.json();
    if (imagesList && imagesList.length > 0) displayImages(imagesList);
    console.log(imagesList);
  } catch (error) {
    console.log("error occred");
  }
}

function displayImages(imagesList) {
  slider.innerHTML = imagesList.map(
    (item) => `
    <div class="slide">
    <img src=${item.download_url} alt=${item.id}>
    ${console.log(item.download_url)}
    </div>
    `
  ).join(" ");

  dotsContainer.innerHTML=imagesList.map(
    (item,index)=>`
    <span class="dot" data-slide="${index}"></span>
    `
  ).join(" ");


}

fetchListOfImages();


