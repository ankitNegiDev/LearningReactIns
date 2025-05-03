// import axios from "axios"
// import { useEffect } from "react";

// function ApiCalling() {

//     const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"


//     useEffect(function callback() {
//         async function call() {
//             let response = await axios.get(API);
//             console.log("response is : ", response);
//             // let ans=response.data;
//             // console.log("anss is : response .data",response.data);
//             let ans1 = response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
//             console.log("ans1 is : ",ans1);
//         }
//         call();
//     })


//     return(
//         <>
//             <h1>love</h1>
//         </>
//     );
// }
// // export default ApiCalling;