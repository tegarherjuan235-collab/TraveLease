import type { PaketWisata } from '../types';
import '../styles/detail.css';

interface PropsDetailPaket {
  paket: PaketWisata;
  onTutup: () => void;
}

export default function DetailPaket({ paket, onTutup }: PropsDetailPaket) {
  return (
    <div className="detail-container">
      <div className="detail-konten">
        <button onClick={onTutup} className="tombol-kembali">
          Kembali
        </button>

        <h1 className="detail-judul">{paket.nama}</h1>

        <div className="detail-info-ringkas">
          <span className="detail-lokasi">
            📅 {paket.durasi}
          </span>
          <span className="detail-separator">•</span>
          <span className="detail-rating">
            <span className="bintang">★</span>
            <strong>{paket.rating}</strong>
          </span>
          <span className="detail-separator">•</span>
          <span className="detail-lokasi">
            👥 Min {paket.minPeserta} orang
          </span>
        </div>

        <img
          src={paket.gambar}
          alt={paket.nama}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '0.75rem',
            marginBottom: '2rem'
          }}
        />

        <div className="info-praktis-box">
          <h3 className="info-praktis-judul">Harga Paket</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb', marginTop: '1rem' }}>
            {paket.harga}
            <span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>
              per orang
            </span>
          </div>
        </div>

        <div className="fasilitas-section">
          <h3 className="fasilitas-judul">Termasuk dalam Paket</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {paket.termasuk.map((item, idx) => (
              <li key={idx} style={{
                padding: '0.75rem 0',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.25rem' }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="fasilitas-section">
          <h3 className="fasilitas-judul">Itinerary Perjalanan</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {paket.itinerary.map((item, idx) => (
              <li key={idx} style={{
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.5rem',
                marginBottom: '0.75rem',
                borderLeft: '4px solid #2563eb'
              }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="fasilitas-section">
          <h3 className="fasilitas-judul">Destinasi yang Dikunjungi</h3>
          <div className="fasilitas-list">
            {paket.destinasi.map((dest, idx) => (
              <span key={idx} className="fasilitas-badge">
                {dest}
              </span>
            ))}
          </div>
        </div>

        <div className="tips-box">
          <p className="tips-label">💡 Informasi Penting</p>
          <p className="tips-teks">
            Harga dapat berubah sewaktu-waktu tergantung musim dan ketersediaan.
            Untuk booking dan informasi lebih lanjut, silakan hubungi customer service kami.
          </p>
        </div>

        <div className="aksi-tombol-grup">
          <button className="tombol tombol-primary tombol-besar">
            Booking Sekarang
          </button>
          <button
            className="tombol tombol-secondary tombol-besar"
            onClick={() => {
              window.open(
                "https://wa.me/6281234567890?text=Halo%20saya%20ingin%20menambah%20ke%20paket",
                "_blank"
              );
            }}
          >
            Tanya via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}