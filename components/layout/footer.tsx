import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-premium-gradient text-stone-300 pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif text-white">Huzur Sokağı</h3>
                        <p className="text-stone-400 font-light text-sm">
                            En özel günlerinizde, hayallerinizin ötesinde bir organizasyon deneyimi için buradayız. Premium, şık ve size özel.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium">Hizmetlerimiz</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Söz & Nişan</li>
                            <li>Doğum Günü</li>
                            <li>Sünnet Düğünü</li>
                            <li>Mezuniyet</li>
                            <li>Bayanlar Matinesi</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium">İletişim</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span>İstanbul, Türkiye</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-primary" />
                                <span>+90 555 123 45 67</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                <span>info@huzursokagi.com</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="bg-stone-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="bg-stone-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook size={18} /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Huzur Sokağı Organizasyon. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
