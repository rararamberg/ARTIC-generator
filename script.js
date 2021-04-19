// console.log('Hello World');
// URL: https://api.artic.edu/api/v1/artworks
// IMAGE URL: https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
// note identitifier = image_id

// STEP1 CREATE API REQUEST FOR DROPDOWN MENUS

const getMenuOptions = async () => {
  const url = 'https://api.artic.edu/api/v1/artworks?limit=100'
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
    let filterDeptItems = deptArr.filter((val, index, val2) => {
      return val2.indexOf(val) === index 
    })
    let filterMedItems = medArr.filter((val, index, val2) => {
      return val2.indexOf(val) === index 
    })
    console.log(filterDeptItems)
    console.log(filterMedItems)
    setDeptOptions(filterDeptItems)
    setMediumOption(filterMedItems)
    // console.log(newArr)
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

// STEP4 DROP DOWN MENU EVENTHANDLERS

// STEP5 GET VALUES FOR ARTWORK INFO


// STEP6 API REQUEST FOR IMAGE TAGS


// STEP7 APPEND IMAGE TAGS AND INFO TO DOM


// STEP8 REMOVE PREVIOUS RESULTS

