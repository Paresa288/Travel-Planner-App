function PageLayout({ children, className= "" }) {
  return (
    <div className={`container py-2 ${className}`} style={{ height: "100vh"}}>
      {children}
    </div>
  )
};

export default PageLayout;