import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Vedio from "../Vedio/Vedio";
import AboutPage from "../AboutPage/AboutPage";
import ServicesPage from "../ServicesPage/ServicesPage";
export default function HomePage() {
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
      <ServicesPage />
    </>
  );
}
