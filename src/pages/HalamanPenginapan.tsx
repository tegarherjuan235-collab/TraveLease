import type { Penginapan } from '../types';
import KartuPenginapan from '../components/KartuPenginapan';
import '../styles/halaman.css';

interface PropsHalamanPenginapan {
  penginapanList: Penginapan[];
  onKlikPenginapan: (penginapan: Penginapan) => void; // Tambahkan prop ini
}

export default function HalamanPenginapan({ penginapanList, onKlikPenginapan }: PropsHalamanPenginapan) {
  return (
    <div className="halaman">
      <div className="kontainer">
        <h2 className="halaman-judul">Penginapan</h2>
        <div className="grid grid-2">
          {penginapanList.map((penginapan) => (
            <KartuPenginapan 
              key={penginapan.id} 
              penginapan={penginapan}
              onClick={() => onKlikPenginapan(penginapan)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}