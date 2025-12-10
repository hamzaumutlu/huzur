import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Services />

      <Contact />

      {/* Short About Section / Values */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-8">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Hakkımızda</span>
          <h2 className="text-4xl font-serif text-stone-900">Erzurum'un En Seçkin Organizasyonları</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Huzur Sokağı Organizasyon olarak Erzurum'da hayallerinizi gerçeğe dönüştürüyoruz.
            Tecrübeli ekibimiz, modern tasarım anlayışımız ve detaylara verdiğimiz önem ile
            kız isteme, nişan, düğün ve tüm özel günlerinizi unutulmaz birer anıya dönüştürüyoruz.
            Erzurum'un misafirperverliğini ve zarafetini organizasyonlarınıza taşıyoruz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-6 bg-stone-50 rounded-xl">
              <h3 className="text-xl font-serif mb-2 text-stone-800">Premium Tasarım</h3>
              <p className="text-stone-500 text-sm">Size özel konseptler ve şık detaylar.</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl">
              <h3 className="text-xl font-serif mb-2 text-stone-800">Profesyonel Ekip</h3>
              <p className="text-stone-500 text-sm">Planlamadan uygulamaya kusursuz süreç.</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl">
              <h3 className="text-xl font-serif mb-2 text-stone-800">Mutlu Müşteriler</h3>
              <p className="text-stone-500 text-sm">Yüzlerce başarılı organizasyon referansı.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
