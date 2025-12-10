"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { cn } from "@/lib/utils";

export function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [date, setDate] = useState<Date>();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const type = formData.get("type") as string;
        const notes = formData.get("notes") as string;
        const dateStr = date ? format(date, "d MMMM yyyy", { locale: tr }) : "Belirtilmedi";

        const message = `Merhaba Huzur Sokağı, web siteniz üzerinden teklif almak istiyorum.%0A%0A*İsim Soyisim:* ${name}%0A*Telefon:* ${phone}%0A*Organizasyon Türü:* ${type}%0A*Tarih:* ${dateStr}%0A*Notlar:* ${notes}`;

        // WhatsApp redirect
        window.open(`https://wa.me/905313718674?text=${message}`, '_blank');
        setFormStatus("success");
    };

    return (
        <section id="contact" className="py-24 px-4 bg-premium-gradient text-stone-100/90 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-primary font-medium tracking-widest text-sm uppercase">İletişime Geçin</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 text-white">Hayalinizdeki Organizasyonu Planlayalım</h2>
                    </div>
                    <p className="text-lg text-stone-400 font-light">
                        Erzurum'un en seçkin organizasyonlarını sizler için tasarlıyoruz. Detayları konuşmak için hemen bize yazın.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-colors">
                            <div className="p-3 bg-gradient-to-br from-primary to-emerald-600 rounded-lg text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-stone-300">Telefon / WhatsApp</p>
                                <p className="text-lg font-medium text-white">0531 371 86 74</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-colors">
                            <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg text-white shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-stone-300">Instagram</p>
                                <p className="text-lg font-medium text-white">@huzursokagiorganizasyonevi</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-colors">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-stone-300">Adres</p>
                                <p className="text-lg font-medium text-white">Adnan Menderes Mah. 82. Sk. No:15/5, Palandöken</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl"
                >
                    {formStatus === "success" ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                                <CalendarIcon size={32} />
                            </div>
                            <h3 className="text-2xl font-serif text-white">Talebiniz Alındı!</h3>
                            <p className="text-stone-400">En kısa sürede size dönüş yapacağız.</p>
                            <Button onClick={() => setFormStatus("idle")} variant="outline" className="mt-6 text-stone-900 border-stone-700">Yeni Talep Oluştur</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-2xl font-serif text-white mb-6">Teklif Formu</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-200">Adınız Soyadınız</label>
                                    <input required name="name" className="w-full bg-stone-50 border-none rounded-lg px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="İsim Soyisim" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-200">Telefon Numaranız</label>
                                    <input required name="phone" type="tel" className="w-full bg-stone-50 border-none rounded-lg px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="05XX XXX XX XX" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-200">Organizasyon Türü</label>
                                <div className="relative">
                                    <select name="type" className="w-full bg-stone-50 border-none rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none" defaultValue="">
                                        <option value="" disabled>Seçiniz</option>
                                        <option>Kız İsteme</option>
                                        <option>Söz Organizasyonu</option>
                                        <option>Nişan Töreni</option>
                                        <option>Doğum Günü</option>
                                        <option>Sünnet Düğünü</option>
                                        <option>Mezuniyet</option>
                                        <option>Okul Programı</option>
                                        <option>Bayanlar Matinesi</option>
                                        <option>Bekarlığa Veda</option>
                                        <option>Diğer</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 flex flex-col">
                                <label className="text-sm font-medium text-stone-200">Tarih</label>
                                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal bg-stone-50 border-none text-stone-900 hover:bg-stone-100 py-6 px-4 h-auto text-base",
                                                !date && "text-stone-500"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-5 w-5 opacity-70" />
                                            {date ? format(date, "d MMMM yyyy", { locale: tr }) : <span>Tarih Seçiniz</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 border-none bg-transparent shadow-none" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={(d) => {
                                                setDate(d);
                                                setIsCalendarOpen(false);
                                            }}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-200">Notlarınız</label>
                                <textarea name="notes" rows={4} className="w-full bg-stone-50 border-none rounded-lg px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Aklınızdaki detaylar..."></textarea>
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg shadow-lg shadow-primary/20">
                                {formStatus === "submitting" ? "Gönderiliyor..." : "Teklif İste"}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
