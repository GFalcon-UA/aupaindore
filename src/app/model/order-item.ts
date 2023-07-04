export interface OrderItem {
  bagNumber?: string
  label?: string
  category?: string
  item?: string
  instructions?: string
  itemPrice?: number
  cutlery?: boolean
  orderedAt?: string
  isRoot?: boolean
  hasOption?: boolean
}
