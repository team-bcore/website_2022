import Image from "next/image";


export default function Hero() {
  return (
    <div className="bg-Job-hero bg-cover xl:bg-no-repeat">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 pt-16 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-noto text-4xl font-bold leading-none tracking-tight text-amber-400 sm:text-5xl md:mx-auto">
                ビーコアではたらく
              </h2>
              <p className="pt-16 text-base font-ud text-white md:text-lg">
              ビーコアは、あなたのキャリアに必要な<br></br>技術や経験を身に付けることができる環境です。<br></br>経験者はもちろん、熱意のある未経験者も積極的に採用しています。<br></br><br></br>私たちと一緒に、テクノロジーで現場の課題を解決し、<br></br>あなたの人生を豊かなものにしていきませんか。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}

