import { useState } from 'react';
import type { HalamanAktif } from '../App';
import type { PaketWisata } from '../types';
import dataWisata from '../data/data.json';
import '../styles/beranda.css';

interface PropsBeranda {
  onGantiHalaman: (halaman: HalamanAktif) => void;
  onPencarian: (kataKunci: string, kategori: string) => void;
  onKlikPaket: (paket: PaketWisata) => void;
}

export default function Beranda({ onGantiHalaman, onPencarian, onKlikPaket }: PropsBeranda) {
  const [kataKunci, setKataKunci] = useState('');
  const [kategori, setKategori] = useState('semua');

  const handleCari = () => {
    onPencarian(kataKunci, kategori);
  };

  return (
    <div className="beranda">
      {/* Hero Banner */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-konten">
            <h2 className="hero-judul">Jelajahi Keindahan Lombok</h2>
            <p className="hero-subjudul">Temukan destinasi impian Anda bersama kami</p>
            
            {/* Form Pencarian */}
            <div className="form-pencarian">
              <div className="pencarian-grup">
                <div className="input-pencarian-wrapper">
                  <span className="ikon-cari">🔍</span>
                  <input
                    type="text"
                    placeholder="Cari destinasi, kota, atau aktivitas..."
                    className="input-pencarian"
                    value={kataKunci}
                    onChange={(e) => setKataKunci(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCari()}
                  />
                </div>
                
                <select
                  className="select-kategori"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                >
                  <option value="semua">Semua Kategori</option>
                  <option value="wisata-alam">Wisata Alam</option>
                  <option value="wisata-budaya">Wisata Budaya</option>
                  <option value="wisata-kuliner">Wisata Kuliner</option>
                </select>
                
                <button className="tombol tombol-cari" onClick={handleCari}>
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paket Populer */}
      <section className="paket-populer-section">
        <div className="kontainer">
          <h2 className="section-judul">Paket Wisata Populer</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Pilihan paket terbaik dengan rating tertinggi
          </p>
          <div className="paket-grid">
            {/* Hanya tampilkan 2 paket dengan rating tertinggi */}
            {dataWisata.paketWisata
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 2)
              .map((paket) => (
                <div key={paket.id} className="paket-kartu">
                  <img src={paket.gambar} alt={paket.nama} className="paket-gambar" />
                  <div className="paket-konten">
                    <div className="paket-header">
                      <h3 className="paket-nama">{paket.nama}</h3>
                      <div className="paket-rating">
                        <span className="bintang">★</span>
                        <span>{paket.rating}</span>
                      </div>
                    </div>
                    
                    <div className="paket-info">
                      <span className="paket-info-item">
                        📅 {paket.durasi}
                      </span>
                      <span className="paket-info-item">
                        👥 Min {paket.minPeserta} orang
                      </span>
                    </div>
                    
                    <p className="paket-harga">{paket.harga}</p>
                    
                    <button 
                      className="tombol tombol-primary"
                      onClick={() => onKlikPaket(paket)}
                    >
                      Lihat Detail Paket
                    </button>
                  </div>
                </div>
              ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button 
              className="tombol tombol-secondary"
              style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}
              onClick={() => onGantiHalaman('paket')}
            >
              Lihat Semua Paket Wisata →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}