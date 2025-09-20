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
      <Vedio />
      <AboutPage />
      <ServicesPage />
    </>
  );
}
