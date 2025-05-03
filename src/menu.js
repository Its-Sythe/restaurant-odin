const menuPage = (function() {
    const getDiv = function() {
        return document.createElement("div");
    }

    function menuItems() {
        const items = {
            "Shoyu Ramen:": {
                desc: "A ramen bowl full of delicate tastes brought to you through the thick soy sauce broth.",
                price: "2100¥",
            },
            "Shio Ramen:" : {
                desc: "A simple but delightful bowl of noodle with a salt-seasoned broth.",
                price: "2300¥",
            },
            "Tonkotsu Ramen:": {
                desc: "Creamy and milky white broth to go along with your noodle dish, to deliver a delicable taste for your tastebuds ;p",
                price: "2500¥",
            },
            "Hiyashi Chuka:": {
                desc: "Cold noodle ramen topped with sweet and tangy sauce for your summer delicacies",
                price: "2000¥",
            },
            "Miso Ramen:": {
                desc: "Ramen soaked in cloudy and umami packed broth made of miso for those with stronger taste buds ;p",
                price: "2200¥",
            }
        }

        const itemsContainer = getDiv();
        itemsContainer.id = "menuItems"
        const itemNames = getDiv();
        itemNames.id = "itemName"
        const itemDetails = getDiv();
        itemDetails.id = "itemDesc";
        const itemPrices = getDiv();
        itemPrices.id = "itemPrice"

        for (const item in items) {
            const detail = items[item];
            const foodName = getDiv()
            foodName.id = "foodName";
            foodName.textContent = item;
            itemNames.append(foodName);

            const foodDetail = getDiv()
            foodDetail.id = "foodDesc";
            foodDetail.textContent = detail.desc;
            itemDetails.append(foodDetail);

            const foodPrice = getDiv();
            foodPrice.id = "foodPrice";
            foodPrice.textContent = detail.price;
            itemPrices.append(foodPrice);

        }
        itemsContainer.append(itemNames, itemDetails, itemPrices)
        return itemsContainer;
    }

    return {
        menuItems
    }
})();

export const menu = menuPage;