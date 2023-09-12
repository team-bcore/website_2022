
export default function Intro() {
  return (
<div className="bg-Propose-monomonitoring bg-no-repeat bg-cover">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-xl mb-6 font-noto text-2xl font-bold leading-none tracking-tight text-slate-800 sm:text-3xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative"></span>
            </span>{" "}
            カラービット®️が印刷されたタグ（標識）をAIカメラが読み取ることで移動体の位置測位をします
          </h2>
          <p className="font-ud text-lg text-gray-800 md:text-lg">
          彩色兼備6DoFは、AIカメラ内で姿勢計算を行うことで、移動体の自己位置計測を行う技術です。電波や超音波を利用した技術では難しい、数センチの誤差での高精度な移動体の位置測位を実現できます。
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400">
              <svg
                className="w-10 h-10 text-white"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="text-lg mb-2 font-ud leading-5 text-slate-800">
              移動体の動線チェックができます
            </h6>
          </div>
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400">
              <svg
                className="w-10 h-10 text-white"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="text-lg mb-2 font-ud leading-5 text-slate-800">
              正確な位置がほぼリアルタイムで分かります
            </h6>
          </div>
          <div className="p-5 duration-300 transform border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400">
              <svg
                className="w-10 h-10 text-white"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="text-lg mb-2 font-ud leading-5 text-slate-800">
             低コストで導入できます
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
