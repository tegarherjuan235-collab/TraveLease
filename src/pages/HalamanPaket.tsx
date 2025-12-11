import type { PaketWisata } from '../types';
import KartuPaket from '../components/KartuPaket';
import '../styles/halaman.css';

interface PropsHalamanPaket {
  paketList: PaketWisata[];
  onKlikPaket: (paket: PaketWisata) => void;
}

export default function HalamanPaket({ paketList, onKlikPaket }: PropsHalamanPaket) {
  return (
    <div className="halaman">
      <div className="kontainer">
        <h2 className="halaman-judul">Paket Wisata</h2>
        <div className="paket-list-wrapper">
          {paketList.map((paket) => (
            <KartuPaket 
              key={paket.id} 
              paket={paket}
              onClick={() => onKlikPaket(paket)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}