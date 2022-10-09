export interface ItemInterface {
  id: String,
  merchantId: String,
  paymentNode: Number,
  cnpjRoot: Number,
  date: String,
  paymentType: String,
  cardBrand: String,
  authorizationCode: String,
  truncatedCardNumber: String,
  grossAmount: Number,
  netAmount: Number,
  terminal: String,
  administrationFee: Number,
  channelCode: Number,
  channel: String,
  withdrawAmount: Number,
  minimumMDRAmmount: Number,
  mdrTaxAmount: Number,
  mdrFeeAmount: Number,
  status: String
}

export interface PaginationInterface {
  pageNumber: Number,
  pageSize: Number,
  totalElements: Number,
  numPages: Number,
  lastPage: Boolean,
  firstPage: Boolean
}

export interface SummaryInterface {
  totalQuantity: Number,
  totalAmount: Number,
  totalNetAmount: Number,
  totalAverageAmount: Number,
  initialDate: String,
  finalDate: String
}
