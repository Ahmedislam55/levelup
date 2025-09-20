import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Vedio from "../Vedio/Vedio";
import AboutPage from "../AboutPage/AboutPage";
export default function HomePage() {
  const handlePDFDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = "/minicourse.pdf"; // Path to your PDF file
    link.download = "minicourse.pdf";
    link.click();
  };
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -end-28 size-[26rem] rounded-full bg-main/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -start-24 size-[22rem] rounded-full bg-yellow/10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-main/10 text-main px-3 py-1 text-sm md:text-base"
          >
            <span className="i-hero">
              برنامج معتمد • تدريب عملي • نتائج حقيقية
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-4xl font-extrabold text-center text-main leading-tight mt-4 lead"
          >
            عندك شغف بالحساب الذهني؟ دلوقتي تقدر تحوله لمشروع ناجح مع أقوى
            برنامج معتمد!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mt-4"
          >
            تعلّم أسرار الفيدا ماث بخطوات بسيطة وممتعة، وابدأ تدريب طلابك بثقة.
            محتوى احترافي، دعم مباشر، ومهارات قابلة للتطبيق من اليوم الأول.
          </motion.p>
        </div>
      </section>
      {/* Registration Form */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            📋 مستعد تبدأ رحلتك؟
          </h2>
          <p className="text-gray-700">سجل بياناتك وخد الكورس المجاني فوراً</p>
        </motion.div>
        <Link
          target="blank"
          to="https://docs.google.com/forms/d/e/1FAIpQLSePIL-hDKbF71NIANgQ1yMRaUUk08KXvP_Yf4yk10LDXc2q-w/viewform?usp=header"
        >
          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full cursor-pointer bg-main text-white font-semibold py-4 px-6 rounded-lg shadow-sm shadow-main/20 hover:shadow-md hover:shadow-main/30 focus:outline-none focus:ring-2 focus:ring-main/40 transition-all"
          >
            🚀 ابدأ رحلتك الآن - مجاناً!
          </motion.button>
        </Link>

        <p className="text-center text-sm text-gray-600 mt-4">
          بالضغط على الزر، أنت توافق على شروط الاستخدام وسياسة الخصوصية
        </p>
      </section>
      <Vedio />
      <AboutPage />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -end-28 size-[26rem] rounded-full bg-main/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -start-24 size-[22rem] rounded-full bg-yellow/10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-main/10 text-main px-3 py-1 text-sm md:text-base"
          >
            <span>🎉 مبروك! الميني كورس المجاني في انتظارك</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-main leading-tight mt-4"
          >
            🎉 مبروك! الميني كورس المجاني + "دليل المدرب" في انتظارك
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mt-4"
          >
            ابدأ رحلتك في عالم الحساب الذهني مع الدروس المجانية والأدوات العملية
          </motion.p>
        </div>
      </section>
      {/* PDF Download Section */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              📥 دليل المدرب المجاني
            </h2>
            <p className="text-gray-700 mb-6">
              دليل شامل PDF يحتوي على كل ما تحتاجه لبدء تدريب طلابك
            </p>

            <motion.button
              onClick={handlePDFDownload}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex cursor-pointer items-center gap-2 bg-main text-white font-semibold py-4 px-8 rounded-lg shadow-sm shadow-main/20 hover:shadow-md hover:shadow-main/30 focus:outline-none focus:ring-2 focus:ring-main/40 transition-all text-lg"
            >
              ⬇ حمّل دليل المدرب المجاني (PDF) من هنا
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Upsell Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            🔥 اللي شفته ده مجرد البداية… 1% بس من قوة المنهج!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            إنت دلوقتي اتعرفت على الفيدا، لكن لو نفسك تبقى مدرب دولي جاهز للشغل،
            محتاج المنهج الكامل
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-main/5 to-yellow/5 border border-main/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-main text-center mb-6">
            ✨ كورس إعداد مدرب الحساب الذهني بطرق الفيدا (8 مستويات)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: "🔹",
                title: "رحلة كاملة من الصفر للاحتراف",
                description:
                  "من تأسيس الحس العددي لحد الجذور، التكعيب، والمسائل المتقدمة.",
              },
              {
                icon: "🔹",
                title: "منهج جاهز للتطبيق",
                description: "كتب تدريبية PDF لطلابك باسمك وشعارك الشخصي.",
              },
              {
                icon: "🔹",
                title: "شهادة معتمدة قوية",
                description: "تثبت مكانتك قدام أولياء الأمور والمدارس.",
              },
              {
                icon: "🔹",
                title: "دعم وتسويق",
                description:
                  "نتابعك خطوة بخطوة في جروب خاص ونرشدك إزاي تجيب أول طلاب ليك.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.icon} {feature.title}
                </h4>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-800 mb-6 font-semibold">
              💡 باختصار: إنت مش بتشتري كورس… إنت بتستثمر في مشروع مربح + حلم
              حياتك كمدرب محترف.
            </p>
            <Link to="https://wa.me/201029828148" target="blank">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r cursor-pointer from-main to-main/80 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-main/30 hover:shadow-xl hover:shadow-main/40 focus:outline-none focus:ring-2 focus:ring-main/40 transition-all text-xl"
              >
                🚀 عايز تعرف تفاصيل الكورس الكامل؟ دوس هنا
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
