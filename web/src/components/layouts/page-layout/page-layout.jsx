function PageLayout({ children, className= "" }) {
  return (
    <div className={`container ${className}`} style={{ height: "100vh"}}>
      {children}
    </div>
  )
};

export default PageLayout;