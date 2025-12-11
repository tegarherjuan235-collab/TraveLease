import { useState } from 'react';
import '../styles/galeri.css';

interface PropsGaleri {
  gambarList: string[];
  judul: string;
}

export default function Galeri({ gambarList, judul }: PropsGaleri) {
  const [lightboxTerbuka, setLightboxTerbuka] = useState(false);
  const [indeksSekarang, setIndeksSekarang] = useState(0);

  const bukaLightbox = (indeks: number) => {
    setIndeksSekarang(indeks);
    setLightboxTerbuka(true);
  };

  const tutupLightbox = () => {
    setLightboxTerbuka(false);
  };

  const gambarSelanjutnya = () => {
    setIndeksSekarang((indeksSekarang + 1) % gambarList.length);
  };

  const gambarSebelumnya = () => {
    setIndeksSekarang((indeksSekarang - 1 + gambarList.length) % gambarList.length);
  };

  return (
    <>
      <div className="galeri-grid">
        {gambarList.map((gambar, idx) => (
          <img
            key={idx}
            src={gambar}
            alt={`${judul} ${idx + 1}`}
            className="galeri-thumbnail"
            onClick={() => bukaLightbox(idx)}
            loading="lazy"
          />
        ))}
      </div>

      {lightboxTerbuka && (
        <div className="lightbox-overlay" onClick={tutupLightbox}>
          <button 
            className="lightbox-tutup" 
            onClick={tutupLightbox}
            aria-label="Tutup"
          >
            ✕
          </button>
          
          <button 
            className="lightbox-prev" 
            onClick={(e) => {
              e.stopPropagation();
              gambarSebelumnya();
            }}
            aria-label="Sebelumnya"
          >
            ‹
          </button>
          
          <img 
            src={gambarList[indeksSekarang]} 
            alt={`${judul} ${indeksSekarang + 1}`}
            className="lightbox-gambar"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            className="lightbox-next" 
            onClick={(e) => {
              e.stopPropagation();
              gambarSelanjutnya();
            }}
            aria-label="Selanjutnya"
          >
            ›
          </button>
          
          <div className="lightbox-counter">
            {indeksSekarang + 1} / {gambarList.length}
          </div>
        </div>
      )}
    </>
  );
}