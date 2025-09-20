import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/woman.jpg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-yellow text-zinc-800">
      {/* Trainer Section */}
      <section>
        <div className="mx-auto max-w-6xl p-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Trainer Photo */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={image}
                  alt="ياسمين صابر - مدرب الحساب الذهني"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Trainer Info */}
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4">
                المدربة الدولية ياسمين صابر
              </h3>
              <div className="space-y-2 text-xl">
                <p className="font-semibold">
                  مدرب دولي ومؤسس برنامج
                  <span className="text-white font-extrabold hover:text-main cursor-pointer"> Vedic Math Level Up </span>
                </p>
                <p>الرئيس التنفيذي لأكاديمية Level Up الدولية</p>
                <p>
                  خبرة 20 سنة في تدريس مناهج الرياضيات والماث بالعربية
                  والإنجليزية
                </p>
                <p>مدرب حساب ذهني معتمد من الجامعة الأمريكية المهنية</p>
                <p>مدرب مدربين معتمد من الاتحاد الفيدرالي للجامعات الرقمية</p>
              </div>
            </div>
          </motion.div>
        </div>
        <hr className="border-zinc-100" />
      </section>
      {/* Main Footer */}
      <div className="py-12 bg-main text-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Level Up</h4>
              <p className="text-gray-300 mb-4">
                أكاديمية متخصصة في تدريب الحساب الذهني بطرق الفيدا، نساعدك في
                تحويل شغفك إلى مشروع مربح.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.facebook.com/share/1DSfLzPjge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
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
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </motion.a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 ">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    عن المدرب
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    الخدمات
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-white">yasminsaber0810@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">الجيزة, مصر</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-white"> 01029828148 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-zinc-200" />
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 bg-main">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © 2024 Level Up Academy. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/"
                className="text-white hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/"
                className="text-white hover:text-white transition-colors"
              >
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
