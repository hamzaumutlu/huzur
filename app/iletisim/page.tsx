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
                                    <p className="text-stone-600">
                                        Adnan Menderes Mah. 82. Sokak Dış Kapı:15 İşyeri No:5,<br />
                                        25070 Palandöken / Erzurum
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-900">Telefon</h4>
                                    <p className="text-stone-600">0531 371 86 74</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-900">E-Posta</h4>
                                    <p className="text-stone-600">info@huzursokagi.com</p>
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

                {/* Google Map Embed */}
                <div className="h-full min-h-[400px] bg-stone-200 rounded-2xl overflow-hidden relative shadow-md">
                    <iframe
                        src="https://maps.google.com/maps?q=Adnan+Menderes+mah.+82.sokak+dış+kapi+:15+isyeri+no:5,+25070+Palandöken/Erzurum&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Huzur Sokağı Organizasyon Konumu"
                        className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
