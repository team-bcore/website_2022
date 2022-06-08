export default function Faqs() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              彩色兼備 モノ管理システムについて
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">よくある質問</span>
            </span>{" "}
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-ud">
                お試しで利用したいがどうすれば良い？
              </p>
              <p className="font-ud text-gray-700">
                ご利用マニュアル・テストタグをダウンロードしてデモにお使いいただけます。デモサーバーも一緒にご利用希望の場合は、お問い合わせフォームよりご連絡ください。
                <ul className="list-disc">
                  <li className="hover:text-indigo-400"><a href="https://drive.google.com/uc?export=download&id=148Apka3IMP4-Md-qDNelxsW6HRQn8hEi">
                    彩色兼備〜モノ管理〜ご利用マニュアルデモ利用版</a></li>
                  <li className="hover:text-indigo-400"><a href="https://drive.google.com/uc?export=download&id=1XImlDLnqoA-KjcTpskZjj1NLelNvAezy">彩色兼備サンプルタグ枠あり</a></li>
                  <li className="hover:text-indigo-400"><a href="https://drive.google.com/uc?export=download&id=155GSTmqu2C7Y1ulP32HwJuMmesQKUW4n">彩色兼備モノサンプルタグ枠なしZT31176推奨</a></li>
                </ul>
                <p className="font-ud text-gray-700 text-sm">
                （ラベル印刷する際に、カット枠とズレる場合がございます。設定画面「ページサイズ処理」において「実際のサイズ」または、「カスタム倍率=100%」を選択ください。）
                </p>
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-ud">タグサイズを変更したい</p>
              <p className="font-ud text-gray-700">
                タグサイズの変更は可能です。ただし、親タグ子タグの張り替えが必要となります。
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-ud">
                タグ数が足りなくなったのでタグ数を増やしたい
              </p>
              <p className="font-ud text-gray-700">
                ご利用いただいているタグサイズのままで、タグ数を増やすことはできません。オプションプランの変更をすることで、タグ数を増加させることは可能です。
                <br></br>ただし、親タグ子タグの張り替えが必要となります。
                <br />
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-ud">タグサイズの混在は可能？</p>
              <p className="font-ud text-gray-700">
                タグサイズの混在は推奨していません。同一のタグサイズでご利用ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
