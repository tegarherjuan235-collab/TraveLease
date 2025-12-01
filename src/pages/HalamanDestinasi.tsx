import { useState } from 'react';
import type { Destinasi } from '../types';
import KartuDestinasi from '../components/KartuDestinasi';
import '../styles/halaman.css';

interface PropsHalamanDestinasi {
  destinasiList: Destinasi[];
  onKlikDestinasi: (destinasi: Destinasi) => void;
  kataKunciPencarian: string;
  filterKategori: string;
  onFilterKategoriChange: (kategori: string) => void;
}

export default function HalamanDestinasi({ 
  destinasiList, 
  onKlikDestinasi,
  kataKunciPencarian,
  filterKategori,
  onFilterKategoriChange
}: PropsHalamanDestinasi) {
  
  const [filterKabupaten, setFilterKabupaten] = useState('semua');
  const filterProvinsi = 'Nusa Tenggara Barat'; // Fixed ke NTB saja

  // Daftar kabupaten di Lombok
  const kabupatenLombok = [
    'Lombok Barat',
    'Lombok Tengah', 
    'Lombok Timur',
    'Lombok Utara',
    'Mataram'
  ];

  const destinasiTerfilter = destinasiList.filter(destinasi => {
    const cocokPencarian = destinasi.nama.toLowerCase().includes(kataKunciPencarian.toLowerCase()) ||
                           destinasi.lokasi.toLowerCase().includes(kataKunciPencarian.toLowerCase());
    const cocokKategori = filterKategori === 'semua' || destinasi.kategori === filterKategori;
    const cocokKabupaten = filterKabupaten === 'semua' || destinasi.kota === filterKabupaten;
    const cocokProvinsi = destinasi.provinsi === filterProvinsi;
    
    return cocokPencarian && cocokKategori && cocokKabupaten && cocokProvinsi;
  });

  return (
    <div className="halaman">
      <div className="kontainer">
        <h2 className="halaman-judul">Destinasi Wisata</h2>
        
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-row">
            <div className="filter-item">
              <label className="filter-label">Kabupaten Lombok:</label>
              <select
                className="filter-select"
                value={filterKabupaten}
                onChange={(e) => setFilterKabupaten(e.target.value)}
              >
                <option value="semua">Semua Kabupaten</option>
                {kabupatenLombok.map((kabupaten) => (
                  <option key={kabupaten} value={kabupaten}>
                    {kabupaten}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label className="filter-label">Kategori:</label>
              <select
                className="filter-select"
                value={filterKategori}
                onChange={(e) => onFilterKategoriChange(e.target.value)}
              >
                <option value="semua">Semua Kategori</option>
                <option value="wisata-alam">Wisata Alam</option>
                <option value="wisata-budaya">Wisata Budaya</option>
                <option value="wisata-kuliner">Wisata Kuliner</option>
              </select>
            </div>
          </div>
        </div>
        
        {destinasiTerfilter.length === 0 ? (
          <div className="tidak-ada-hasil">
            <p className="tidak-ada-hasil-teks">
              Tidak ada destinasi yang sesuai dengan pencarian Anda.
            </p>
          </div>
        ) : (
          <>
            <p className="hasil-pencarian">
              Menampilkan {destinasiTerfilter.length} destinasi di Nusa Tenggara Barat
              {filterKabupaten !== 'semua' && ` - ${filterKabupaten}`}
            </p>
            <div className="grid grid-3">
              {destinasiTerfilter.map((destinasi) => (
                <KartuDestinasi
                  key={destinasi.id}
                  destinasi={destinasi}
                  onClick={() => onKlikDestinasi(destinasi)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}