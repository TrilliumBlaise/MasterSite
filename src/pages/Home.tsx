import { toggleBackgroundSize } from '../utilities/toggleBackgroundSize'

export function Home() {
  toggleBackgroundSize('cover')
  return (
    <div className="d-flex justify-content-center bg-transparent" style={{ position: 'relative' }}>
      <h1 className="d-flex flex-column text-center fs-1" style={{ position: 'absolute', top: '12rem' }}>
        Welcome
        <br />
        to
        <br />
        Bryan Petko's
        <br />
        Website
      </h1>
    </div>
  )
}
