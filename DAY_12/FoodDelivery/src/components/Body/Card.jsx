function Card({ image, name, rating, time, category, location }) {
    return (
        <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={image} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                    <span>⭐ {rating}</span>
                    <span>{time}</span>
                </div>
                <p className="text-gray-700 mt-2">{category}</p>
                <p className="text-gray-500">{location}</p>
            </div>
        </div>
    );
}

export default Card;
