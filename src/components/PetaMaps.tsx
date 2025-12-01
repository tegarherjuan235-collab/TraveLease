import type { Koordinat } from '../types';
import '../styles/peta.css';

interface PropsPetaMaps {
  koordinat: Koordinat;
  nama: string;
}

export default function PetaMaps({ koordinat, nama }: PropsPetaMaps) {
  const urlEmbedPeta = `https://www.google.com/maps?q=${koordinat.lat},${koordinat.lng}&hl=id&z=15&output=embed`;
  const urlArahkan = `https://www.google.com/maps/dir/?api=1&destination=${koordinat.lat},${koordinat.lng}`;
  const urlBukaGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${koordinat.lat},${koordinat.lng}`;

  return (
    <div className="peta-container">
      <h3 className="peta-judul">Lokasi</h3>
      <div className="peta-wrapper">
        <iframe
          src={urlEmbedPeta}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Peta lokasi ${nama}`}
        />
      </div>
      <div className="peta-tombol-grup">
        <a 
          href={urlArahkan} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="tombol tombol-hijau"
        >
          🧭 Arahkan ke Sini
        </a>
        <a 
          href={urlBukaGoogleMaps}
          target="_blank" 
          rel="noopener noreferrer" 
          className="tombol tombol-outline-hijau"
        >
          🗺️ Buka di Google Maps
        </a>
      </div>
    </div>
  );
}