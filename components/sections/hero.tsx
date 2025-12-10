"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
    const scrollToServices = () => {
        const services = document.getElementById("services");
        if (services) {
            services.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero-bg.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-md">
                        Hayallerinizdeki Organizasyon
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight drop-shadow-2xl">
                        Huzur Sokağı
                    </h1>
                    <p className="text-lg md:text-2xl text-stone-200 font-light max-w-2xl mx-auto drop-shadow-lg">
                        Kız isteme, nişan, düğün ve tüm özel günlerinizde premium detaylar ve unutulmaz anlar.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white min-w-[180px] h-14 text-lg rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Teklif Alın
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md min-w-[180px] h-14 text-lg rounded-full transition-all hover:scale-105"
                        onClick={scrollToServices}
                    >
                        Hizmetlerimiz
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce cursor-pointer"
                onClick={scrollToServices}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
