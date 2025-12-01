import type { Destinasi } from '../types';
import Galeri from './Galeri';
import PetaMaps from './PetaMaps';
import '../styles/detail.css';

interface PropsDetailDestinasi {
  destinasi: Destinasi;
  onTutup: () => void;
}

export default function DetailDestinasi({ destinasi, onTutup }: PropsDetailDestinasi) {
  return (
    <div className="detail-container">
      <div className="detail-konten">
        <button onClick={onTutup} className="tombol-kembali">
          Kembali ke Daftar
        </button>

        <h1 className="detail-judul">{destinasi.nama}</h1>

        <div className="detail-info-ringkas">
          <span className="detail-lokasi">
            {destinasi.lokasi}
          </span>
          <span className="detail-separator">•</span>
          <span className="detail-rating">
            <span className="bintang">★</span>
            <strong>{destinasi.rating}</strong>
            <span className="jumlah-review">({destinasi.jumlahReview} review)</span>
          </span>
        </div>

        <Galeri gambarList={destinasi.gambar} judul={destinasi.nama} />

        <div className="detail-deskripsi">
          {destinasi.deskripsi.split('\n\n').map((paragraf, idx) => (
            <p key={idx} className="paragraf">{paragraf}</p>
          ))}
        </div>

        <PetaMaps koordinat={destinasi.koordinat} nama={destinasi.nama} />

        <div className="info-praktis-box">
          <h3 className="info-praktis-judul">Informasi Praktis</h3>
          <div className="info-praktis-grid">
            <div className="info-item">
              <div className="info-ikon">🕐</div>
              <div>
                <p className="info-label">Jam Buka</p>
                <p className="info-nilai">{destinasi.jamBuka}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">💰</div>
              <div>
                <p className="info-label">Harga Masuk</p>
                <p className="info-nilai">{destinasi.hargaMasuk}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">📞</div>
              <div>
                <p className="info-label">Kontak</p>
                <p className="info-nilai">{destinasi.kontak.telepon}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">📧</div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-nilai">{destinasi.kontak.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fasilitas-section">
          <h3 className="fasilitas-judul">Fasilitas</h3>
          <div className="fasilitas-list">
            {destinasi.fasilitas.map((fasilitas, idx) => (
              <span key={idx} className="fasilitas-badge">
                {fasilitas}
              </span>
            ))}
          </div>
        </div>

        <div className="tips-box">
          <p className="tips-label">💡 Tips Berkunjung</p>
          <p className="tips-teks">{destinasi.tips}</p>
        </div>

        <div className="aksi-tombol-grup">
          <button className="tombol tombol-primary tombol-besar">
            Booking Sekarang
          </button>
          <button
            className="tombol tombol-secondary tombol-besar"
            onClick={() => {
              window.open(
                "https://wa.me/6281915771010?text=Halo%20saya%20ingin%20menambah%20ke%20paket",
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