import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
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

          <a href="https://www.linkedin.com/in/jrgriffiniii">
            <StaticImage
              src="../images/linkedin.png"
              className="footer__linkedin"
              layout="fixed"
              width={50}
              height={50}
              alt="Linkedin profile picture"
              placeholder="blurred"
            />
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
