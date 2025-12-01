import type { Destinasi } from '../types';
import '../styles/kartu.css';

interface PropsKartuDestinasi {
  destinasi: Destinasi;
  onClick: () => void;
}

export default function KartuDestinasi({ destinasi, onClick }: PropsKartuDestinasi) {
  return (
    <div className="kartu" onClick={onClick}>
      <div className="kartu-gambar-wrapper">
        <img 
          src={destinasi.thumbnail} 
          alt={destinasi.nama} 
          className="kartu-gambar"
          loading="lazy"
        />
        <div className="rating-badge">
          <span className="bintang">★</span>
          <span className="nilai">{destinasi.rating}</span>
        </div>
      </div>
      
      <div className="kartu-konten">
        <h3 className="kartu-judul">{destinasi.nama}</h3>
        <div className="kartu-lokasi">
          <span className="ikon-lokasi">📍</span>
          {destinasi.lokasi}
        </div>
        <p className="kartu-deskripsi">{destinasi.ringkasan}</p>
        <button className="tombol tombol-primary kartu-tombol">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}