import type { HalamanAktif } from '../App';
import '../styles/header.css';

interface PropsHeader {
  halamanAktif: HalamanAktif;
  onGantiHalaman: (halaman: HalamanAktif) => void;
}

export default function Header({ halamanAktif, onGantiHalaman }: PropsHeader) {
  return (
    <header className="header">
      <div className="kontainer header-konten">
        <h1 className="logo">TraveLease</h1>
        
        <nav className="navigasi">
          <button
            className={`nav-link ${halamanAktif === 'beranda' ? 'aktif' : ''}`}
            onClick={() => onGantiHalaman('beranda')}
          >
            Beranda
          </button>
          <button
            className={`nav-link ${halamanAktif === 'destinasi' ? 'aktif' : ''}`}
            onClick={() => onGantiHalaman('destinasi')}
          >
            Destinasi
          </button>
          <button
            className={`nav-link ${halamanAktif === 'restoran' ? 'aktif' : ''}`}
            onClick={() => onGantiHalaman('restoran')}
          >
            Kuliner
          </button>
          <button
            className={`nav-link ${halamanAktif === 'penginapan' ? 'aktif' : ''}`}
            onClick={() => onGantiHalaman('penginapan')}
          >
            Penginapan
          </button>
          <button
            className={`nav-link ${halamanAktif === 'paket' ? 'aktif' : ''}`}
            onClick={() => onGantiHalaman('paket')}
          >
            Paket Wisata
          </button>
        </nav>
      </div>
    </header>
  );
}