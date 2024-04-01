//Select Input
let SelectedOption = document.querySelector('.flat');
let SelectedOptionBHK = document.querySelector('.BHK-count');
let MaxBudget = document.querySelector('.max-budget');
let MinBudget = document.querySelector('.min-budget');

//Output
let DisplayOption1 = document.querySelector('.propertyType');
let DisplayOption2 = document.querySelector('.BHK-output');
let DisplayOption3 = document.querySelector('.max-bd-output');
let DisplayOption4 = document.querySelector('.min-bd-output');

//Functions to display output
function SelectType (SelectedOption) {
    DisplayOption1.innerHTML = SelectedOption;
}

function SelectBHK (SelectedOptionBHK) {
    DisplayOption2.innerHTML = SelectedOptionBHK;
}

function MaximumBudget (MaxBudget) {
    DisplayOption3.innerHTML = MaxBudget;
}

function MinimumBudget (MinBudget) {
    DisplayOption4.innerHTML = MinBudget;
}

function SelectOption(value) {
    const dropdownToggle = document.querySelector('.propertyType');
    dropdownToggle.setAttribute('data-selected', value);
    console.log("Selected value:", value);
}


//Verify & Output Location
function SearchHouse () {

    //Gets the value from the inputs
    let Location = document.querySelector(".input-group").value;
    localStorage.setItem("Location", Location);
    let retreivedLocation = localStorage.getItem("Location");

    let selectPropertyType = document.getElementById('select-propertyType').value;
    localStorage.setItem("selectPropertyType", selectPropertyType);
    const retreivedPropertyType = localStorage.getItem("selectPropertyType", selectPropertyType);
 
    let SelectBHKcount = document.getElementById('select-BHK').value;
    let MaxBdcount = document.getElementById('maxBd-count').value;
    let MinBdcount = document.getElementById('minBd-count').value;


    //Tests the location input & outputs location
    let LocationOutput = document.getElementById('location-output');
    if (retreivedLocation == 'Frankfurt' || retreivedLocation == 'frankfurt') {
        LocationOutput.innerHTML = retreivedLocation;

    } else if (retreivedLocation == 'Kassel' || retreivedLocation == 'kassel') {
        LocationOutput.innerHTML = retreivedLocation;

    } else if (retreivedLocation == 'Montabauer' || retreivedLocation == 'montabauer') {
        LocationOutput.innerHTML = retreivedLocation;

    } else {
        LocationOutput.innerHTML = 'Invalid !';
        LocationOutput.style.color = 'red';
    }


    //Displays Results
    let displaySection = document.querySelector('.ds-none');
    displaySection.style.display = 'block';
    
    if (retreivedPropertyType == 'shop') {
        let TypeOutput = document.getElementById('type-output');
        TypeOutput.innerHTML =' Unavailable !';
        TypeOutput.style.color = 'red';
    } else {
        let TypeOutput = document.getElementById('type-output');
        TypeOutput.innerHTML = retreivedPropertyType;
    }

    let BHKoutput = document.getElementById('BHK-output');
    BHKoutput.innerHTML = SelectBHKcount;

    let MaxBdOutput = document.getElementById('maxBd-output');
    MaxBdOutput.innerHTML = MaxBdcount;

    let MinBdOutput = document.getElementById('minBd-output')
    MinBdOutput.innerHTML = MinBdcount;


    // Result Cards HTML
    let UrsHouse =  `
        <div class="listing-card">
        <div class="start-container">
            <span class="span-cirlce">u</span>
            <div class="column-container">
                <p class="name">urs kale</p>
                <p class="date">04-08-2024</p>
            </div>
        </div>
        <div class="image-container">
            <img class="property-img" src="./Images/house-img-2.webp" alt="">
            <p class="top-left hover-red"><i class="fa-solid fa-image"></i> 4</p>
            <p class="top-right hover-red"><i class="fa-regular fa-heart"></i></p>
            <p class="bottom-left red-bg-txt">flat</p>
        </div>
        <p class="property-name">Modern Flats And Appartments</p>
        <p class="location-txt"><span class="red-span icon-size"><i class="fa-solid fa-location-dot"></i> </span> Kassel, Hessen, Deutschland</p>
        <div class="grey-container">
            <p class="info-txt"><span class="red"><i class="fa-solid fa-bed"></i></span> 3</p>
            <p class="info-txt"><span class="red"><i class="fa-solid fa-bath"></i></span> 1</p>
            <p class="info-txt"><span class="red"><i class="fa-solid fa-arrows-up-down-left-right"></i></span> 550sqft</p>
        </div>
        <br>
        <div class="center-container">
            <button class="view-btn">View Property</button>
        </div>
    </div>
    `;
    let JohnHouse = `
        <div class="listing-card">
        <div class="start-container">
            <span class="span-cirlce">j</span>
            <div class="column-container">
                <p class="name">john deo</p>
                <p class="date">10-11-2022</p>
            </div>
        </div>
        <div class="image-container">
            <img class="property-img" src="./Images/house-img-1.webp" alt="">
            <p class="top-left hover-red"><i class="fa-solid fa-image"></i> 4</p>
            <p class="top-right hover-red"><i class="fa-regular fa-heart"></i></p>
            <p class="bottom-left red-bg-txt">house</p>
        </div>
        <p class="property-name">Modern Flats And Appartments</p>
        <p class="location-txt"><span class="red-span icon-size"><i class="fa-solid fa-location-dot"></i> </span> Frankfurt, Hessen, Deutschland</p>
        <div class="grey-container">
            <p class="info-txt"><span class="red"><i class="fa-solid fa-bed"></i></span> 4</p>
            <p class="info-txt"><span class="red"><i class="fa-solid fa-bath"></i></span> 2</p>
            <p class="info-txt"><span class="red"><i class="fa-solid fa-arrows-up-down-left-right"></i></span> 750sqft</p>
        </div>
        <br>
        <div class="center-container">
            <a href="./PropertyPages/John-Property.html" class="view-btn">View Property</a>
        </div>
        <br>
    </div>
    `;
    let TobiasHouse = `
        <div class="listing-card">
        <div class="start-container">
            <span class="span-cirlce">t</span>
            <div class="column-container">
                <p class="name">tobias gemar</p>
                <p class="date">22-12-2019</p>
            </div>
        </div>
        <div class="image-container">
            <img class="property-img" src="./Images/house-img-3.jpg" alt="">
            <p class="top-left hover-red"><i class="fa-solid fa-image"></i> 2</p>
            <p class="top-right hover-red"><i class="fa-regular fa-heart"></i></p>
            <p class="bottom-left red-bg-txt">rental flat</p>
        </div>
        <p class="property-name">Modern Flats And Appartments</p>
        <p class="location-txt"><span class="red-span icon-size"><i class="fa-solid fa-location-dot"></i> </span> Montabauer, Sachsen, Deutschland</p>
        <div class="grey-container">
            <p class="info-txt"><span class="red"><i class="fa-solid fa-bed"></i></span> 3</p>
            <p class="info-txt"><span class="red"><i class="fa-solid fa-bath"></i></span> 2</p>
            <p class="info-txt"><span class="red"><i class="fa-solid fa-arrows-up-down-left-right"></i></span> 430sqft</p>
        </div>
        <br>
        <div class="center-container">
            <br>
                <a href="./PropertyPages/Tobias-Property.html" class="view-btn">View Property</a>
        </div>
        <br>
    </div>
    `;


    //Displays the fitting house
    let DisplaySuggestedHouse = document.querySelector('.Display-house-output');
    let InvalidMessageOutput = document.querySelector('.invalid-message-output');

    if (retreivedPropertyType == 'shop' || retreivedLocation == '') {
        InvalidMessageOutput.innerHTML = 'Something went wrong, please check your inputs !';
    } 
    else if (retreivedPropertyType == 'flat' || retreivedPropertyType == 'house') {

        if (MinBdcount > '40 000 $' && MaxBdcount < '300 000 $') {
            DisplaySuggestedHouse.innerHTML = UrsHouse ;
            console.log('Daywischen');
        } 
        else if (MinBdcount < '40 000 $' && MaxBdcount < '200 000 $') {
            DisplaySuggestedHouse.innerHTML = TobiasHouse ;
        } 
        else if (MaxBdcount > '300 000 $') {
            DisplaySuggestedHouse.innerHTML = JohnHouse ;
        }
        
    }

}


function ScrollToSection () {
    const section = document.querySelector('.scroll-section');

    section.scrollIntoView({ behavior: 'smooth' });
}









