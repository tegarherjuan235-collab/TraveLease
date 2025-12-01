import type { Penginapan } from '../types';
import '../styles/detail.css';

interface PropsDetailPenginapan {
  penginapan: Penginapan;
  onTutup: () => void;
}

export default function DetailPenginapan({ penginapan, onTutup }: PropsDetailPenginapan) {
  return (
    <div className="detail-container">
      <div className="detail-konten">
        <button onClick={onTutup} className="tombol-kembali">
          Kembali ke Daftar
        </button>

        <div className="penginapan-header-detail">
          <h1 className="detail-judul">{penginapan.nama}</h1>
          <span className="tipe-badge-large">{penginapan.tipe}</span>
        </div>

        <div className="detail-info-ringkas">
          <span className="detail-lokasi">
            {penginapan.lokasi}
          </span>
          <span className="detail-separator">•</span>
          <span className="detail-rating">
            <span className="bintang">★</span>
            <strong>{penginapan.rating}</strong>
          </span>
        </div>

        <img 
          src={penginapan.gambar} 
          alt={penginapan.nama} 
          className="detail-gambar-utama"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '2rem' }}
        />

        <div className="detail-deskripsi">
          <p className="paragraf">{penginapan.deskripsi}</p>
        </div>

        <div className="info-praktis-box">
          <h3 className="info-praktis-judul">Informasi Penginapan</h3>
          <div className="info-praktis-grid">
            <div className="info-item">
              <div className="info-ikon">💰</div>
              <div>
                <p className="info-label">Range Harga</p>
                <p className="info-nilai">{penginapan.rangeHarga}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tipe-kamar-detail-section">
          <h3 className="tipe-kamar-detail-judul">Tipe Kamar Tersedia</h3>
          <div className="tipe-kamar-detail-grid">
            {penginapan.tipeKamar.map((tipe, idx) => (
              <div key={idx} className="tipe-kamar-detail-item">
                <span className="tipe-kamar-detail-nama">{tipe}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fasilitas-section">
          <h3 className="fasilitas-judul">Fasilitas</h3>
          <div className="fasilitas-list">
            {penginapan.fasilitas.map((fasilitas, idx) => (
              <span key={idx} className="fasilitas-badge">
                {fasilitas}
              </span>
            ))}
          </div>
        </div>

        <div className="aksi-tombol-grup">
          <button className="tombol tombol-primary tombol-besar">
            Booking Sekarang
          </button>
          <button
            className="tombol tombol-secondary tombol-besar"
            onClick={() => {
              window.open(
                "https://wa.me/6281915771010?text=Halo%20saya%20ingin%20booking%20di%20" + encodeURIComponent(penginapan.nama),
                "_blank"
              );
            }}
          >
            Hubungi via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}