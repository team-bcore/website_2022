export default function Steps() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-2xl mx-auto">
        <h2 className="mb-4 font-noto text-slate-800 sm:text-4xl sm:leading-none">
          システム導入までのステップ
        </h2>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 opacity-0 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                1
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-400 sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-white sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">
                端末の準備・アプリのインストール
              </p>
              <p className="text-sm font-ud text-gray-700">
                iPhone端末を用意していただき、App
                Storeより『彩色兼備』アプリをインストールしてください。
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                2
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-400 sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-white sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">お申し込み</p>
              <p className="text-sm font-ud text-gray-700">
                お問い合わせフォームからお問い合わせください。申込書をお送りしますので、ご記入の上ご返送ください。
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                3
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-400 sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-white sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">データの受け取り</p>
              <p className="text-sm font-ud text-gray-700">
                ビーコアがお客様に個社向けドキュメント/タグ電子データ/ログインアカウント等を送付します。
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                4
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-400 sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-white sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">商品登録・タグ付け</p>
              <p className="text-sm font-ud text-gray-700">
                商品登録・タグ付けをしていただきます。※タグを電子データではなくシールにして提供することも可能です。（有償）
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                5
              </div>
            </div>
            <div className="w-px h-full opacity-0" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-400 sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-white sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">ご利用開始</p>
              <p className="text-sm font-ud text-gray-700">
                お申し込みから３営業日で、ご利用を開始できます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
