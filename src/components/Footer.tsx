import Link from "next/link";
export default function Footer() {
    return (
      <footer className="py-6 px-6 bg-gray-900 bg-header">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-2xl">
          <div className="flex mb-4">
          <Link href="#" className="mr-4 hover:bg-black hover:text-white hover:bg-gray-200 hover:rounded-full transition duration-300 p-2">
            <i className="fab fa-facebook-f"></i>
          </Link>
            <Link href="#" className="mr-4 hover:bg-black hover:text-white hover:bg-gray-200 hover:rounded-full transition duration-300 p-2">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="mr-4 hover:bg-black hover:text-white hover:bg-gray-200 hover:rounded-full transition duration-300 p-2">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
          <p className='text-center text-lg mb-2'>Copyright &apos; 2023 | Emerald&apos;s Weather | Brigham Young University - Idaho.</p>
          <div className="text-center text-lg">
            <Link href="#" className='text-gray-400 hover:bg-black hover:text-white hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 mx-2 md:mx-2'>Privacy Policy</Link>
            <Link href="#" className='text-gray-400 hover:bg-black hover:text-white hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 mx-2 md:mx-2'>Terms of Service</Link>
            <Link href="#" className='text-gray-400 hover:bg-black hover:text-white hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 mx-2 md:mx-2'>Contact Us</Link>
          </div>
        </div>
            </footer>
        );
        };
  