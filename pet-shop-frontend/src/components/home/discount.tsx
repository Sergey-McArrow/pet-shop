import discountImg from '@/assets/discount.png'
import { Form } from '@/components/ui/form'

export const Discount = () => {
  return (
    <section className="container mx-auto w-11/12 md:w-full border border-gray-300 shadow-lg dark:shadow-gray-700 px-4 sm:px-8 mt-24 rounded-lg">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl text-center py-8 text-white">
        5% off on the first order
      </h2>
      <div className="grid md:grid-cols-2 items-center">
        <img
          src={discountImg}
          alt="Pets"
          className="mt-1 border-b border-gray-300 dark:border-gray-600"
        />
        <Form />
      </div>
    </section>
  )
}
