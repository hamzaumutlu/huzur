import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function SunnetPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Header />
            <div className="pt-32 pb-16 px-4 bg-stone-100 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900">Sünnet Organizasyonu Erzurum</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Geleneklerimize yakışır, görkemli ve eğlenceli sünnet düğünleri. Çocuğunuzun ilk mürüvvetini özel kılın.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/circumcision.png" alt="Erzurum Sünnet Düğünü" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif text-stone-800">Krallara Layık Bir Şölen</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Erzurum'un örf ve adetlerine uygun, şık ve eğlenceli bir şölen hazırlıyoruz.
                        Mekan süslemelerinden lezzetli ikramlıklara, çocuklar için palyaço gösterilerinden özel masa dekorlarına kadar her detay düşünülmüştür.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Konsept Mekan Süsleme
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Şık Masa Düzeni ve Dekorlar
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Lezzetli İkramlıklar
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Palyaço ve Çocuk Animasyonları
                        </li>
                    </ul>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
