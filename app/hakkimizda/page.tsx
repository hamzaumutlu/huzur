import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Users, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Header />
            <div className="pt-32 pb-16 px-4 bg-stone-100 mb-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-stone-900">Hakkımızda</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Erzurum'un en köklü ve yenilikçi organizasyon şirketi olarak, "Huzur Sokağı" markasıyla anılarınıza değer katıyoruz.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 space-y-24 mb-24">
                {/* Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm">Hikayemiz</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-800">Erzurum'da Başlayan Bir Rüya</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Huzur Sokağı Organizasyon, insanların en mutlu günlerinde onlara eşlik etmek ve omuzlarındaki yükü almak amacıyla kuruldu.
                            Erzurum'un kültürel dokusunu modern organizasyon anlayışıyla birleştirerek, bölgede benzersiz bir hizmet sunuyoruz.
                            Hedefimiz sadece bir organizasyon yapmak değil, yıllarca hatırlanacak, fotoğraflara baktıkça tebessüm ettirecek anılar inşa etmektir.
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                            Kız istemeden mezuniyete, doğum gününden kurumsal etkinliklere kadar geniş bir yelpazede hizmet sunuyoruz.
                            Müşteri memnuniyetini her şeyin üzerinde tutan ekibimizle, "Siz hayal edin, biz gerçekleştirelim" mottosuyla çalışıyoruz.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-stone-200">
                        {/* Placeholder for About Image if available, or borrow Hero image */}
                        <img src="/images/hero-bg.png" alt="Huzur Sokağı Hakkında" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-stone-800">Uzman Ekip</h3>
                        <p className="text-stone-500">Alanında deneyimli, güler yüzlü ve profesyonel kadromuzla hizmetinizdeyiz.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-stone-800">Kusursuz Planlama</h3>
                        <p className="text-stone-500">En ince detayına kadar düşünülmüş, aksiliklere yer vermeyen titiz planlama.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-stone-800">Güven & Kalite</h3>
                        <p className="text-stone-500">Söz verdiğimiz gibi, zamanında ve eksiksiz teslimat garantisi.</p>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
