// Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sloth. All rights reserved.</p>
                    <p className="mt-2">This website is for demonstration purposes only.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer