// console.log('Hello World');
// URL: https://api.artic.edu/api/v1/artworks
// IMAGE URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// note identitifier = image_id

// STEP1 CREATE API REQUEST FOR DROPDOWN MENUS

const getMenuOptions = async () => {
  const url = 'https://api.artic.edu/api/v1/artworks?limit=100'
  try {
    const response = await axios.get(url);
    for (let i = 0; i < response.data.data.length; i++){
      // console.log(response.data.data[i].department_title);
      // console.log(response.data.data[i].classification_title);
      let deptItem = Object.values(response.data.data[i].department_title);
      setDeptOptions(deptItem)
      let mediumList = Object.values(response.data.data[i].classification_title);
      setMediumOption(mediumList)
    }
    // console.log(response.data.data);
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
  const selectTag = document.querySelector('#select-dept');
  const optionTag = document.createElement('option');
  optionTag.textContent = item
  optionTag.value = item
  selectTag.append(optionTag);

}

function setMediumOption(item) {
  const selectTag = document.querySelector('#select-medium');
  const optionTag = document.createElement('option');
  optionTag.textContent = item
  optionTag.value = item
  selectTag.append(optionTag);
}


// STEP3 GET OPTION VALUES IN DROP DOWN MENU

// STEP4 DROP DOWN MENU EVENTHANDLERS

// STEP5 GET VALUES FOR ARTWORK INFO


// STEP6 API REQUEST FOR IMAGE TAGS


// STEP7 APPEND IMAGE TAGS AND INFO TO DOM


// STEP8 REMOVE PREVIOUS RESULTS

