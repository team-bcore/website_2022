import Image from "next/image";

export default function CommentEW() {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className="pt-8 text-center font-ud text-base text-gray-900 md:text-lg">
                ビーコアのメンバーが経験してきた仕事、それぞれの働き方や価値観などを知ることができます。
            </p>
            <div className="py-16 grid gap-10 lg:grid-cols-2">
                <div className="pt-4 lg:pr-10">
                    <div className="">
                        <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-amber-300">
                            スタッフからのメッセージ#1
                        </p>
                    </div>
                    <p className="pt-8 mb-3 font-ud text-gray-800 text-lg">マスターエンジニア</p>
                    <h5 className="text-gray-800 mb-3 text-2xl font-noto leading-none sm:text-3xl">
                        田中　葉　Yo Tanaka
                    </h5>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-gray-700 font-ud">
                        例：社長含め、社員全員とコミュニケーション
                        がとてもとりやすい環境です。
                        自分の意見や要望を直接伝えることができますし、
                        分からないことがあれば、経験豊富な先輩たちに
                        直接相談することができます。
                        徹底したサポートがあるので、今はチームで作業を
                        することにとてもやりがいを感じています。
                        おすすめの本やブログ、最新技術についての情報
                        交換や、イベント・セミナーの紹介など、社内で
                        の情報共有も活発に行われていて、自分の専門分
                        野に関わらず、常に新しい情報に触れることがで
                        きます。
                    </p>
                </div>
                <div className="pt-8 drop-shadow-lg">
                    <Image
                        className="rounded shadow-lg sm:h-96 xl:h-24"
                        src="/images/Job/staff-1.jpeg" // Route of the image file
                        height={2419} // Desired size with correct aspect ratio
                        width={3024} // Desired size with correct aspect ratio
                        alt="エンジニア1"
                    />
                </div>
            </div>
            <div className="py-16 grid gap-10 lg:grid-cols-2">
                <div className="pt-8 drop-shadow-lg">
                    <Image
                        className="rounded shadow-lg sm:h-96 xl:h-24"
                        src="/images/Job/staff-2.jpeg" // Route of the image file
                        height={2419} // Desired size with correct aspect ratio
                        width={3024} // Desired size with correct aspect ratio
                        alt="エンジニア2"
                    />
                </div>
                <div className="pt-16 lg:pr-10">
                    <div className="">
                        <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-amber-300">
                            スタッフからのメッセージ#2
                        </p>
                    </div>
                    <p className="pt-8 mb-3 font-ud text-gray-800 text-lg">チーフエンジニア</p>
                    <h5 className="text-gray-800 mb-3 text-2xl font-noto leading-none sm:text-3xl">
                        飯島　圭一朗　Keiichiro Iijima
                    </h5>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-gray-700 font-ud">
                        前職では日々の運用業務に忙殺され、たまの休日に遊びに出掛ければ障害で呼び出される生活でした。<br></br>
                        そんな中、面接に訪れた企業の1つがビーコア。面接では社員全員とお話しする機会を頂き、全員がイキイキとしているビーコアに魅力を感じ入社しました。<br></br>
                        先端技術を持った、尖った技術陣の中で自身の能力をビーコアでどのように生かせば良いか。それが入社後の最初の悩みでした。<br></br>
                        それから早4年。社員全員が同じ方向を向き、一枚岩となって全力で取り組む企業風土のビーコアではそんな悩みは杞憂です。
                        悩みがあれば（プライベートのことでも）気軽に相談し、互いに足りない部分を補足しあうことが出来るオープンな企業です。
                    </p>
                </div>
            </div>
            <div className="py-16 grid gap-10 lg:grid-cols-2">
                <div className="pt-16 lg:pr-10">
                    <div className="">
                        <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-amber-300">
                            スタッフからのメッセージ#3
                        </p>
                    </div>
                    <p className="pt-8 mb-3 font-ud text-gray-800 text-lg">エンジニア</p>
                    <h5 className="text-gray-800 mb-3 text-2xl font-noto leading-none sm:text-3xl">
                        渡邉　友浩　Tomohiro Watanabe
                    </h5>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-gray-700 font-ud">
                        例：社長含め、社員全員とコミュニケーション
                        がとてもとりやすい環境です。
                        自分の意見や要望を直接伝えることができますし、
                        分からないことがあれば、経験豊富な先輩たちに
                        直接相談することができます。
                        徹底したサポートがあるので、今はチームで作業を
                        することにとてもやりがいを感じています。
                        おすすめの本やブログ、最新技術についての情報
                        交換や、イベント・セミナーの紹介など、社内で
                        の情報共有も活発に行われていて、自分の専門分
                        野に関わらず、常に新しい情報に触れることがで
                        きます。
                    </p>
                </div>
                <div className="pt-8 drop-shadow-lg">
                    <Image
                        className="rounded shadow-lg sm:h-96 xl:h-24"
                        src="/images/Job/staff-3.jpeg" // Route of the image file
                        height={2419} // Desired size with correct aspect ratio
                        width={3024} // Desired size with correct aspect ratio
                        alt="エンジニア3"
                    />
                </div>
            </div>
        </div>

    );
}
