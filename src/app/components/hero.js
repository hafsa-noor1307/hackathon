import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <p>Email: mhhasanul@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.navbar}>
          <h1 className={styles.logo}>Hekto</h1>
          <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/pages">Pages</a>
            <a href="/products">Products</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </header>
      <main className={styles.heroContent}>
        <div className={styles.textSection}>
          <p>Best Furniture For Your Castle...</p>
          <h1>New Furniture Collection Trends in 2020</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/images/chair.png" // Replace with the correct path to your image
            alt="Chair"
            className={styles.chairImage}
          />
          <div className={styles.discountBadge}>50% off</div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
