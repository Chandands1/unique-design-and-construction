import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-600">
            <img
              src="/assests/unique_design_logo.jpeg"
              alt="Unique Designs Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="ml-3 text-lg font-bold text-blue-600 leading-tight">
            𝙐𝙉𝙄𝙌𝙐𝙀 𝘿𝙀𝙎𝙄𝙂𝙉𝙎 & 𝘾𝙊𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉
          </span>
        </Link>

        {/* Icon Links */}
        <div className="flex space-x-3 items-center">
          {/* Call */}
          <a
            href="tel:+918660646592"
            className="bg-green-500 text-white p-1.5 rounded-full"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918660646592"
            className="bg-green-500 text-white p-1.5 rounded-full"
            aria-label="WhatsApp us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.1-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/unique_designs_nd_construction/"
            className="text-pink-600 p-1.5 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.796 2.163 15.416 2.163 12s.012-3.584.07-4.849c.062-1.366.336-2.633 1.31-3.608C4.518 2.499 5.785 2.226 7.151 2.164 8.416 2.106 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.77.129 4.627.37 3.678 1.319 2.728 2.269 2.487 3.412 2.428 4.694.37 8.332.012 8.735 0 12c.012 3.265.37 3.668.428 4.948.059 1.282.3 2.425 1.25 3.374.95.95 2.093 1.191 3.374 1.25 1.282.058 1.685.416 4.948.428 3.265-.012 3.668-.37 4.948-.428 1.282-.059 2.425-.3 3.374-1.25.95-.95 1.191-2.093 1.25-3.374.058-1.282.416-1.685.428-4.948-.012-3.265-.37-3.668-.428-4.948-.059-1.282-.3-2.425-1.25-3.374-.95-.95-2.093-1.191-3.374-1.25C15.668.012 15.265 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1BpzjGMhj8/"
            className="text-blue-600 p-1.5 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.499v-9.294H9.691v-3.622h3.133V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
