const homePage = (function() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const homeContent = document.getElementById("content");

    function createDiv() {
        return document.createElement("div");
    }

    const homeContainer = createDiv();
    homeContainer.id  = "homeContainer";

    function logoSpace() {
        const logoContainer = createDiv();
        logoContainer.id = "logoContainer";
        const resName = document.createElement("p");
        resName.id = "resName"
        resName.textContent = "Wannabe Ichiraku Ramen"
        const logoImg = document.createElement("img");
        logoImg.id = "logo";
        logoImg.src = "https://img.freepik.com/free-vector/hand-drawn-ramen-illustration_23-2151176906.jpg?t=st=1746199331~exp=1746202931~hmac=89f53d4f53ab4f8a8f77cfaf689a2eeb25e4e071532cf7ac2375be0c71c01bfb&w=900";
        logoImg.alt = "Logo image goes here!";

        logoContainer.append(logoImg, resName);
        return logoContainer;
    }

    function infoSpace() {
        const information = createDiv();
        information.id = "info";

        const dayList = document.createElement("ul");
        const timesList = document.createElement("ul");

        const daysTitle = document.createElement("p");
        daysTitle.textContent = "Days: ";
        dayList.append(daysTitle)
        for (let d = 0; d < weekDays.length; d++) {
            const li = document.createElement("li");
            li.id = "days";
            li.textContent = weekDays[d];
            dayList.append(li);
        }

        const timeTitle = document.createElement("p");
        timeTitle.textContent = "Hours: "
        timesList.append(timeTitle)
        for (let t = 0; t < weekDays.length; t++) {
            const li = document.createElement("li");
            li.id = "hours"
            li.textContent = "8 hours"
            timesList.append(li);
        }

        information.append(dayList, timesList);
        return information;
    }

    function staffSpace() {
        const staffNames = ["Ayame", "Teuchi", "Some Random Extra"]
        const staffContainer = createDiv();
        staffContainer.id = "staffContainer";

        for (let n = 0; n < staffNames.length; n++) {
            const name = document.createElement("p");
            name.textContent = staffNames[n];
            staffContainer.append(name)
        }

        return staffContainer;
    }

    const logo = logoSpace();
    const info = infoSpace();
    const staff = staffSpace();

    homeContainer.append(logo, info, staff);
    homeContent.append(homeContainer);

    return {
        homeContainer
    }

})();

export const home = homePage;

