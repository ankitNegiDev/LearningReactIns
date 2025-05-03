import { useState, useEffect } from "react";
import Card from "./Card";

import apiCalling from "./apicalling";

function Body() {
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(function callback() {
        apiCalling(setRestaurantDetails);
    },[]);

    console.log("restruent deetails : ",restaurantDetails);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Food Delivery
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {restaurantDetails.map(function (rest, index) {
                    return (
                        <Card
                            key={index}
                            name={rest.info.name}
                            rating={rest.info.avgRating}
                            time={rest.info.sla.deliveryTime + " mins"}
                            category={rest.info.cuisines.join(", ")}
                            location={rest.info.locality}
                            image={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/" +
                                rest.info.cloudinaryImageId
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Body;
