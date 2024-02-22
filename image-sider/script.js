const slider = document.querySelector(".slider");
const dotContainer=document.querySelector('.dots-container')

async function fetchListOfImages() {
  try {
    console.log('inside try block');
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=5",
      {
        method: "GET",
      }
    );
   
    const imagesList = await response.json();
    console.log(imagesList);

    if (imagesList && imagesList.length > 0) {
      displayImages(imagesList);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayImages(getImagesList) {
  slider.innerHTML = getImagesList.map(
    (item) => `
    <div class="slider">
     <img src=${item.download_url} alt=${item.id}>
     ${console.log(item.download_url)}
    </div>
    `
    
  );

  dotContainer.innerHTML=getImagesList.map(
    (item,index)=>`
    <span class="dot active" data-slide=${index}></span>
    `
    
    ).join(" ");
  
}

fetchListOfImages();
