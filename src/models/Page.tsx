// Page interface in TypeScript
interface Page<T> {
  content: T[]; // Array of items (content) on the current page
  totalPages: number; // Total number of pages
  totalElements: number; // Total number of elements across all pages
  size: number; // Number of elements per page
  number: number; // Current page number (0-indexed)
  first: boolean; // Is this the first page?
  last: boolean; // Is this the last page?
}

export default Page;
