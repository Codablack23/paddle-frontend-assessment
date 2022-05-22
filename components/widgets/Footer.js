import Link from 'next/link'

export default function Footer({isDark}){
  return(
    <footer className={`main-footer footer-${isDark?"dark":"light"}`}>
    <div className="social-media">
      <p>
       <i className="bi bi-youtube"></i>
      </p>
      <p>
      <i className="bi bi-facebook"></i>
      </p>
      <p>
      <i className="bi bi-linkedin"></i>
      </p>
      <p>
      <i className="bi bi-instagram"></i>
      </p>
      <p>
      <i className="bi bi-twitter"></i>
      </p>
    </div>
    <div className="footer-links">
      <Link href="/">
       <a  className="footer-link">Terms Of Service</a>
       </Link>
       <Link href="/">
       <a  className="footer-link">Privacy Policy</a>
       </Link>
    </div>
    <p className="rights">
    Copyright 2021 @ Peddle Technologies. All Rights Reserved.
    </p>
</footer>
  )
}