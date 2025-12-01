import { useState } from 'react';
import type { Destinasi, PaketWisata, Restoran, Penginapan } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import HalamanDestinasi from './pages/HalamanDestinasi';
import HalamanRestoran from './pages/HalamanRestoran';
import HalamanPenginapan from './pages/HalamanPenginapan';
import HalamanPaket from './pages/HalamanPaket';
import DetailDestinasi from './components/DetailDestinasi';
import DetailPaket from './components/DetailPaket';
import DetailRestoran from './components/DetailRestoran';
import DetailPenginapan from './components/DetailPenginapan';
import dataWisata from './data/data.json';

export type HalamanAktif = 'beranda' | 'destinasi' | 'restoran' | 'penginapan' | 'paket';

function App() {
  const [halamanAktif, setHalamanAktif] = useState<HalamanAktif>('beranda');
  const [destinasiTerpilih, setDestinasiTerpilih] = useState<Destinasi | null>(null);
  const [paketTerpilih, setPaketTerpilih] = useState<PaketWisata | null>(null);
  const [restoranTerpilih, setRestoranTerpilih] = useState<Restoran | null>(null);
  const [penginapanTerpilih, setPenginapanTerpilih] = useState<Penginapan | null>(null);
  const [kataKunciPencarian, setKataKunciPencarian] = useState('');
  const [filterKategori, setFilterKategori] = useState('semua');

  const tampilkanDetailDestinasi = (destinasi: Destinasi) => {
    setDestinasiTerpilih(destinasi);
  };

  const tutupDetailDestinasi = () => {
    setDestinasiTerpilih(null);
  };

  const tampilkanDetailPaket = (paket: PaketWisata) => {
    setPaketTerpilih(paket);
  };

  const tutupDetailPaket = () => {
    setPaketTerpilih(null);
  };

  const tampilkanDetailRestoran = (restoran: Restoran) => {
    setRestoranTerpilih(restoran);
  };

  const tutupDetailRestoran = () => {
    setRestoranTerpilih(null);
  };

  const tampilkanDetailPenginapan = (penginapan: Penginapan) => {
    setPenginapanTerpilih(penginapan);
  };

  const tutupDetailPenginapan = () => {
    setPenginapanTerpilih(null);
  };

  const handlePencarian = (kataKunci: string, kategori: string) => {
    setKataKunciPencarian(kataKunci);
    setFilterKategori(kategori);
    setHalamanAktif('destinasi');
  };

  // Jika ada destinasi terpilih, tampilkan detail destinasi
  if (destinasiTerpilih) {
    return <DetailDestinasi destinasi={destinasiTerpilih} onTutup={tutupDetailDestinasi} />;
  }

  // Jika ada paket terpilih, tampilkan detail paket
  if (paketTerpilih) {
    return <DetailPaket paket={paketTerpilih} onTutup={tutupDetailPaket} />;
  }

  // Jika ada restoran terpilih, tampilkan detail restoran
  if (restoranTerpilih) {
    return <DetailRestoran restoran={restoranTerpilih} onTutup={tutupDetailRestoran} />;
  }

  // Jika ada penginapan terpilih, tampilkan detail penginapan
  if (penginapanTerpilih) {
    return <DetailPenginapan penginapan={penginapanTerpilih} onTutup={tutupDetailPenginapan} />;
  }

  return (
    <div className="app">
      <Header halamanAktif={halamanAktif} onGantiHalaman={setHalamanAktif} />
      
      <main className="konten-utama">
        {halamanAktif === 'beranda' && (
          <Beranda 
            onGantiHalaman={setHalamanAktif}
            onPencarian={handlePencarian}
            onKlikPaket={tampilkanDetailPaket}
          />
        )}
        
        {halamanAktif === 'destinasi' && (
          <HalamanDestinasi
            destinasiList={dataWisata.destinasi}
            onKlikDestinasi={tampilkanDetailDestinasi}
            kataKunciPencarian={kataKunciPencarian}
            filterKategori={filterKategori}
            onFilterKategoriChange={setFilterKategori}
          />
        )}
        
        {halamanAktif === 'restoran' && (
          <HalamanRestoran 
            restoranList={dataWisata.restoran}
            onKlikRestoran={tampilkanDetailRestoran}
          />
        )}
        
        {halamanAktif === 'penginapan' && (
          <HalamanPenginapan 
            penginapanList={dataWisata.penginapan}
            onKlikPenginapan={tampilkanDetailPenginapan}
          />
        )}
        
        {halamanAktif === 'paket' && (
          <HalamanPaket 
            paketList={dataWisata.paketWisata}
            onKlikPaket={tampilkanDetailPaket}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;