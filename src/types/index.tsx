export interface Koordinat {
  lat: number;
  lng: number;
}

export interface Kontak {
  telepon: string;
  email: string;
  website: string;
}

export interface Destinasi {
  id: number;
  slug: string;
  nama: string;
  lokasi: string;
  kota: string;
  provinsi: string;
  kategori: string;
  ringkasan: string;
  deskripsi: string;
  rating: number;
  jumlahReview: number;
  gambar: string[];
  thumbnail: string;
  koordinat: Koordinat;
  jamBuka: string;
  hargaMasuk: string;
  fasilitas: string[];
  tips: string;
  kontak: Kontak;
}

export interface Restoran {
  id: number;
  nama: string;
  lokasi: string;
  kategori: string;
  jenisKuliner: string;
  rangeHarga: string;
  rating: number;
  gambar: string;
  deskripsi: string;
  jarak: string;
  menu: string[];
}

export interface Penginapan {
  id: number;
  nama: string;
  lokasi: string;
  kategori: string;
  tipe: string;
  rangeHarga: string;
  rating: number;
  gambar: string;
  deskripsi: string;
  fasilitas: string[];
  tipeKamar: string[];
}

export interface PaketWisata {
  id: number;
  nama: string;
  durasi: string;
  harga: string;
  hargaPerOrang: string;
  minPeserta: number;
  gambar: string;
  rating: number;
  termasuk: string[];
  itinerary: string[];
  destinasi: string[];
}

export interface DataWisata {
  destinasi: Destinasi[];
  restoran: Restoran[];
  penginapan: Penginapan[];
  paketWisata: PaketWisata[];
}