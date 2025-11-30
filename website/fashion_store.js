



const menItems = {
    item1:["https://zandokh.com/image/cache/catalog/products/2025-07/21225031256/Untitled%20Session1209-cr-450x672.jpg","15.99$","Baggy Straight Fit Jean"],
    item2:["https://zandokh.com/image/cache/catalog/products/2025-09/22225081545/ZD__5208-cr-450x672.jpg","13.99$","Wide Leg Denim Jean"],
    item3:["https://zandokh.com/image/cache/catalog/products/2025-08/21225051315/ZANDO200820258519-cr-450x672.jpg","11.99$","Regular Denim Short"],
    item4:["https://zandokh.com/image/catalog/products/2025-05/21225011095/021.jpg","9.99$","Regular Printed T-Shirt"],
    item5:["https://zandokh.com/image/catalog/products/2025-08/4522412227/10S25DSHU054_D-Navy-(1).jpg","8.99$","Loose Fitted Denim Shirts"],
    item6:["https://zandokh.com/image/catalog/products/2025-04/21225031176/006.5.jpg","5.99$","Mesh Jersey T-Shirt"],
    item7:["https://zandokh.com/image/catalog/products/2025-02/5132408017/IMG_0033.jpg","11.99$","Sport LifeTraning Trouser"],
    item8:["https://zandokh.com/image/catalog/products/2025-03/21225011089/IMG_0024.jpg","5.99$","Regular Fit Sleeveless T-Shirt"],
    item9:["https://zandokh.com/image/catalog/products/2025-06/21225031222/ZANDO230620259084.jpg","8.99$","Beggy Denim Shorts"],
    item10:["https://zandokh.com/image/catalog/products/2025-04/4122501282/3%20(2).jpg","11.99$","Loose Fit Shirt With Pocket"],
    item11:["https://zandokh.com/image/catalog/products/2025-04/4122502294/10S25SHL032_White%20(1).jpg","15.99$","Regular Long Sleeves Linen Shirt"],
    item12:["https://zandokh.com/image/catalog/products/2025-08/21225011094/ZANDO120820255844.jpg","4.99$","Regular Short With Elastic Waistband"],
    item13:["https://zandokh.com/image/catalog/products/2025-07/21225041268%20Replace/26.jpg","22.99$","Regular Jackets"],
    item14:["https://zandokh.com/image/catalog/products/2025-11/21225081426%20/ZD__5609.jpg","17.99$","Cargo Denim Jorts"],
    item15:["https://zandokh.com/image/catalog/products/2025-11/11225081247/ZD__4930.jpg","16.99$","Baggy SweatPant"],
    item16:["https://zandokh.com/image/catalog/products/2025-07/21225041247/007.jpg","15.99$","Regular SweatShirts With Zip"],
    item17:["https://zandokh.com/image/catalog/products/2025-11/4122505372/10F25SHS003_Blue%20(1).jpg","13.99$","Relaxed Strip Shirt"],
    item18:["https://zandokh.com/image/catalog/products/2025-11/5152505168/ZD__4810.jpg","10.99$","Basketball Sweat Jogger"]
};

const menDiscountItems = {
    items1:["-50%","https://zandokh.com/image/catalog/products/2025-07/21225041226%20Replace/Oversize%20T-Shirts%20Back%2002.jpg","7.99$  ","15.99$","Loose Fitted T-Shirt With Printed"],
    items2:["-30%","https://zandokh.com/image/catalog/products/2025-01/2122409764/IMG_1270.jpg","10.50$","15.30$","Wide Leg Trouser"],
    items3:["-50%","https://zandokh.com/image/catalog/products/2025-04/21225021133/Shirt%20037.jpg","7.49$","13.99$","Oversized T-Shirts"],
    items4:["-70%","https://zandokh.com/image/catalog/products/2025-07/21225041242/ZD__9791%20copy.jpg","10.50$","4.50$","Knitted Vest"],
    items5:["-50%","https://zandokh.com/image/catalog/products/2025-05/21225031257/ZANDO2705202527666.jpg","20.50$","10.50$","Straight Fit Denim Jean"],
    items6:["-50%","https://zandokh.com/image/catalog/products/2025-06/21225031235/ZD__6749.jpg","10.99$","4.99$","Regular Short With Elastic Waistband"],
    items7:["-30%","https://zandokh.com/image/catalog/products/2025-07/5142502030/Regular%20T-Shirts%20font%20copy1.jpg","23.99$","16.99$","GORDON Regular T-shirt"],
    items8:["-70%","https://zandokh.com/image/catalog/products/2025-07/5132411057/ZANDO01.07.20250940.jpg","15.99$","6.99$","Casual Slim Fit Trouser"],
    items9:["-50%","https://zandokh.com/image/catalog/products/2025-11/4122507453/White%20(5).jpg","17.99$","8.99$","Ribbed Trim Polo Shirt"]
};


