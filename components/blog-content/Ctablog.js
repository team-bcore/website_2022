import Image from "next/image";
import Link from "next/link";

export default function Ctablog() {
  return (
    (<div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <Image
          className=""
          src="/images/Blog/bcore-blog-cta.png" // Route of the image file
          height={1400} // Desired size with correct aspect ratio
          width={1750} // Desired size with correct aspect ratio
          alt="CTA-blog"
        />
        <div className="flex items-center mb-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-600 hover:bg-gray-500 focus:shadow-outline focus:outline-none font-ud">
            
              お問い合わせをする
            
          </Link>
        </div>
      </div>
    </div>)
  );
}
