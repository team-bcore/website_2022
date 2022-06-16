import Image from "next/image";

export default function Office() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          オフィスとラボの紹介
        </h2>
        <p className="font-noto text-gray-900 text-2xl sm:px-4">オフィス</p>
        <p className="font-ud text-base text-gray-700 md:text-lg sm:px-4">
          ビーコアは東京・西神田にある、昔ながらのビルにオフィスを構えています。オフィス近くには自家焙煎が自慢のカフェや、いつも行列が絶えないラーメン屋さんなど、たくさんの有名店があり活気があります。
        </p>
        <Image
          className="rounded"
          src="/images/Company/office.JPG" // Route of the image file
          height={2016} // Desired size with correct aspect ratio
          width={1512} // Desired size with correct aspect ratio
          alt="オフィスイメージ"
        />
        <hr className="w-full my-8 border-gray-300" />
        <p className="font-noto text-gray-900 text-2xl sm:px-4">ビーコアラボ</p>
        <p className="pt-4 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          ビーコアは、エンジニアたちが快適で仕事に集中できる環境を整えることが第一と考え、製作や実験の拠点をオフィス周辺に独自のラボを開設しました。
        </p>
        <Image
          className="rounded"
          src="/images/Company/view.JPG" // Route of the image file
          height={3024} // Desired size with correct aspect ratio
          width={4032} // Desired size with correct aspect ratio
          alt="オフィス周辺イメージ"
        />
        <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          カメラを使った検証では、遠くからカラービットを読み取る必要があるため奥行きのある空間が必須。
        </p>
        <Image
          className="rounded"
          src="/images/Company/lab-1.JPG" // Route of the image file
          height={3024} // Desired size with correct aspect ratio
          width={4032} // Desired size with correct aspect ratio
          alt="ラボ"
        />
        <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          落ち着いた環境で作業に集中できる。
        </p>
        <Image
          className="rounded"
          src="/images/Company/lab-2.JPG" // Route of the image file
          height={3024} // Desired size with correct aspect ratio
          width={4032} // Desired size with correct aspect ratio
          alt="ラボ"
        />
        <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          エンジニアこだわりの空間づくり。特に照明に力を入れている。{" "}
        </p>
        <Image
          className="rounded"
          src="/images/Company/lab-3.JPG" // Route of the image file
          height={3024} // Desired size with correct aspect ratio
          width={4032} // Desired size with correct aspect ratio
          alt="ラボ"
        />
      </div>
    </div>
  );
}
