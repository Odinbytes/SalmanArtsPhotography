import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Navbar />
      <h1 className="text-5xl font-bold mt-20">Salman Arts Photography</h1>
      <p className="text-lg mt-4">Capturing moments, telling stories.</p>
      <a href="/booking" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Book a Session
      </a>
    </div>
  );
}
