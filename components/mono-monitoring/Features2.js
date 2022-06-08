import Image from "next/image";

export default function Features2() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Image
            className="rounded"
            src="/images/Monom/Feature2.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="モノ常時管理イメージ"
          />
        </div>
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-400">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              ></svg>
            </div>
          </a>
          <h5 className="mb-4 text-3xl font-noto leading-none text-slate-800">
            モノの場所・移動を管理画面でリアルタイムにチェックできるので、大幅な時間短縮につながります
          </h5>
          <p className="mb-6 text-gray-900 font-ud">
            モノの場所・移動の把握は管理画面でチェックできます。入庫・取り出し・移動の情報をリアルタイムに記録し、クラウドで共有します。
            <br></br>
            探し物があった場合も、管理画面で確認してから取りに行けるので、大幅な時間短縮になります。
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
      </div>
    </div>
  );
}
