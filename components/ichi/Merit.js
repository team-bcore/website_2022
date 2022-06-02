import Image from "next/image";

export default function Merit() {
    return (
        <div className="bg-gray-100">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                    <svg
                        viewBox="0 0 88 88"
                        className="w-full max-w-screen-xl text-teal-100"
                    >
                        <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="44"
                        />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="37.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="29.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="22.5"
                        />
                    </svg>
                </div>
                <h2 className="text-center max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        彩色兼備 位置管理システムができること
                        <span className="relative"></span>
                    </span>{' '}

                </h2>
                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-teal-300">
                                <svg
                                    className="w-8 h-8 text-white"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-noto text-xl">常時監視</p>
                            <p className="font-ud text-base leading-5 text-gray-900">
                                24時間365日IoTカメラがエリアを見守るので、現場の作業員の負担を大幅に軽減できます。
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-teal-300">
                                <svg
                                    className="w-8 h-8 text-white"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-noto text-xl">リアルタイムに見える化</p>
                            <p className="font-ud text-base leading-5 text-gray-900">
                                リアルタイムに各エリアの状況を見える化するので、最新の状況がチェックできます。
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-teal-300">
                                <svg
                                    className="w-8 h-8 text-white"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-noto text-xl">集中管理</p>
                            <p className="font-ud text-base leading-5 text-gray-900">
                                最新の状況はどこからでもチェック可能。複数のエリアを集中管理できます。
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-teal-300">
                                <svg
                                    className="w-8 h-8 text-white"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-noto text-xl">高精度な位置測位</p>
                            <p className="font-ud text-base leading-5 text-gray-900">
                                周辺環境の影響を受けにくいので広い空間でも数センチの範囲で測位を実現できます。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-16">
                <Image
                        className="rounded"
                        src="/images/Ichi/Propose.png" // Route of the image file
                        height={1080} // Desired size with correct aspect ratio
                        width={1920} // Desired size with correct aspect ratio
                        alt="位置管理システムイメージ"
                    />
                </div>         
            </div>
        </div>
    );
}