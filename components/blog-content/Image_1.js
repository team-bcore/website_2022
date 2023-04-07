import Image from "next/image";

export default function Image_1() {
  return (
    <div className="">
      <Image
        className=""
        src="/images/Blog/2023-0407/kopachin.png" // Route of the image file
        height={1244} // Desired size with correct aspect ratio
        width={3460} // Desired size with correct aspect ratio
        alt="東京都交響楽団"
      />
      <p className="text-right font-ud lg:text-base text-gray-700 md:text-xs sm:text-sm">
        写真引用元：東京都交響楽団
      </p>
    </div>
  );
}
