import Image from "next/image";

export default function Features1() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <a
                        href="/"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-400">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                            </svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-3xl font-noto leading-none text-slate-800">
                        入庫から出庫までの記録が全て自動化されるので、在庫管理が一括でできます
                    </h5>
                    <p className="mb-6 text-gray-900 font-ud">
                        置き方のルールに縛られることなく、空いているスペースにモノを置くだけでカメラがしっかりと記録します。
                        <br></br>
                        作業員はピッキング作業以外のことを意識しなくても良くなり、現場に慣れていないスタッフでも、在庫管理業務ができるのでスムーズに作業を進めることができます
                    </p>
                    <hr className="mb-5 border-gray-300" />
                </div>
                <div>
                <Image
                        className="rounded"
                        src="/images/Mono/Feature1.png" // Route of the image file
                        height={1212} // Desired size with correct aspect ratio
                        width={2763} // Desired size with correct aspect ratio
                        alt="モノ常時管理イメージ"
                    />
                </div>
            </div>
        </div>
        

        
    );
}