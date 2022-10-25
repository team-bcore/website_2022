import Image from "next/image";


export default function Message() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
            <div className="py-16 grid gap-10 lg:grid-cols-2">
                <div className="pt-16 lg:pr-10">
                    <div className="">
                        <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-amber-300">
                            代表からのメッセージ
                        </p>
                    </div>
                    <p className="pt-8 mb-3 font-ud text-gray-800 text-lg">ビーコア株式会社 代表取締役社長</p>
                    <h5 className="text-gray-800 mb-3 text-2xl font-noto leading-none sm:text-3xl">
                        水野廉郎　Yasuro Mizuno
                    </h5>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-gray-700 font-ud">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="pt-8 drop-shadow-lg">
                    <Image
                        className="rounded shadow-lg sm:h-96 xl:h-24"
                        src="/images/Job/ceo.jpg" // Route of the image file
                        height={2651} // Desired size with correct aspect ratio
                        width={3535} // Desired size with correct aspect ratio
                        alt="CEO"
                    />
                </div>
            </div>
        </div>

    );
}