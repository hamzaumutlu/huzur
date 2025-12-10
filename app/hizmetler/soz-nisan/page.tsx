import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function SozNisanPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Header />
            <div className="pt-32 pb-16 px-4 bg-stone-100 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900">Söz & Nişan Organizasyonu Erzurum</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Erzurum'da evliliğe atılan ilk adımda yanınızdayız. Hayallerinizdeki söz ve nişan organizasyonu için size özel konseptler hazırlıyoruz.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/engagement.png" alt="Erzurum Söz Nişan" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-serif text-stone-800">Masalsı Bir Başlangıç</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Kız isteme merasimi, söz kesimi ve nişan töreni... Hepsi kültürümüzün en değerli parçaları.
                        Huzur Sokağı Organizasyon olarak, bu özel günlerin ağırlığına ve zarafetine yakışır konseptler sunuyoruz.
                        Masa süslemesinden ikramlıklara, nişan tepsisinden damat kahvesine kadar her detayla ilgileniyoruz.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Özel Nişan Masası Konseptleri
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Damat Kahvesi Sunumu
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Kişiye Özel Süslemeler
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Fotoğraf Köşesi Kurulumu
                        </li>
                    </ul>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
