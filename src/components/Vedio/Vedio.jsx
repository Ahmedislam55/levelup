import React from "react";
import { motion } from "framer-motion";
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
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8"
          >
            📹 شاهد الدروس الثلاثة المجانية
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "1️⃣",
                title: "الدرس الأول: بناء الحس العددي",
                description: "تعلم الجمع بدون تحميل والطرح بدون استلاف",
              },
              {
                number: "2️⃣",
                title: "الدرس الثاني: الضرب المتقدم",
                description: "تقنيات الضرب السريع والدقيق بطرق الفيدا",
              },
              {
                number: "3️⃣",
                title: "الدرس الثالث: الجذور",
                description: "حساب الجذور التربيعية والتكعيبية بسهولة",
              },
            ].map((lesson, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{lesson.number}</div>
                  <h3 className="text-lg font-bold text-main mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{lesson.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
