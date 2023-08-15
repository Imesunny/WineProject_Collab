// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
let timeout;

// Debounce function
function debounce(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
}

// if user press any key and release (with debouncing)
inputBox.onkeyup = (e) => {
    debounce(() => {
        let userData = e.target.value; // user entered data
        let emptyArray = [];
        if (userData) {
            icon.onclick = () => {
                webLink = `https://www.google.com/search?q=${userData}`;
                linkTag.setAttribute("href", webLink);
                linkTag.click();
            };
            emptyArray = suggestions.filter((data) => {
                // filtering array value and user characters to lowercase and return only those words which are start with user entered chars
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data) => {
                // passing return data inside li tag
                return (data = `<li>${data}</li>`);
            });
            searchWrapper.classList.add("active"); // show autocomplete box
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                // adding onclick attribute in all li tag
                allList[i].setAttribute("onclick", "select(this)");
            }
        } else {
            searchWrapper.classList.remove("active"); // hide autocomplete box
        }
    }, 2000); // 2 seconds debounce
};

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    // Redirect to product.html page with selected data
    window.location.href = `product.html?search=${encodeURIComponent(selectData)}`;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join("");
    }
    suggBox.innerHTML = listData;
}

//
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");

    menuButton.addEventListener("click", () => {
        menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.style.display = "none";
        }
    });
