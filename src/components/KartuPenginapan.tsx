import type { Penginapan } from '../types';
import '../styles/kartu.css';

interface PropsKartuPenginapan {
  penginapan: Penginapan;
  onClick?: () => void; // Tambahkan prop onClick
}

export default function KartuPenginapan({ penginapan, onClick }: PropsKartuPenginapan) {
  return (
    <div className="kartu">
      <img src={penginapan.gambar} alt={penginapan.nama} className="kartu-gambar-restoran" />
      <div className="kartu-konten">
        <div className="penginapan-header">
          <h3 className="kartu-judul">{penginapan.nama}</h3>
          <span className="tipe-badge">{penginapan.tipe}</span>
        </div>
        
        <div className="kartu-lokasi">
          <span className="ikon-lokasi">📍</span>
          {penginapan.lokasi}
        </div>
        
        <div className="penginapan-rating">
          <span className="bintang">★</span>
          <span className="nilai">{penginapan.rating}</span>
        </div>
        
        <p className="kartu-deskripsi">{penginapan.deskripsi}</p>
        
        <p className="harga-penginapan">{penginapan.rangeHarga}</p>
        
        <div className="fasilitas-section-mini">
          <p className="fasilitas-label">Fasilitas:</p>
          <div className="fasilitas-list-mini">
            {penginapan.fasilitas.map((fasilitas, idx) => (
              <span key={idx} className="fasilitas-badge-mini">{fasilitas}</span>
            ))}
          </div>
        </div>
        
        <div className="tipe-kamar-section">
          <p className="tipe-kamar-label">Tipe Kamar:</p>
          <div className="tipe-kamar-list">
            {penginapan.tipeKamar.map((tipe, idx) => (
              <span key={idx} className="tipe-kamar-badge">{tipe}</span>
            ))}
          </div>
        </div>
        
        <button 
          className="tombol tombol-primary kartu-tombol"
          onClick={onClick}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}