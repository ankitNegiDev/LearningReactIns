
import axios from "axios";
async function apiCalling(setRestaurantDetails) {
    try {
        const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const response = await axios.get(API);
        // let data1=[];
        // let data2=[];
        let combinedData=[];
        // data1 = console.log(typeof response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        // it return the object...
        /*
        data1 = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants;

        data2 = response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
        console.log("data 1 is : ",data1);
        console.log("data 2  is ----> ",data2);
        combinedData=[...data1,...data2];

        console.log("type of combined data: \n",typeof combinedData);
        console.log("combinaed data is : ",combinedData);
        
        setRestaurantDetails(combinedData);
        */

        for(let i=1; i<=30; i++){
            let tempArr=[];
            tempArr = response.data?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle.restaurants;
            // combinedData=[...combinedData,...tempArr];
            if (Array.isArray(tempArr)) {
                combinedData = [...combinedData, ...tempArr];
            }

            console.log("combinaed data is : ", combinedData);
        }
        setRestaurantDetails(combinedData);


    } catch (err) {
        console.log("Error fetching data:", err);
    }
}
export default apiCalling;





// const card = response.data.data.cards[i];
// const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
// console.log("restru",restaurants);
// restruents is object..
// if (restaurants) {
//     data = data.push(...restaurants);
//     console.log("data is : ",data);
// }
// }