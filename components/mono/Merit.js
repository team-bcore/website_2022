import Image from "next/image";

export default function Merit() {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
                    モノ管理システムの特徴
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                </p>
                <Image
                    className="rounded"
                    src="/images/Mono/mono-image.png" // Route of the image file
                    height={1080} // Desired size with correct aspect ratio
                    width={1920} // Desired size with correct aspect ratio
                    alt="モノ管理システムイメージ"
                />
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </svg>
                    </div>
                    <h6 className="mb-2 font-noto text-xl leading-5">一元管理</h6>
                    <p className="font-ud text-base text-gray-700 md:text-base">複数の端末で読み取ったデータはクラウド上で一元管理されます。※オンプレ利用も別途対応可能</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </svg>
                    </div>
                    <h6 className="mb-2 font-noto text-xl leading-5">iPhone</h6>
                    <p className="font-ud text-base text-gray-700 md:text-base">お手持ちのiPhoneを利用できるので、専用端末は不要です。ハードウェア費を抑えられます。</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </svg>
                    </div>
                    <h6 className="mb-2 font-noto text-xl leading-5">直感的なUI</h6>
                    <p className="font-ud text-base text-gray-700 md:text-base">アプリは直感的に操作できます。データ保存、送信もOne-Tapで行ないます。</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </svg>
                    </div>
                    <h6 className="mb-2 font-noto text-xl leading-5">セキュリティ</h6>
                    <p className="font-ud text-base text-gray-700 md:text-base">専用アプリでのみ読み取り可能です。データ保存先は信頼性の高いAWSです。</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </svg>
                    </div>
                    <h6 className="mb-2 font-noto text-xl leading-5">データ連動</h6>
                    <p className="font-ud text-base text-gray-700 md:text-base">既存の商品データベースとAPI連携することが可能です。CSV出力にも対応しています。</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </svg>
                    </div>
                    <h6 className="mb-2 font-noto text-xl leading-5">一括読み取り</h6>
                    <p className="font-ud text-base text-gray-700 md:text-base">複数のタグをまとめて素早く読み取ることができます。※モノの位置検索も可能</p>
                </div>
            </div>
        </div>
    );
}