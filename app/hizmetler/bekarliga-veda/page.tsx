import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function BekarligaVedaPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Header />
            <div className="pt-32 pb-16 px-4 bg-stone-100 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900">Bekarlığa Veda Partisi Erzurum</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Düğün öncesi son çıkış! Arkadaşlarınızla unutulmaz bir eğlenceye hazır olun.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl md:order-2">
                    <img src="/images/matinee.png" alt="Erzurum Bekarlığa Veda" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6 md:order-1">
                    <h2 className="text-3xl font-serif text-stone-800">Eğlencenin Doruğu</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Arkadaşlarınızla doyasıya eğleneceğiniz, sürprizlerle dolu bir gece.
                        Kına tahtından kaftan modellerine, nedime bilekliklerinden eğlenceli aksesuarlara kadar her şeyi düşünüyoruz.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Kına Tahtı ve Cibinlik
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Kaftan ve Bindallı Seçenekleri
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Nedime Tefleri ve Mumları
                        </li>
                        <li className="flex items-center gap-2 text-stone-700">
                            <span className="w-2 h-2 bg-primary rounded-full" /> İsme Özel Hatıra Hediyelikler
                        </li>
                    </ul>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
