function NavBar() {
    return (
        <>
            <div className="bg-white shadow-md p-4">
                <nav className="flex justify-between items-center max-w-6xl mx-auto">
                    {/* Swiggy icon or logo */}
                    <h1 className="text-xl font-bold text-orange-500">
                        Swiggy
                    </h1>

                    {/* Nav items */}
                    <ul className="flex gap-6 text-gray-700 font-medium">
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                            <span>🔍</span>
                            <span>Search</span>
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                            <span>🏷️</span>
                            <span>Offers</span>
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                            <span>❓</span>
                            <span>Help</span>
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                            <span>👤</span>
                            <span>Sign In</span>
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                            <span>🛒</span>
                            <span>Cart</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
