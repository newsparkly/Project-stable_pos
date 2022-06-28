let suggestions = 
[
  {
    id: 1,
    name: 'КС3М10',
    isMarried: 3,
  },
  {
    id: 2,
    name: 'КС3М12',
    isMarried: 2,
    children: 1
  },
  {
    id: 3,
    name: 'КС3М14',
    isMarried: 3,
  },
  {
    id: 4,
    name: 'КС3М16',
    isMarried: false,
  },
  
  {
    id: 5,
    name: 'КС3М18',
    isMarried: 3,
    children: 2
  },
  {
    id: 6,
    name: 'КС3М20',
    isMarried: false,
  },
  
  {
    id: 7,
    name: 'КС3М22',
    isMarried: 3,
  }
]

/// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.name.toLocaleLowerCase().includes(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data.name +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

const handleNum = () => {
  let count = num_inp.value;
  let code = search_inp.value;
  console.log(code);
  console.log(count);
  num_inp.value = null;
  search_inp.value = null;
}

submit.addEventListener('click', handleNum)











