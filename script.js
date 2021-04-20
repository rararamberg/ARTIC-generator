// console.log('Hello World');
// URL: https://api.artic.edu/api/v1/artworks?limit=100
// IMAGE URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// note identitifier = image_id

// STEP1 CREATE API REQUEST FOR DROPDOWN MENUS
const resultsDiv = document.querySelector('.results-box');

const getMenuOptions = async () => {
  const url = 'https://api.artic.edu/api/v1/artworks?limit=20'
  try {
    const response = await axios.get(url);
    let deptArr = [];
    let medArr = [];
    for (let i = 0; i < response.data.data.length; i++){
      // console.log(response.data.data[i].department_title);
      // console.log(response.data.data[i].classification_title);
      let deptItem = response.data.data[i].department_title;
      deptArr.push(deptItem);
      
      let mediumList = response.data.data[i].classification_title
      medArr.push(mediumList);

      createArtInfo(response.data.data[i])

    }

    // filter out duplicated categories
    let filterDeptItems = deptArr.filter((val, index, val2) => {
      return val2.indexOf(val) === index 
    })

    let filterMedItems = medArr.filter((val, index, val2) => {
      return val2.indexOf(val) === index 
    })

    // console.log(filterDeptItems)
    // console.log(filterMedItems)
    setDeptOptions(filterDeptItems)
    setMediumOption(filterMedItems)
    // console.log(response.data.data[0]);
  }
  catch (error) {
    console.error(error);
  }
}

getMenuOptions()

// STEP2 APPEND DATA TO OPTION TAGS IN DROPDOWN MENUS
// A. DEPARTMENT
// B. CATEGORIES
function setDeptOptions(item) {
  for (let i = 0; i < item.length; i++) {
  const selectTag = document.querySelector('#select-dept');
  const optionTag = document.createElement('option');
  optionTag.textContent = item[i]
  optionTag.value = item[i]
  selectTag.append(optionTag);
  }
  

}

function setMediumOption(item) {
  for (let i = 0; i < item.length; i++) {
    const selectTag = document.querySelector('#select-medium');
    const optionTag = document.createElement('option');
    optionTag.textContent = item[i]
    optionTag.value = item[i]
    selectTag.append(optionTag);
    }
}


// STEP3 GET OPTION VALUES IN DROP DOWN MENU
// A. DEPARTMENT
// B. CATEGORIES

function getDeptValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector('#select-dept').value;
  console.log(optionValue);
}

function getMedValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector('#select-medium').value;
  console.log(optionValue);
}


// STEP4 DROP DOWN MENU EVENTHANDLERS
// this may need to change to getMenuOptions

const deptButton = document.querySelector('#submit-dept');
deptButton.addEventListener('click', getDeptValue);

const medButton = document.querySelector('#submit-medium');
medButton.addEventListener('click', getMedValue);


// STEP5 Create dynamic HTML with data and display ARTWORK INFO: title, artist, date,image,department,medium

function createArtInfo(data) {
  // console.log(data)
  const artDiv = document.createElement('div');
  artDiv.classList.add('artwork-box');

  let artInfo = `
    <h4 id="work-title">${data.title}</h4>
    <img src='https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg' alt='image of ${data.classification_title}' />
    <h6 id="artist-with-date">${data.artist_title}, ${data.date_display}</h6>
    <p class="art-dept">Department: ${data.department_title}</p>
    <p class="art-medium">Medium: ${data.classification_title}</p>
  `
  artDiv.insertAdjacentHTML('beforeend', artInfo);

  // const workTitle = data.title;
  // const artistTitle = data.artist_title;
  // const dateDisplay = data.date_display;
  // const departmentTitle = data.department_title;
  // const mediumTitle = data.classification_title;
  console.log(artDiv);
  // console.log(imageSrc);
  // // console.log(workTitle);
  // // console.log(artistTitle);
  // // console.log(dateDisplay);
  // // console.log(departmentTitle);
  // // console.log(mediumTitle);
  // // resultsDiv.append(artDiv);  
}



// STEP6 API REQUEST FOR IMAGE TAGS
// IMAGE URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// note identitifier = image_id

// const imageSrc = response.data.data[].image_id
// const IMAGE_URL = `https://www.artic.edu/iiif/2/${imageSrc}/full/843,/0/default.jpg`


// STEP7 APPEND IMAGE TAGS AND INFO TO DOM
// const resultsDiv = document.querySelector('.results-box');
// const artDiv = document.createElement('div');
// artDiv.classList.add('artwork-box');
// resultsDiv.append(artDiv);


// STEP8 REMOVE PREVIOUS RESULTS

