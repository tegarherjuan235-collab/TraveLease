import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="kontainer">
        <div className="footer-grid">
          <div className="footer-kolom">
            <h3 className="footer-judul">TraveLease</h3>
            <p className="footer-deskripsi">
              Jelajahi keindahan Lombok bersama kami. Pengalaman wisata terbaik dengan harga terjangkau.
            </p>
          </div>
          
          <div className="footer-kolom">
            <h4 className="footer-subjudul">Kontak</h4>
            <p className="footer-item">📞 +62 819 157 710 10</p>
            <p className="footer-item">📧 info@TraveLease.com</p>
            <p className="footer-item">📍 Mataram, Lombok, Indonesia</p>
          </div>
          
          <div className="footer-kolom">
            <h4 className="footer-subjudul">Ikuti Kami</h4>
            <div className="sosial-media">
              <a href="#" className="sosmed-link">Facebook</a>
              <a href="#" className="sosmed-link">Instagram</a>
              <a href="#" className="sosmed-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 TraveLease. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}