import React from "react";

export default function Vedio() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center mb-6 font-semibold">
          <h2 className="text-3xl md:text-4xl font-extrabold text-main">
            أساسيات رياضيات الفيدا الهندية سر الحساب الذهني السريع
          </h2>
          <p className="mt-2 text-gray-700 font-bold text-lg leading-8">
            ابدأ رحلتك مع Level Up وتعلّم أسرار رياضيات الفيدا الهندية في الجمع،
            الطرح، الضرب وحتى استخراج الجذور. الطرق دي مش بس هتسهل عليك العمليات
            الحسابية بشكل أسرع، لكن كمان هتفتحلك باب لتحويل شغفك بالحساب الذهني
            إلى مهارة احترافية وفرصة عمل مستمرة تقدر تبني بيها مستقبلك بخطوات
            واثقة.
          </p>
        </header>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/24c3McYQyGU"
            title="لمحة عن برنامج الحساب الذهني"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-sm border border-gray-100"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
