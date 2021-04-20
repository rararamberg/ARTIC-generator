// URL: https://api.artic.edu/api/v1/artworks?limit=100
// IMAGE URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// note identitifier = image_id

// STEP1 CREATE API REQUEST FOR DROPDOWN MENUS
const url = 'https://api.artic.edu/api/v1/artworks?limit=100'
const resultsDiv = document.querySelector('.results-box');

const getMenuOptions = async () => {
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

    // STEP2
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
function setDeptOptions(item) {
  for (let i = 0; i < item.length; i++) {
  const selectTag = document.querySelector('#select-dept');
  const optionTag = document.createElement('option');
  optionTag.textContent = item[i]
  optionTag.value = item[i]
  selectTag.append(optionTag);
  }
}
// B. MEDIUMS
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
// 3A. DEPARTMENT
async function getDeptValue() {
  removeArtResults()
  const optionValue = document.querySelector('#select-dept').value;
  console.log(optionValue);
  try {
    const response = await axios.get(url);
    for (let i = 0; i < response.data.data.length; i++){
      if (response.data.data[i].department_title === optionValue) {
        createArtInfo(response.data.data[i]);
      } 
    }
  }
  catch (error) {
    console.error(error);
  }
}
// 3B. MEDIUMS
async function getMedValue() {
  removeArtResults()
  const optionValue = document.querySelector('#select-medium').value;
  console.log(optionValue);
  try {
    const response = await axios.get(url);
    for (let i = 0; i < response.data.data.length; i++){
      if (response.data.data[i].classification_title === optionValue) {
        createArtInfo(response.data.data[i]);
      } 
    }
  }
  catch (error) {
    console.error(error);
  }
}


// STEP4 DROP DOWN MENU EVENTHANDLERS
// this may need to change to getMenuOptions

const deptButton = document.querySelector('#submit-dept');
deptButton.addEventListener('click', (e) => {
  e.preventDefault()
  getDeptValue()
  // resets previous values if changing drop downs
  document.querySelector('#select-medium').value = document.querySelector('#med-default').value;
});

const medButton = document.querySelector('#submit-medium');
medButton.addEventListener('click', (e) => {
  e.preventDefault()
  getMedValue()
  // resets previous values if changing drop downs
  document.querySelector('#select-dept').value = document.querySelector('#dept-default').value;
});



// STEP5 Create dynamic HTML with data and display ARTWORK INFO: title, artist, date,image,department,medium
// STEP6 API REQUEST FOR IMAGE TAGS

function createArtInfo(data) {
  // console.log(data)
  const artDiv = document.createElement('div');
  artDiv.classList.add('artwork-box');
  let artInfo = `
    <h3 id="work-title">${data.title}</h3>
    <img class="art-image" src='https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg' alt='image of ${data.classification_title}' />
    <h4 id="artist-with-date">${data.artist_title}, ${data.date_display}</h4>
    <p class="art-dept">Department: ${data.department_title}</p>
    <p class="art-medium">Medium: ${data.classification_title}</p>
  `
  artDiv.insertAdjacentHTML('beforeend', artInfo);

  console.log(artDiv);
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