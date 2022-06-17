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
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">ご依頼</p>
              <p className="text-sm font-ud text-gray-700">
                お問い合わせフォームよりご依頼ください。
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
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">ヒアリング</p>
              <p className="text-sm font-ud text-gray-700">
                導入の目的や用途をお聞きするとともに、導入先の設置レイアウトなどを確認します。
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
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">
                概算見積もり・詳細仕様の検討
              </p>
              <p className="text-sm font-ud text-gray-700">
                システム導入にあたっての予算化を行い、現地での簡易検証を行います。
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
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">正式見積もり</p>
              <p className="text-sm font-ud text-gray-700">
                システムの導入・設置に向けて、正式な発注をいただきます。
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
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xl font-ud sm:text-base">ご利用開始</p>
              <p className="text-sm font-ud text-gray-700">
                システムの動作確認を経て、現地調査から最短で１ヶ月程度で導入可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
