import Image from "next/image";

export default function Patent() {
    return (
        <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
            <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    特許情報
                </h2>
                <hr className="w-full my-8 border-gray-300" />
                <div className="text-left">
                    <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
                    国際特許
                    </p>
                    <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
                    特許4404224（カラービット基本特許）<br></br>米国・欧州（英・独・仏・スペイン）・ロシア・中国・韓国　で取得済み
                    </p>
                    <hr className="w-full my-4 border-gray-300" />
                    <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
                        国内特許
                    </p>
                    <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
                    特許4404224号 2009年11月13日登録（カラービット基本パテント）<br></br>-光学式認識コード認識装置及び方法及びプログラム<br></br><br></br>
                    特許4409595号 2009年11月20日登録<br></br>-光学式認識コードおよびそのマーキング方法及びその読み取り方法、並びに、光学式認識コードをマーキングした物品<br></br><br></br>
                    特許5155063号 2012年12月14日登録<br></br>-発光装置及び対象物の追尾方法<br></br><br></br>
                    特許5537841号 2014年5月9日<br></br>-発光体および受光体及び関連する方法<br></br><br></br>
                    特許5812550号 2015年10月2日登録<br></br>-画像表示装置、画像表示方法およびプログラム（三次元AR）<br></br><br></br>
                    特許6008333号 2016年9月23日登録<br></br>-光学式認識コード読取装置、光学式認識コード読取方法、プログラム及び光学式認識コード<br></br><br></br>
                    特許5928969号 2016年5月13日登録<br></br>-画像処理システム、発光装置、画像処理装置、画像処理方法、発光方法及びプログラム<br></br><br></br>
                    特許6476031号 2019年2月8日登録<br></br>-画像投影装置、画像投影方法及びプログラム（モバイルプロジェクションマッピング）
                    </p>
                    <hr className="w-full my-4 border-gray-300" />
                   
                </div>
            </div>
        </div>
    );
}