function Footer() {
  return (
    <div className="container-expand bg-secondary mt-2">
      <footer className="py-2">
        <ul className="nav justify-content-center border-bottom border-primary p-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-dark">Front Page</a>
          </li>
          <li className="nav-item">
            <a href="/travels" className="nav-link px-2 text-dark">My Page</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-dark">About</a>
          </li>
        </ul>
        <p className="text-center ">© Paresa288 @ IronHack 2025</p>
      </footer>
    </div>
  )
};

export default Footer;