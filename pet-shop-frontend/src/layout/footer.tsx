import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="py-8 shadow-lg rounded-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p className="mb-2">Phone: +49 30 915-88492</p>
            <p>Address: Wallstraße 9-13, 10179 Berlin, Deutschland</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Socials</h2>
            <div className="flex space-x-4">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Working Hours</h2>
            <p>24 hours a day</p>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.569421728799!2d13.4050!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e3b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}
