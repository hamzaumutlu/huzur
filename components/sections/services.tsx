"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Kız İsteme",
        description: "En heyecanlı gününüzde şık sunumlar ve detaylar.",
        image: "/images/engagement.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/kiz-isteme",
    },
    {
        title: "Söz Organizasyonu",
        description: "Ailelerin tanıştığı ilk adımda zarif bir atmosfer.",
        image: "/images/soz.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/soz",
    },
    {
        title: "Nişan Töreni",
        description: "Evliliğe giden yolda görkemli bir kutlama.",
        image: "/images/nisan.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/nisan",
    },
    {
        title: "Doğum Günü",
        description: "Yeni yaşınızı sevdiklerinizle şık bir davette kutlayın.",
        image: "/images/birthday.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/dogum-gunu",
    },
    {
        title: "Sünnet",
        description: "Geleneksel ve modern dokunuşlarla unutulmaz bir sünnet.",
        image: "/images/circumcision.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/sunnet",
    },
    {
        title: "Bayanlar Matinesi",
        description: "Gün ortamları ve özel buluşmalar için size özel alanlar.",
        image: "/images/matinee.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/bayanlar-matinesi",
    },
    {
        title: "Bekarlığa Veda",
        description: "Arkadaşlarınızla doyasıya eğleneceğiniz özel partiler.",
        image: "/images/bekarliga-veda.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/bekarliga-veda",
    },
    {
        title: "Mezuniyet",
        description: "Başarılarınızı görkemli bir törenle taçlandırın.",
        image: "/images/graduation.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/mezuniyet",
    },
    {
        title: "Okul Programları",
        description: "Okuma bayramı ve resmi kutlamalar için profesyonel destek.",
        image: "/images/okul.png",
        colSpan: "md:col-span-1",
        href: "/hizmetler/okul-programlari",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-stone-50">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Hizmetlerimiz</h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Erzurum'da her detayı özenle düşünülmüş, size ve misafirlerinize kendinizi özel hissettirecek organizasyonlar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className={`${service.colSpan} block h-full`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative w-full h-full group overflow-hidden rounded-2xl cursor-pointer"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
