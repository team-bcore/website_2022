import Image from "next/image";

export default function CommentEW() {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className="pt-4 text-center font-ud text-lg text-gray-900 md:text-xl">
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
                        会社の気質はまさにベンチャーの良い面が出ていると思います。<br></br>
                        成果が出るように仕事しつつ、余った時間で面白いことや新しい開発をしながら、それを案件につなげてもらったりするなど、自由に仕事をやらせてもらっています。<br></br>
                        仕事においてモチベーションは大事です。モチベーションを上げるために傍から見たら意味ないことをしてたとしても、会社のメンバーはしっかり理解してくれます。おかげで自由で柔軟な開発ができてるんだと思ってます。<br></br>
                        僕はプログラムメインで仕事してますが、案件で模型実験のためのモックアップを作ることもあります。人数が少ないこともあり、やることは多いと思いますがその反面、仕事がすぐに成果として現れるので満足度は高いです。<br></br>
                        なお、やること多くてもちゃんと早く家に帰れるのでプライベートな時間もしっかりとれます。これ、とても重要なことです。
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
                <div className="pt-16 order-first sm:order-last lg:pr-10">
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
                    <h5 className="text-gray-800 mb-3 text-2xl font-noto leading-none sm:text-3xl sm:break-words">
                        渡邉　友浩　Tomohiro Watanabe
                    </h5>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-gray-700 font-ud">
                        「できるか分からないけど、チャレンジしてみよう」これができる社風です。<br></br>個人の裁量は大きくなりますが、日々メンバーで行われる意見交換でやってみたいものがあれば即行動。そのため社内のスピード感はすごいです。（本当に早い笑）<br></br>ビーコアならではの経験ができます。
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
