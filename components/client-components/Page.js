import Meta from "./Meta"

export default function Page({ children }) {
    return (
      <>
        <div className="main">
          <Meta />
          <div className="page">{children}</div>
        </div>
      </>
    )
  }