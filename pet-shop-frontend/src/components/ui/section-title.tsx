import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { Link } from 'react-router-dom'

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
    <div className="flex items-center justify-between pb-10">
      <h2 className="font-bold text-6xl pr-8">{title}</h2>
      <hr className="border-gray-300 my-4 w-2/3" />
      <Link to={link}>
        <Button variant={'outline'}>{btnText}</Button>
      </Link>
    </div>
  )
}
