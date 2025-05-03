function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Company */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Legal</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>

                {/* Social or App Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">
                        We deliver to:
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li>Noida</li>
                        <li>Delhi</li>
                        <li>Bangalore</li>
                        <li>Hyderabad</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Swiggy Clone. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
