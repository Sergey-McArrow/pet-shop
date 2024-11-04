import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FC, SetStateAction } from 'react'

type QuantitySwitchProps = {
  quantity: number
  setQuantity: (value: SetStateAction<number>) => void
}

export const QuantitySwitch: FC<QuantitySwitchProps> = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={'outline'}
        disabled={quantity === 1}
        onClick={() => setQuantity((prev) => prev - 1)}
      >
        -
      </Button>
      <Input
        className="w-24 text-center"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button
        variant={'outline'}
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </Button>
    </div>
  )
}
