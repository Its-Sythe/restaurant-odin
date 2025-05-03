const morePage = function() {
    const contactsContainer = document.createElement("section");
    contactsContainer.id = "contactContainer"
    const contactInfo = document.createElement("div");
    const superContainer = document.createElement("div");
    superContainer.id = "super"
    const managerContainer = document.createElement("div");
    managerContainer.id = "manager";
    const hrContainer = document.createElement("div");
    hrContainer.id = "hr";

    contactInfo.id = "contactUs"
    contactInfo.textContent = "Contact Us"

    const superContanct = document.createElement("p");
    superContanct.textContent = "Contact Our Supervisor at supervisor@ramen.com";

    const managerContact = document.createElement("p");
    managerContact.textContent = "Contact Our Manager at manager@ramen.com";

    const hrContact = document.createElement("p");
    hrContact.textContent = "Contact our HR team at ramenhr@ramen.com"

    superContainer.append(superContanct);
    managerContainer.append(managerContact);
    hrContainer.append(hrContact);

    contactsContainer.append(contactInfo, superContainer, managerContainer, hrContainer);

    return contactsContainer;
}

export const more = morePage();

