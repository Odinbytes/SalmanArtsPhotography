export default function Navbar() {
    return (
      <nav className="w-full bg-gray-800 text-white p-4 fixed top-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Salman Arts</a>
          <div className="space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/portfolio" className="hover:text-gray-300">Portfolio</a>
            <a href="/booking" className="hover:text-gray-300">Booking</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  