import React from "react";

export default function Vedio() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-main">
            شاهد لمحة سريعة عن البرنامج
          </h2>
          <p className="mt-2 text-gray-700">
            مقتطف يعرّفك على أسلوب التدريب والمخرجات المتوقعة قبل الانضمام.
          </p>
        </header>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&fs=1"
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
