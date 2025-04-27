import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Team(){
    return(
        <>
        <Header/>
        <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Our Team</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em" aria-hidden="true"><use xlink:href="#collection"/></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Thoriq - Lead Developer</h3>
        <p>Thoriq merancang dan membangun seluruh sistem website bookstore kami. Dengan keahlian di React dan pengembangan web, ia memastikan platform berjalan cepat, aman, dan ramah pengguna.</p>
        <a href="#" className="icon-link">
          Contact us
          <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em" aria-hidden="true"><use xlink:href="#people-circle"/></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Tedy Wijaya - Book Curator & Content Manager</h3>
        <p>Tedy bertanggung jawab memilih koleksi buku yang tersedia di toko kami. Ia membaca dan meninjau setiap buku untuk memastikan hanya karya-karya terbaik yang sampai ke rak digital kami.</p>
        <a href="#" className="icon-link">
          Contact us
          <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em" aria-hidden="true"><use xlink:href="#toggles2"/></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Rizky Rahadian - Customer Experience & UI Designer</h3>
        <p>Rizky mendesain tampilan website serta memastikan pelanggan mendapatkan pengalaman terbaik saat menjelajah dan membeli buku. Dia percaya bahwa desain yang sederhana dan responsif bisa membawa pelanggan kembali lagi dan lagi.</p>
        <a href="#" className="icon-link">
          Contact us
          <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
        </>
    )
}