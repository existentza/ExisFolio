const workTypesButtons = document.getElementsByClassName("work-type");
const workTypesCategories = document.getElementsByClassName("works-reference-container");

const detailsLanguageName = document.getElementById("language-name");
const detailsLanguageDescription = document.getElementById("language-description");

const languagesDetails = {
    "lua" : {
        title: "Lua / Luau",
        description: "I started using Lua in 2021, It's currently my main programming language because I mainly work on Roblox."
    },
    "js" : {
        title: "JavaScript",
        description: "I learned Web Development in late 2022, all those works include HTML, CSS and JavaScript. All my websites are made in pure HTML, CSS and JavaScript. No Frameworks, etc..."
    },
    "blender" : {
        title: "Blender",
        description: "I mainly use Blender for animations, I can also model some simple thing but I don't have anything that good to show. Same for animations."
    },
    "other-works" : {
        title: "Other Works",
        description: "Here's a summary of all other works like Game Jams, Commissions for Brands etc..."
    }
}

function hideAllCategories(categoryToShow){
    for (const category of workTypesCategories){
        category.style.display = "none";
    }
}

function showWorkType(workType){
    console.log(`Work Type: ${workType}`);
    const workTypeContainer = document.getElementById(workType);

    hideAllCategories(workTypeContainer);

    workTypeContainer.style.display = "flex";

    // Update the details
    detailsLanguageName.textContent = languagesDetails[workType].title;
    detailsLanguageDescription.textContent = languagesDetails[workType].description;
}

function deselectButtons(newSelection){
    for (const button of workTypesButtons) {
        button.id = "";
    }

    newSelection.id = "selected";
    showWorkType(newSelection.getAttribute("value"));
}

for (const button of workTypesButtons) { 
    button.addEventListener("click", function () {
        deselectButtons(button);
    });
}