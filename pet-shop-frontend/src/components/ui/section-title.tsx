import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

type SectionTitleProps = {
  link: string
  title: string
  btnText: string
}

export const SectionTitle: FC<SectionTitleProps> = ({
  link,
  title,
  btnText,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 sm:pb-10">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl pr-0 sm:pr-20 mb-4 sm:mb-0">
        {title}
      </h2>
      <div className="flex items-center w-full sm:w-auto">
        <hr className="border-gray-300 my-4 w-full sm:w-auto sm:ml-auto" />
        <Link to={link} className="ml-4">
          <Button variant={'outline'}>{btnText}</Button>
        </Link>
      </div>
    </div>
  )
}
