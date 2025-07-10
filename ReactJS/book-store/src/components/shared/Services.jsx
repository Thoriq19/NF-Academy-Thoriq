
import styles from "../../styles/Services.module.css";
import books from "../../Utils/Books";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Layanan Kami</h2>
      <div className={styles.cardContainer}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{book.name}</h3>
            <p className={styles.cardDescription}>{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
