import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

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
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": form.getAttribute("name"),
          ...state,
        }).toString(),
      });
      
      if (response.ok) {
        router.push(form.getAttribute("action"));
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed. Please try again.");
    }
  };

  return (
    <form
      className="container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      method="POST"
      name="contact-form"
      action="thanks"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don't fill this out: {" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <div id="contact-us"></div>
      <div className="py-12 mx-auto">
        <p className="text-3xl font-noto text-center md:text-4xl leading-none tracking-tight text-gray-900 sm:text-4xl">
          {t("title")}
        </p>
        <p className="font-ud mt-2 pt-8 text-lg text-gray-600 md:text-center">
          {t("text-2")}
          <br></br>
          {t("text-1")}
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid md:grid-cols-8">
          <label className="pt-4 block md:col-start-3 col-span-4">
            <span className="font-ud text-gray-700">{t("form-name")}</span>
            <input
              type="text"
              className="mt-1 py-3 px-2 block w-full border border-gray-700"
              name="お名前"
              placeholder="山田　太郎"
              onChange={handleChange}
            />
          </label>
          <label className="pt-4 block md:col-start-3 col-span-4">
            <span className="font-ud text-gray-700">
              {t("form-company-name")}
            </span>
            <input
              type="text"
              className="mt-1 py-3 px-2 block w-full border border-gray-700"
              name="会社名"
              placeholder="〇〇株式会社"
              onChange={handleChange}
            />
          </label>
          <label className="pt-4 block md:col-start-3 col-span-4">
            <span className="font-ud text-gray-700">{t("form-email")}</span>
            <input
              type="email"
              className="mt-1 py-3 px-2 block w-full border border-gray-700"
              name="email"
              placeholder="taro@example.com"
              onChange={handleChange}
            />
          </label>
          <label className="pt-4 block md:col-start-3 col-span-4">
            <span className="font-ud text-gray-700">{t("form-content")}</span>
            <select
              className="mt-1 py-3 px-2 block w-full border border-gray-700"
              name="お問い合わせ内容"
              onChange={handleChange}
            >
              <option>{t("drop-down-choose")}</option>
              <option>{t("drop-down-hito")}</option>
              <option>{t("drop-down-mono-monitor")}</option>
              <option>{t("drop-down-ichi")}</option>
              <option>{t("drop-down-iphone")}</option>
              <option>{t("drop-down-other")}</option>
              <option></option>
            </select>
          </label>
          <label className="pt-4 block md:col-start-3 col-span-4">
            <span className="font-ud text-gray-700">{t("message")}</span>
            <textarea
              className="mt-1 py-3 px-2 block w-full border border-gray-700"
              rows="8"
              name="ご相談内容"
              onChange={handleChange}
            />
          </label>
          <div className="pt-4 mx-auto block md:col-start-3 col-span-4">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" unchecked="true" />
                  <span className="ml-2 font-ud">
                    {t("privacy-text-1")}
                    <Link href="privacy-policy">
                      <a className="text-blue-600 underline">
                        {t("privacy-text-2")}
                      </a>
                    </Link>
                    {t("privacy-text-3")}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="pt-8 block mx-auto md:col-start-3 col-span-4">
            <button type="submit">
              <a className="font-ud bg-gray-800 inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none">
                {t("contact-button")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}