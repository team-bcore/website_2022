import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const router = useRouter();
  const [state, setState] = React.useState({});
  const { t } = useTranslation("contact");

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      });
      router.push(form.getAttribute("action"));
    } catch (error) {
      console.error("Form submission error:", error);
      alert(t("error-message") || "送信中にエラーが発生しました。");
    }
  };

  return (
    <form
      className="container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      method="post"
      name="contact-form"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* 必須のform-name hidden input */}
      <input type="hidden" name="form-name" value="contact-form" />
      
      {/* ハニーポットフィールド */}
      <p hidden>
        <label>
          Don't fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      {/* 残りのフォームコンテンツは同じ */}
      <div id="contact-us"></div>
      <div className="py-12 mx-auto">
        <p className="text-3xl font-noto text-center md:text-4xl leading-none tracking-tight text-gray-900 sm:text-4xl">
          {t("title")}
        </p>
        {/* ... 他のフォームフィールドは変更なし ... */}
        
        {/* チェックボックスの修正 */}
        <div className="pt-4 mx-auto block md:col-start-3 col-span-4">
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  name="privacy-accepted"
                  onChange={handleChange}
                  required 
                />
                <span className="ml-2 font-ud">
                  {t("privacy-text-1")}
                  <Link href="/privacy-policy" className="text-blue-600 underline">
                    {t("privacy-text-2")}
                  </Link>
                  {t("privacy-text-3")}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* 送信ボタンの修正 */}
        <div className="pt-8 block mx-auto md:col-start-3 col-span-4">
          <button 
            type="submit" 
            className="font-ud bg-gray-800 inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
          >
            {t("contact-button")}
          </button>
        </div>
      </div>
    </form>
  );
}