export default function Intro() {
  return (
    <div className="bg-sixdof-vrk-bg bg-no-repeat bg-cover -mt-4">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-xl mb-6 font-noto text-2xl font-bold leading-none tracking-tight text-slate-100 sm:text-3xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative"></span>
            </span>{" "}
            カラービット®️が印刷されたタグ（標識）をAIカメラが読み取ることで移動体の位置測位をします
          </h2>
          <p className="font-ud text-lg text-gray-100 md:text-lg">
            彩色兼備6DoFは、AIカメラ内で姿勢計算を行うことで、移動体の自己位置計測を行う技術です。電波や超音波を利用した技術では難しい、数センチの誤差での高精度な移動体の位置測位を実現できます。
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-orange-500">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="text-lg mb-2 font-ud leading-5 text-slate-100">
              移動体の動線チェックができます
            </h6>
          </div>
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-orange-500">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="text-lg mb-2 font-ud leading-5 text-gray-100">
              正確な位置がほぼリアルタイムで分かります
            </h6>
          </div>
          <div className="p-5 duration-300 transform border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-orange-500">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="text-lg mb-2 font-ud leading-5 text-slate-100">
              低コストで導入できます
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
