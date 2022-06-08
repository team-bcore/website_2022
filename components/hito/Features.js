import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-gradient-to-b from-sky-300 via-teal-100 to-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              彩色兼備ソリューション
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">入退室管理システムの特徴</span>
            </span>{" "}
          </h2>
          <p className="text-base font-ud text-gray-700 md:text-lg">
            彩色兼備
            入退室管理システムの導入で、現場への不正な侵入を防ぎ、入退室の履歴を記録することで、取引先や従業員から信頼される安心安全な環境を実現できます。
          </p>
          <Image
            className="rounded"
            src="/images/Hito/Features.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="HACCPイメージ"
          />
        </div>

        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/vrk.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    AIカメラ「ビューレカ」
                    <br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    パナソニックのAIカメラを採用。画像処理PC、オンプレサーバーなどのハードウエアは不要です。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/nocard.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    カードをタッチする必要なし・立ち止まらないで認証できる
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    電子タグやQRコードのようにリーダーに入館証を近づける必要はありません。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/LAN.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    簡単な維持管理<br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    故障時はカメラ交換だけでOK。復旧もLANケーブルを挿し直すだけ。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/recording.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    ドア通過前後の画面保存ができる<br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    ドア通過時の画像データは入退室データと紐づいているので、入退室時の状況が簡単に確認できます。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/compatible.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    今あるドア・勤怠管理システムと共存できる
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    既存ドアに設置された電気錠と連動させてドア解錠を行うことが可能です。既存の勤怠管理システムでも入退記録を利用することができます。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/sharing.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    リアルタイムに一元管理&データ共有
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    入退室データは即時にクラウドに反映。いつでもリアルタイムなデータ確認ができます。複数拠点をまたがった入退室状況や在室状況を簡単に管理、共有できます。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/setting.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    細かい権限設定<br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    拠点と人にそれぞれの属性を付与し、マトリクス形式による権限を細かく設定できます。
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/designed_tag.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    布製カラービット・タグ<br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    さまざまなデザインタグを作成可能。ユニフォームや帽子に貼り付ける布製タグが作成できます。
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
