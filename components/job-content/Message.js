import Image from "next/image";


export default function Message() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
            <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    トップからのメッセージ
                </h2>
                <hr className="w-full my-8 border-gray-300" />
            </div>
            <div className="py-16 grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        タイトル
                    </h5>
                    <p className="pt-6 font-ud text-lg text-gray-900 md:text-xl">
                    ビーコア株式会社 代表取締役
                    <br></br>水野廉郎
                    </p>
                    <p className="pt-6 mb-6 text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>
        </div>

    );
}