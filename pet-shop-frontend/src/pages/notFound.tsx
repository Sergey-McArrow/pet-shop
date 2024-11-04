import notFoundImg from '@/assets/404.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className="mx-auto container flex items-center justify-center">
      <div className="w-2/3">
        <div className="flex items-center justify-center text-9xl font-black">
          <span>4</span>
          <img src={notFoundImg} alt="404" className="mb-16" />
          <span>4</span>
        </div>
        <div className="text-center">
          <h1>Page not found</h1>
          <p className="text-slate-500 py-5 w-1/2 mx-auto">
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
