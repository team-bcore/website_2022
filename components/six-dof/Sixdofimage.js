import Image from "next/image";

export default function Sixdofimage() {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative">
        <Image
          className="contain"
          src="/images/Sixdof/6d-image.png" // Route of the image file
          height={773} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="6Dofイメージ"
        />
        
      </div>
    </div>
  );
}
