import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

export default function Footer() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <footer
      className={`theme-transition ${isDark ? "bg-slate-950 text-slate-300" : "bg-gray-900 text-gray-300"}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold font-['Plus_Jakarta_Sans']">
                  BG
                </span>
              </div>
              <h3 className="text-white font-bold text-xl font-['Plus_Jakarta_Sans']">
                Bhavnagar
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              A community-based welfare organization serving the Memon community
              in Karachi with comprehensive social programs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/committe"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Committees
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/census-form"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Census Form
                </Link>
              </li>
              <li>
                <Link
                  to="/membership-registration"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/duplicate-card"
                  onClick={scrollToTop}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Duplicate Card
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a
                  href="https://wa.me/923344840588"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  0334 4840588
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href="mailto:info@bhavnagarmemon.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  info@bhavnagarmemon.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t pt-8 mb-8 ${isDark ? "border-slate-800" : "border-gray-800"}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bhavnagar Association Karachi.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/bhavnagarjamat/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/bhavnagarmemonjamatofficial/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
