import Image from "next/image";

export default function Intro() {
  return (
    <div className="bg-neutral-900 -mb-4">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500"></div>
            <h5 className="pt-8 mb-4 text-4xl font-noto leading-none text-gray-100">
              カラービット®︎
            </h5>
            <p className="mb-6 text-gray-100 font-ud">
              カラービットとは、ビーコア株式会社が独自に開発した自動認識コードです。バーコードやQRコードと比較すると、歪みに強く、悪条件でも均質に読み取りすることができます。また複数のコードの同時一括読み取り性能にも優れています。
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <Image
              className="rounded"
              src="/images/Home/colorbit.png" // Route of the image file
              height={969} // Desired size with correct aspect ratio
              width={1508} // Desired size with correct aspect ratio
              alt="カラービットイメージ"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
