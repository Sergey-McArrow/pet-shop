import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TSorted } from '@/types/sortAndFilter'

type SotrAndFilterProps = {
  handlePriceFromChange: (e: ChangeEvent<HTMLInputElement>) => void
  handlePriceToChange: (e: ChangeEvent<HTMLInputElement>) => void
  acceptDiscount: boolean
  setAcceptDiscount: Dispatch<SetStateAction<boolean>>
  sortOrder: TSorted
  handleSortOrderChange: (value: string) => void
}

export const SortAndFilter: FC<SotrAndFilterProps> = ({
  handlePriceFromChange,
  handlePriceToChange,
  acceptDiscount,
  setAcceptDiscount,
  sortOrder,
  handleSortOrderChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-center py-10">
      <div className="flex gap-4 items-center">
        <p>Price</p>
        <Input
          type="text"
          placeholder="from"
          className="w-24"
          onChange={handlePriceFromChange}
        />
        <Input
          type="text"
          placeholder="to"
          className="w-24"
          onChange={handlePriceToChange}
        />
      </div>
      <div className="flex gap-4 items-center">
        <label
          htmlFor="discount"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Discounted items
        </label>
        <input
          type="checkbox"
          className="bg-inherit"
          id="discount"
          checked={acceptDiscount}
          onChange={(e) => setAcceptDiscount(e.target.checked)}
        />
      </div>
      <div className="flex gap-4 items-center">
        <p>Sorted</p>
        <Select value={sortOrder} onValueChange={handleSortOrderChange}>
          <SelectTrigger className="min-w-24 bg-inherit border border-gray-800">
            <SelectValue placeholder="by default" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">by default</SelectItem>
            <SelectItem value="asc">ascending</SelectItem>
            <SelectItem value="desc">descending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
