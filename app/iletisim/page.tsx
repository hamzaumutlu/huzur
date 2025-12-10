import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Header />
            <div className="pt-32 pb-16 px-4 bg-stone-100 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900">İletişim</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Erzurum'daki ofisimize bekleriz. Bir kahve eşliğinde hayalinizdeki organizasyonu planlayalım.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 space-y-6">
                        <h3 className="text-2xl font-serif text-stone-800">İletişim Bilgileri</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-900">Adres</h4>
                                    <p className="text-stone-600">Cumhuriyet Caddesi, Huzur Sokağı No:1, Yakutiye / Erzurum</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-900">Telefon</h4>
                                    <p className="text-stone-600">+90 531 371 86 74</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-900">E-Posta</h4>
                                    <p className="text-stone-600">iletisim@huzursokagi.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-900">Çalışma Saatleri</h4>
                                    <p className="text-stone-600">Pazartesi - Cumartesi: 09:00 - 19:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-full min-h-[400px] bg-stone-200 rounded-2xl overflow-hidden relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.200164894982!2d41.2763264!3d39.9043164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5ed7a151676d%3A0xe7a5050f24e933e4!2sErzurum%20Cumhuriyet%20Caddesi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
