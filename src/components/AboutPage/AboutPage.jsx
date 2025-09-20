import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import feedback1 from "../../assets/images/feedback1.jpg";
import feedback2 from "../../assets/images/feedback2.jpg";
import feedback3 from "../../assets/images/feedback3.jpg";
import feedback4 from "../../assets/images/feedback4.jpg";
import feedback5 from "../../assets/images/feedback5.jpg";
import feedback6 from "../../assets/images/feedback6.jpg";
import feedback7 from "../../assets/images/feedback7.jpg";
import feedback8 from "../../assets/images/feedback8.jpg";
import feedback9 from "../../assets/images/feedback9.jpg";
export default function AboutPage() {
  return (
    <div dir="rtl" className="bg-white">
      {/* Hero Section */}
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
            <span>قصص نجاح حقيقية • مدربين معتمدين • نتائج مضمونة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-main leading-tight mt-4"
          >
            🚀 من الشغف للمهنة… قصص نجاح حقيقية مع Vedic Math Level Up!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mt-4"
          >
            إحنا مش بنتكلم نظري… دي نتائج مدربين بدأوا من نفس مكانك وحققوا
            نجاحات حقيقية
          </motion.p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8"
        >
          💬 شهادات المدربين
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: feedback1,
            },
            {
              image: feedback2,
            },
            {
              image: feedback3,
            },
            {
              image: feedback4,
            },
            {
              image: feedback5,
            },
            {
              image: feedback6,
            },
            {
              image: feedback7,
            },
            {
              image: feedback8,
            },
            {
              image: feedback9,
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white border cursor-pointer border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={testimonial.image} alt="feedback" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainer Video Section */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              🎥 شاهد بنفسك إزاي مدربة من خبراءنا بتشرح باحترافية
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              دليل حي على إن اللي هتتعلمه هنا بيطبق في أرض الواقع مع طلاب
              حقيقيين
            </p>
          </motion.div>

          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <video
              controls
              preload="metadata"
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-gray-200"
            >
              <source src="/videos/traningvedio.mp4" type="video/mp4" />
              <source src="/videos/traningvedio.webm" type="video/webm" />
              <p className="text-center text-gray-600 p-8">
                متصفحك لا يدعم تشغيل الفيديو.
                <a href="/videos/traningvedio" className="text-main underline">
                  اضغط هنا لتحميل الفيديو
                </a>
              </p>
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
