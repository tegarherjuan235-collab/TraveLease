import type { Restoran } from '../types';
import '../styles/detail.css';

interface PropsDetailRestoran {
  restoran: Restoran;
  onTutup: () => void;
}

export default function DetailRestoran({ restoran, onTutup }: PropsDetailRestoran) {
  return (
    <div className="detail-container">
      <div className="detail-konten">
        <button onClick={onTutup} className="tombol-kembali">
          Kembali ke Daftar
        </button>

        <h1 className="detail-judul">{restoran.nama}</h1>

        <div className="detail-info-ringkas">
          <span className="detail-lokasi">
            {restoran.lokasi}
          </span>
          <span className="detail-separator">•</span>
          <span className="detail-rating">
            <span className="bintang">★</span>
            <strong>{restoran.rating}</strong>
          </span>
          <span className="detail-separator">•</span>
          <span className="jenis-kuliner-detail">{restoran.jenisKuliner}</span>
        </div>

        <img 
          src={restoran.gambar} 
          alt={restoran.nama} 
          className="detail-gambar-utama"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '2rem' }}
        />

        <div className="detail-deskripsi">
          <p className="paragraf">{restoran.deskripsi}</p>
        </div>

        <div className="info-praktis-box">
          <h3 className="info-praktis-judul">Informasi Restoran</h3>
          <div className="info-praktis-grid">
            <div className="info-item">
              <div className="info-ikon">💰</div>
              <div>
                <p className="info-label">Range Harga</p>
                <p className="info-nilai">{restoran.rangeHarga}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">📍</div>
              <div>
                <p className="info-label">Jarak</p>
                <p className="info-nilai">{restoran.jarak}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-detail-section">
          <h3 className="menu-detail-judul">Menu Populer</h3>
          <div className="menu-detail-grid">
            {restoran.menu.map((item, idx) => (
              <div key={idx} className="menu-detail-item">
                <span className="menu-detail-nama">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="aksi-tombol-grup">
          <button className="tombol tombol-primary tombol-besar">
            Reservasi Sekarang
          </button>
          <button
            className="tombol tombol-secondary tombol-besar"
            onClick={() => {
              window.open(
                "https://wa.me/6281915771010?text=Halo%20saya%20ingin%20reservasi%20di%20" + encodeURIComponent(restoran.nama),
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