import type { Restoran } from '../types';
import KartuRestoran from '../components/KartuRestoran';
import '../styles/halaman.css';

interface PropsHalamanRestoran {
  restoranList: Restoran[];
  onKlikRestoran: (restoran: Restoran) => void; // Tambahkan prop ini
}

export default function HalamanRestoran({ restoranList, onKlikRestoran }: PropsHalamanRestoran) {
  return (
    <div className="halaman">
      <div className="kontainer">
        <h2 className="halaman-judul">Restoran & Kuliner</h2>
        <div className="grid grid-2">
          {restoranList.map((restoran) => (
            <KartuRestoran 
              key={restoran.id} 
              restoran={restoran}
              onClick={() => onKlikRestoran(restoran)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}