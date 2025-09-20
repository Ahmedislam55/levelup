import React from "react";
import { motion } from "framer-motion";
export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "مرحباً! أريد الاستفسار عن برنامج الحساب الذهني والتدريب المعتمد"
    );
    window.open(`https://wa.me/201029828148?text=${message}`, "_blank");
  };

  const handleBookingClick = () => {
    // Replace with your actual Google Form URL
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSePIL-hDKbF71NIANgQ1yMRaUUk08KXvP_Yf4yk10LDXc2q-w/viewform?usp=header",
      "_blank"
    );
  };

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
            <span>📞 تواصل معنا الآن</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-main leading-tight mt-4"
          >
            تواصل معنا واحجز مكانك في البرنامج
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mt-4"
          >
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك
            التدريبية
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8"
        >
          طرق التواصل معنا
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              تواصل عبر الواتساب
            </h3>
            <p className="text-gray-700 mb-6">
              اسأل عن أي استفسار أو احجز استشارة مجانية مع المدربة ياسمين صابر
            </p>

            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-500 cursor-pointer text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-colors text-lg"
            >
              💬 تواصل الآن عبر الواتساب
            </motion.button>

            <p className="text-sm text-gray-600 mt-4">
              تواصل معانا الان واحجز مكانك
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-main/5 to-main/10 border border-main/20 rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-main rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              احجز مكانك الآن
            </h3>
            <p className="text-gray-700 mb-6">
              املأ البيانات واحجز مكانك في البرنامج التدريبي المعتمد
            </p>

            <motion.button
              onClick={handleBookingClick}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-main cursor-pointer text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-main/90 transition-colors text-lg"
            >
              📝 احجز الآن - نموذج الحجز
            </motion.button>

            <p className="text-sm text-gray-600 mt-4">
              احجز مكانك في أقرب دورة تدريبية
            </p>
          </motion.div>

          {/* Free Learning Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              تعلم مجاناً
            </h3>
            <p className="text-gray-700 mb-6">
              انضم لمجموعة الواتساب المجانية واحصل على محاضرات في الحساب الذهني
            </p>

            <motion.a
              href="https://chat.whatsapp.com/BUbfUKZatn5LNxkjvrRL0J"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors text-lg"
            >
              🎓 انضم للمجموعة المجانية
            </motion.a>

            <p className="text-sm text-gray-600 mt-4">
              محاضرات مجانية ومحتوى تعليمي يومي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8"
          >
            معلومات التواصل
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-main rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                الهاتف
              </h3>
              <p className="text-gray-700">01029828148</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                البريد الإلكتروني
              </h3>
              <p className="text-gray-700">yasminsaber0810@gmail.com</p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                الموقع
              </h3>
              <p className="text-gray-700">الجيزة، مصر</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            تابعنا على وسائل التواصل الاجتماعي
          </h2>
          <p className="text-gray-700 mb-8">
            احصل على آخر الأخبار والنصائح حول الحساب الذهني
          </p>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.facebook.com/share/1DSfLzPjge/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/201029828148"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
