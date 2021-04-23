//API URL: https://api.artic.edu/api/v1/artworks?page=4&limit=100
//API IMAGE URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg


// ======= STEP1 CREATE API REQUEST FOR DROPDOWN MENUS ===================
const url = 'https://api.artic.edu/api/v1/artworks?page=2&limit=100'
const resultsDiv = document.querySelector('.results-box');

const getMenuOptions = async () => {
  try {
    const response = await axios.get(url);
    let deptArr = [];
    let medArr = [];
    for (let i = 0; i < response.data.data.length; i++){

      let deptItem = response.data.data[i].department_title;
      if (deptItem) {
        deptArr.push(deptItem);
      }
      
    
      let mediumList = response.data.data[i].classification_title
      if (mediumList) {
        medArr.push(mediumList);
      }
    }

    // === filter out duplicated categories ===
    let filterDeptItems = deptArr.filter((val, index, val2) => {
      return val2.indexOf(val) === index 
    })
    let filterMedItems = medArr.filter((val, index, val2) => {
      return val2.indexOf(val) === index 
    })

    // === STEP2 called here ===
    setDeptOptions(filterDeptItems)
    setMediumOption(filterMedItems)
  
  }
  catch (error) {
    console.error(error);
  }
}
getMenuOptions()


// === STEP2 APPEND DATA TO OPTION TAGS IN DROPDOWN MENUS ======
// 2A. == DEPARTMENT ==
function setDeptOptions(item) {
  for (let i = 0; i < item.length; i++) {
  const selectTag = document.querySelector('#select-dept');
  const optionTag = document.createElement('option');
  optionTag.textContent = item[i]
  optionTag.value = item[i]
  selectTag.append(optionTag);
  }
  return item
}
// 2B. == MEDIUMS ==
function setMediumOption(item) {
  for (let i = 0; i < item.length; i++) {
    const selectTag = document.querySelector('#select-medium');
    const optionTag = document.createElement('option');
    optionTag.textContent = item[i]
    optionTag.value = item[i]
    selectTag.append(optionTag);
  }
  return item
}


// ====  STEP3 GET OPTION VALUES IN DROP DOWN MENU ================
// 3A. == DEPARTMENT ==
async function getDeptValue() {
  // === STEP8 function called here ===
  removeArtResults()
  const optionValue = document.querySelector('#select-dept').value;
  try {
    const response = await axios.get(url);
    for (let i = 0; i < response.data.data.length; i++){
      if (response.data.data[i].department_title === optionValue) {
        createArtInfo(response.data.data[i]);
      } 
    }
    return optionValue
  }
  catch (error) {
    console.error(error);
  }
}
// 3B. == MEDIUMS ==
async function getMedValue() {
  //  === STEP8 function called here ===
  removeArtResults()
  const optionValue = document.querySelector('#select-medium').value;
  try {
    const response = await axios.get(url);
    for (let i = 0; i < response.data.data.length; i++){
      if (response.data.data[i].classification_title === optionValue) {
        createArtInfo(response.data.data[i]);
      } 
    }
    return optionValue
  }
  catch (error) {
    console.error(error);
  }
}


//==== STEP4 DROP DOWN MENU EVENTHANDLERS ====

const deptButton = document.querySelector('#submit-dept');
deptButton.addEventListener('click', (e) => {
  e.preventDefault()
  getDeptValue()
  // == resets of previous menu if changing drop downs ==
  document.querySelector('#select-medium').value = document.querySelector('#med-default').value;
});

const medButton = document.querySelector('#submit-medium');
medButton.addEventListener('click', (e) => {
  e.preventDefault()
  getMedValue()
  // == resets default of previous menu if changing drop downs ==
  document.querySelector('#select-dept').value = document.querySelector('#dept-default').value;
});



// == STEP5 Create dynamic HTML with data and display ARTWORK INFO: title, artist, date,image,department,medium ===
// === STEP6 API REQUEST FOR IMAGE TAGS ====

function createArtInfo(data) {
  const artDiv = document.createElement('div');
  artDiv.classList.add('artwork-box');

  const artTitle = document.createElement('h3');
  artTitle.classList.add('work-title');
  artTitle.textContent = data.title
  artDiv.append(artTitle);

  const artImage = document.createElement('img');
  artImage.classList.add('art-image');
  if (data.image_id !== null) {
    artImage.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
    artImage.alt = `image of ${data.classification_title}`;
    artDiv.append(artImage);
  } else {
    artImage.alt = `image of work not provided`;
    artDiv.append(artImage);
  }


  const artistDateTitle = document.createElement('h4');
  artistDateTitle.classList.add('artist-with-date');
  if (data.artist_title === null) {
    artistDateTitle.textContent = `Unknown,   ${data.date_display}`;
    artDiv.append(artistDateTitle);
  } else {
    artistDateTitle.textContent = `${data.artist_title}, ${data.date_display}`;
    artDiv.append(artistDateTitle);
  }

  const deptPTag = document.createElement('p');
  deptPTag.classList.add('art-dept');
  if (data.department_title !== null) {
    deptPTag.textContent = `Department:   ${data.department_title}`;
    artDiv.append(deptPTag)
  }


  const medPTag = document.createElement('p');
  medPTag.classList.add('art-medium');
  if (data.classification_title !== null) {
    medPTag.textContent = `Medium:    ${data.classification_title}`;
    artDiv.append(medPTag)
  }


  const originPTag = document.createElement('p');
  originPTag.classList.add('art-origin');
  if (data.place_of_origin !== null) {
    originPTag.textContent = `Origin:   ${data.place_of_origin}`
    artDiv.append(originPTag)
  }

  // STEP7 APPEND IMAGE TAGS AND INFO TO DOM
  resultsDiv.append(artDiv);
}


// STEP8 REMOVE PREVIOUS RESULTS
function removeArtResults() {
  const removeArtDivs = document.querySelector('.results-box');
  while (removeArtDivs.lastChild) {
    removeArtDivs.removeChild(removeArtDivs.lastChild)
  }
}






