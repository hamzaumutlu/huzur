import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function MatinePage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Header />
            <div className="pt-32 pb-16 px-4 bg-stone-100 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900">Bayanlar Matinesi Erzurum</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Hanımlara özel, rahat ve şık bir ortamda doyasıya eğlence. Gün ortamları ve özel buluşmalar için ideal.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/matinee.png" alt="Erzurum Bayanlar Matinesi" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif text-stone-800">Size Özel Eğlence</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Huzur Sokağı Organizasyon güvencesiyle, tamamen bayanlara özel konseptler hazırlıyoruz.
                        Kadınlar günü etkinlikleri, kabul günleri veya sadece eğlence amaçlı buluşmalarınız için en ideal çözümleri sunuyoruz.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> DJ Bayan & Canlı Müzik
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Özel İkramlıklar ve Çay Saati
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Konsept Masa Süsleme
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Profesyonel Fotoğraf Çekimi
                        </li>
                    </ul>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
