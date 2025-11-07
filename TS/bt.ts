export type Response = {
  success: boolean;
  status: number;
  message: string | null;
  data: Data;
};

type Data = {
  category: Category;
  filters: Filters;
};

type Category = {
  data: DataCategory;
  pagination: Pagination;
};
type Filters = {
  tags: String[];
  options: OptionsFilters;
  prices: PricesFilters;
  ket_cau:Ket_cau;
  sex:
};
type DataCategory = {};
type Pagination = {};
