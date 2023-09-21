import Image from "next/image";

export default function Sixdofimage() {
  return (

      <div className="bg-gray-900">
        <Image
          className="object-cover"
          src="/images/Sixdof/6dof3.png" // Route of the image file
          height={595} // Desired size with correct aspect ratio
          width={1905} // Desired size with correct aspect ratio
          alt="6Dofイメージ"
        />
      </div>
  
  );
}
