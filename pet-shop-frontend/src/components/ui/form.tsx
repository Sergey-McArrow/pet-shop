import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FC } from 'react'

type FormProps = {}

export const Form: FC<FormProps> = ({}) => {
  return (
    <form action="" className="grid gap-4 py-8">
      <Input
        type="text"
        placeholder="Name"
        className="placeholder:text-white"
      />
      <Input
        className="placeholder:text-white"
        type="text"
        placeholder="Phone number"
      />
      <Input
        className="placeholder:text-white"
        type="email"
        placeholder="Email"
      />
      <Button
        variant={'secondary'}
        className="w-full dark:bg-neutral-50 dark:text-black"
      >
        {' '}
        Get a discount
      </Button>
    </form>
  )
}
