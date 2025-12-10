import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-premium-gradient text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif text-white">Huzur Sokağı</h3>
                        <p className="text-white/80 font-light text-sm">
                            En özel günlerinizde, hayallerinizin ötesinde bir organizasyon deneyimi için buradayız. Premium, şık ve size özel.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium text-lg">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><Link href="/" className="hover:text-white hover:underline transition-all">Ana Sayfa</Link></li>
                            <li><Link href="/#services" className="hover:text-white hover:underline transition-all">Hizmetlerimiz</Link></li>
                            <li><Link href="/#about" className="hover:text-white hover:underline transition-all">Hakkımızda</Link></li>
                            <li><Link href="/#contact" className="hover:text-white hover:underline transition-all">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium text-lg">Hizmetlerimiz</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><Link href="/hizmetler/soz" className="hover:text-white hover:underline transition-all">Söz & Nişan</Link></li>
                            <li><Link href="/hizmetler/dogum-gunu" className="hover:text-white hover:underline transition-all">Doğum Günü</Link></li>
                            <li><Link href="/hizmetler/sunnet" className="hover:text-white hover:underline transition-all">Sünnet Düğünü</Link></li>
                            <li><Link href="/hizmetler/mezuniyet" className="hover:text-white hover:underline transition-all">Mezuniyet</Link></li>
                            <li><Link href="/hizmetler/bayanlar-matinesi" className="hover:text-white hover:underline transition-all">Bayanlar Matinesi</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium text-lg">İletişim</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-white" />
                                <span>Adnan Menderes Mah. 82. Sk. No:15/5, Palandöken/Erzurum</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-white" />
                                <span>0531 371 86 74</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-white" />
                                <span>info@huzursokagi.com</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 pt-2">
                            <Link href="https://instagram.com/huzursokagiorganizasyonevi" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-primary transition-colors"><Instagram size={18} /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
                    <p>&copy; {new Date().getFullYear()} Huzur Sokağı Organizasyon. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
