export interface Help{
  title: string
}

export function queryHelpList (id: string) {
  return {
    url: '/articles/category-english-name/helpful_center',
    method: 'get',
    params: { id }
  }
}