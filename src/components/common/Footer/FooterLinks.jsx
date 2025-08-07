// components/footer/FooterLinks.jsx
const footerData = [
    {
        title: "Account",
        links: ["Log In", "Sign Up", "Redeem a Gift Card"],
    },
    {
        title: "Company",
        links: [
        "About",
        "Environmental Initiatives",
        "Factories",
        "DEI",
        "Careers",
        "International",
        "Accessibility",
        ],
    },
    {
        title: "Get Help",
        links: ["Help Center", "Return Policy", "Shipping Info", "Bulk Orders"],
    },
    {
        title: "Connect",
        links: ["Facebook", "Instagram", "Twitter", "Affiliates", "Out Stores"],
    },
]

const FooterLinks = () => {
  return (
    <div className="row">
        {footerData.map((col, i) => (
            <div className="col-6 col-md-3 mb-4" key={i}>
                <h6 className="fw-bold">{col.title}</h6>
                <ul className="list-unstyled">
                    {col.links.map((link, j) => (
                    <li key={j}>
                        <a href="#" className="text-muted text-decoration-none d-block py-1">
                        {link}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default FooterLinks