const womenItems = {
    item1:["https://zandokh.com/image/catalog/products/2025-11/12225051351/ZD__5463.jpg","20.99$","Wide Leg Trousers"],
    item2:["https://zandokh.com/image/catalog/products/2025-11/3222510632/TAKK6716.jpg","15.99$","Midi Slit Skirt"],
    item3:["https://zandokh.com/image/catalog/products/2025-10/4222506152/10F25SHSW005_White%20(1).jpg","13.99$","Half Sleeves Shirts"],
    item4:["https://zandokh.com/image/catalog/products/2025-08/4122505303/10S25SHLW009_Black%20(1).jpg","10.99$","Cropped Karo Shirts"],
    item5:["https://zandokh.com/image/catalog/products/2025-11/12225081729/ZD__3930.jpg","16.99$","Baggy Straight Fit Jean"],
    item6:["https://zandokh.com/image/catalog/products/2025-10/12225081806/ZD__2332.jpg","17.99$","Straight Leg Cargo Jean"],
    item7:["https://zandokh.com/image/catalog/products/2025-09/4222505128/10S25DPAW027_White%20Blue%20(4).jpg","15.99$","Relaxed Denim Jeans"],
    item8:["https://zandokh.com/image/catalog/products/2025-09/4222506124/10F25JACW003_Beige%20(1).jpg","12.99$","Regular Jackets With Pockets"],
    item9:["https://zandokh.com/image/catalog/products/2025-10/4222507002/10F25TSSW012_Raven%20(1).jpg","14.99$","Regular Textured T-Shirts"],
    item10:["https://zandokh.com/image/catalog/products/2025-08/4222505099/10F25TSLW005_Melange%20Grey%20(1).jpg","6.99$","Regular Fitted T-Shirts"],
    item11:["https://zandokh.com/image/catalog/products/2025-10/4222507162/10F25SKIW018_LGrey%20(1).jpg","15.99$","Mini Pleat Skirts"],
    item12:["https://zandokh.com/image/catalog/products/2025-09/3222508609/ZD__6643.jpg","20.55$","Maxi Cotton Button Skirt"],
    item13:["https://zandokh.com/image/catalog/products/pomelo/6222505368/1277224.jpg","11.99$","Ruffled Collar Knit Top"],
    item14:["https://zandokh.com/image/catalog/products/pomelo/6222505340/1200116.jpg","15.99$","Polo Dress"],
    item15:["https://zandokh.com/image/catalog/products/2025-08/4222503070/10S25PCAW006_Rainy%20Day%20(1).jpg","18.99$","Wide Leg Denim Jean"],
    item16:["https://zandokh.com/image/catalog/products/2025-06/12225051336/ZANDO03.06.20252350.jpg","24.99$","Wide Straight Denim Jean"],
    item17:["https://zandokh.com/image/catalog/products/2025-11/12225101892/ZD__0115.jpg","17.99$","Straight Fitted Cargo Trousers"],
    item18:["https://zandokh.com/image/catalog/products/2025-11/12225101883/TAKK7499.jpg","15.99$","Side Pockets Midi Skirt"]

};

const womenDiscountItems = {
    items1:["-50%","https://zandokh.com/image/catalog/products/2025-04/22224111108/AFTERNOON15371.jpg","9.99$","19.99$","Straight Fit Jeans"],
    items2:["-30%","https://zandokh.com/image/catalog/products/2025-05/4222501097/10S25KNIW003_Off-white-(1).jpg","14.99$","20.99$","Regular Knitted Cropped Polo Shirt"],
    items3:["-50%","https://zandokh.com/image/catalog/products/2025-10/4222506121/10F25VESW008_LGrey%20(1).jpg","20.99$","10.99$","Cropped Blazer"],
    items4:["-50%","https://zandokh.com/image/catalog/products/2025-11/3222510632/TAKK6715.jpg","15.99$","6.99$","Midi Slit Skirt"],
    items5:["-30%","https://zandokh.com/image/catalog/products/2025-04/22224111108/AFTERNOON15371.jpg","20.99$","15.99$","Flared Fitted Trouser"],
    items6:["-30%","https://zandokh.com/image/catalog/products/2025-10/4222506135/10F25SHLW015_GREY-(1).jpg","22.99$","16.99$","Regular Textured Shirts"],
    items7:["-50%","https://zandokh.com/image/catalog/products/2025-10/4222505132/10F25SKIW015_GREY%20(4).jpg","21.99$","11.99$","Mini Pleat Skirts"],
    items8:["-50%","https://zandokh.com/image/catalog/products/pomelo/6222505041/1178236.jpg","15.99$","7.99$","Button-Up Knit Top"],
    items9:["-70%","https://zandokh.com/image/catalog/products/2025-11/4222506122/Pink%20(2).jpg","12.99$","4.99$","Regular T-Shirt"]
};

function renderItems(containerId, itemsObj, isDiscount=false) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    Object.values(itemsObj).forEach(item => {
        const div = document.createElement("div");
        div.className = isDiscount ? "w col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12" : "s col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12";
        div.innerHTML = `
            ${isDiscount ? `<p class="discount-label">${item[0]}</p>` : ""}
            <img src="${item[isDiscount?1:0]}">
            <div style="margin-left: 3px; color: rgb(207, 25, 43); margin-top:5px;">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
            </div>
            <div class="d-flex justify-content-between ms-3 me-3" style="font-family: sans-serif;">
                <div class="d-flex gap-1">
                    <p style="font-size: 18px; color: red;">${item[isDiscount?2:1]}</p>
                    ${isDiscount ? `<del style="font-size: 18px; color: rgb(39, 30, 30);">${item[3]}</del>` : ""}
                </div>
                <i style="font-size: 18px;" class="fa-solid fa-cart-shopping"></i>
            </div>
            <p style="font-size: 18px; font-family: sans-serif; margin-left: 15px; padding-bottom: 10px;">
                ${item[isDiscount?4:2]}
            </p>
        `;

        div.addEventListener("click", () => {
            document.getElementById("modal").style.display = "flex";
            document.getElementById("modal-img").src = item[isDiscount?1:0];
            document.getElementById("modal-title").textContent = item[isDiscount?4:2];
            document.getElementById("modal-price").textContent = item[isDiscount?2:1];
        });
        container.appendChild(div);
    });
}


renderItems("sh", menItems);
renderItems("sh1", menDiscountItems, true);
renderItems("wo", womenItems);
renderItems("wo1", womenDiscountItems, true);


document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});