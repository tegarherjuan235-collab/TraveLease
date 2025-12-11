import type { Restoran } from '../types';
import '../styles/kartu.css';

interface PropsKartuRestoran {
  restoran: Restoran;
  onClick?: () => void; // Tambahkan prop onClick
}

export default function KartuRestoran({ restoran, onClick }: PropsKartuRestoran) {
  return (
    <div className="kartu">
      <img src={restoran.gambar} alt={restoran.nama} className="kartu-gambar-restoran" />
      <div className="kartu-konten">
        <h3 className="kartu-judul">{restoran.nama}</h3>
        
        <div className="kartu-lokasi">
          <span className="ikon-lokasi">📍</span>
          {restoran.lokasi}
        </div>
        
        <div className="restoran-info">
          <span className="rating-restoran">
            <span className="bintang">★</span>
            <span className="nilai">{restoran.rating}</span>
          </span>
          <span className="separator">•</span>
          <span className="jenis-kuliner">{restoran.jenisKuliner}</span>
        </div>
        
        <p className="kartu-deskripsi">{restoran.deskripsi}</p>
        
        <p className="harga-restoran">{restoran.rangeHarga}</p>
        
        <div className="menu-section">
          <p className="menu-label">Menu Populer:</p>
          <div className="menu-list">
            {restoran.menu.map((item, idx) => (
              <span key={idx} className="menu-badge">{item}</span>
            ))}
          </div>
        </div>
        
        <button 
          className="tombol tombol-primary kartu-tombol"
          onClick={onClick}
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}