"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active state: Scrolled OR Inner Page
    const isActive = isScrolled || !isHome;

    const navLinks = [
        { name: "Ana Sayfa", href: "/" },
        { name: "Hizmetler", href: "/#services" },
        { name: "Hakkımızda", href: "/#about" }, // Changed to anchor for now or create generic page
        { name: "İletişim", href: "/#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col ${isActive ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            {/* Announcement Bar */}
            <div className="w-full bg-premium-gradient overflow-hidden py-2 relative z-50">
                <div className="flex whitespace-nowrap">
                    <motion.div
                        className="flex gap-16 items-center text-xs md:text-sm font-medium text-white/90 tracking-wide"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <span>✨ YIL SONU İNDİRİMİNDEN HEMEN FAYDALANIN ✨</span>
                        <span>🎊 YIL SONU İNDİRİMİNDEN HEMEN FAYDALANIN 🎊</span>
                        <span>✨ YIL SONU İNDİRİMİNDEN HEMEN FAYDALANIN ✨</span>
                        <span>🔥 YIL SONU İNDİRİMİNDEN HEMEN FAYDALANIN 🔥</span>
                    </motion.div>
                </div>
            </div>

            <div className={`w-full max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isActive ? "py-4" : "py-6"}`}>
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Image */}
                    <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-primary/20 bg-stone-100">
                        <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className={`text-xl md:text-2xl font-serif font-bold ${isActive ? "text-primary" : "text-white"}`}>
                        Huzur Sokağı
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-stone-600" : "text-stone-100"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        className={`${isActive ? "bg-primary text-white hover:bg-primary/90" : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20"} transition-all`}
                        onClick={() => // Redirect to contact page
                            window.location.href = "#contact"
                        }
                    >
                        Teklif Al
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} className={isActive ? "text-stone-900" : "text-white"} /> : <Menu size={28} className={isActive ? "text-stone-900" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-premium-gradient border-t border-white/10 absolute top-full left-0 w-full overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-stone-100 hover:text-white transition-colors text-lg font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full bg-white text-primary mt-4 hover:bg-stone-100"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Teklif Al
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
