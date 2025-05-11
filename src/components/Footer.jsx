import React from "react";

const links = {
  Shop: [
    "Gift cards",
    "Etsy Registry",
    "Sitemap",
    "Etsy blog",
    "Etsy United States",
  ],
  About: [
    "Policies",
    "Investors",
    "Careers",
    "Press",
    "Impact",
  ],
  Help: [
    "Help Center",
    "Privacy",
    "Terms of Use",
    "Contact",
    "Accessibility",
  ],
};

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    img: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
    img: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  },
];

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "#fbeee6",
        borderTop: "1px solid #ececec",
        marginTop: 56,
        padding: "40px 7vw 12px",
        color: "#664b22",
        fontSize: "1rem",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(164px,1fr))",
          gap: 40,
          alignItems: "flex-start",
          paddingBottom: 24,
          borderBottom: "1px solid #eddcc7",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Shop</div>
          {links.Shop.map((txt) => (
            <div key={txt} style={{ marginBottom: 7 }}>
              <a
                href="#"
                style={{
                  color: "#664b22",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                {txt}
              </a>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>About</div>
          {links.About.map((txt) => (
            <div key={txt} style={{ marginBottom: 7 }}>
              <a
                href="#"
                style={{
                  color: "#664b22",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                {txt}
              </a>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Help</div>
          {links.Help.map((txt) => (
            <div key={txt} style={{ marginBottom: 7 }}>
              <a
                href="#"
                style={{
                  color: "#664b22",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                {txt}
              </a>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Connect</div>
          <div style={{ display: "flex", gap: 14, margin: "2px 0 14px 0" }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  width={26}
                  height={26}
                  style={{ borderRadius: 6, filter: "brightness(.96)" }}
                />
              </a>
            ))}
          </div>
          <div>
            <a
              href="#"
              style={{
                color: "#664b22",
                fontWeight: 400,
                textDecoration: "underline",
              }}
            >
              Download the Etsy App
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 18,
          textAlign: "center",
          fontSize: "0.99rem",
          color: "#ad8758",
        }}
      >
        <span style={{ fontWeight: 700 }}>
          &copy; {new Date().getFullYear()} Etsy Clone
        </span>{" "}
        &middot; Handmade for demo purposes. Not affiliated with Etsy.
      </div>
    </footer>
  );
}

export default Footer;
