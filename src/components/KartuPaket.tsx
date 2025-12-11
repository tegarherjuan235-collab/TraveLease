import type { PaketWisata } from '../types';
import '../styles/halaman.css';

interface PropsKartuPaket {
  paket: PaketWisata;
  onClick: () => void;
}

export default function KartuPaket({ paket, onClick }: PropsKartuPaket) {
  return (
    <div className="paket-kartu-besar">
      <div className="paket-layout">
        <img src={paket.gambar} alt={paket.nama} className="paket-gambar-besar" />
        
        <div className="paket-konten-besar">
          <div className="paket-header-besar">
            <div>
              <h3 className="paket-nama-besar">{paket.nama}</h3>
              <div className="paket-info-ringkas">
                <span className="info-item">
                  📅 {paket.durasi}
                </span>
                <span className="info-item">
                  👥 Min {paket.minPeserta} orang
                </span>
                <span className="info-item">
                  <span className="bintang">★</span> {paket.rating}
                </span>
              </div>
            </div>
            
            <div className="paket-harga-box">
              <p className="label-harga">Mulai dari</p>
              <p className="paket-harga-besar">{paket.harga}</p>
              <p className="label-per-orang">per orang</p>
            </div>
          </div>
          
          <div className="termasuk-section">
            <h4 className="termasuk-judul">Termasuk dalam paket:</h4>
            <ul className="termasuk-list">
              {paket.termasuk.map((item, idx) => (
                <li key={idx} className="termasuk-item">
                  <span className="checkmark">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="itinerary-section">
            <h4 className="itinerary-judul">Itinerary:</h4>
            <ul className="itinerary-list">
              {paket.itinerary.map((item, idx) => (
                <li key={idx} className="itinerary-item">{item}</li>
              ))}
            </ul>
          </div>
          
          <button 
            className="tombol tombol-primary tombol-lebar"
            onClick={onClick}
          >
            Lihat Detail Lengkap
          </button>
        </div>
      </div>
    </div>
  );
}