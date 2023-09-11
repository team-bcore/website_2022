export default function Intro() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="pt-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              カラービット®︎
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 font-ud text-base text-gray-700">
            カラービットとは、ビーコア株式会社が独自に開発した自動認識コードです。バーコードやQRコードと比較すると、歪みに強く、悪条件でも均質に読み取りすることができます。また複数のコードの同時一括読み取り性能にも優れています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
