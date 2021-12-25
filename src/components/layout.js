import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <>
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
        <footer className="footer">
          <a href="https://keyoxide.org/512E2A8AF3B4DE3D4163200FB673F8EB3C7B5EF1">
            <StaticImage
              src="../images/keyoxide.png"
              className="footer__keyoxide"
              layout="fixed"
              width={50}
              height={50}
              alt="Keyoxide profile picture"
              placeholder="blurred"
            />
          </a>

          <a href="https://github.com/jrgriffiniii">
            <StaticImage
              src="../images/github.png"
              className="footer__github"
              layout="fixed"
              width={50}
              height={50}
              alt="Github profile picture"
              placeholder="blurred"
            />
          </a>

          <a href="https://tkifv7cinnoyn4edcmwsmvtg2hebhfhtenlvjczchuypsrlwdl5r6lid.onion">
            <StaticImage
              src="../images/btcpay_server.png"
              className="footer__btcpay_server"
              layout="fixed"
              width={50}
              height={50}
              alt="BTCPay server icon"
              placeholder="blurred"
            />
          </a>

          <a href="https://localmonero.co/blocks">
            <StaticImage
              src="../images/monero.png"
              className="footer__monero"
              layout="fixed"
              width={50}
              height={50}
              alt="Monero icon"
              placeholder="blurred"
            />
          </a>

          <a href="https://paynym.is">
            <StaticImage
              src="../images/paynym.png"
              className="footer__paynym"
              layout="fixed"
              width={50}
              height={50}
              alt="Paynym icon"
              placeholder="blurred"
            />
          </a>
        </footer>
    </>
  )
}

export default Layout
