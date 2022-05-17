import Image from "next/image";


export default function Header() {
    return (

        <div className="bg-hero-monomonitoring bg-no-repeat bg-cover relative flex flex-col-reverse px-4 py-24 mx-auto lg:block lg:flex-col lg:py-32 xl:py-40 2xl:py-64 md:px-8 sm:max-w-xl md:max-w-full">
            <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            <Image
                        className="rounded"
                        src="/images/Mono/Top.png" // Route of the image file
                        height={1080} // Desired size with correct aspect ratio
                        width={1920} // Desired size with correct aspect ratio
                        alt="モノ常時管理イメージ"
                    />
            </div>
            <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
                <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                彩色兼備ソリューション
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 text-4xl font-noto text-slate-800 sm:text-4xl sm:leading-none">
                            モノ常時管理システム
                        </h2>
                        <p className="text-base text-gray-800 font-ud md:text-lg">
                        IoTカメラがモノ（在庫）を24時間365日見まもることで、人の手に頼らない<span className="text-indigo-500 underline decoration-slate-800">在庫管理の自動化</span>が実現できます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}