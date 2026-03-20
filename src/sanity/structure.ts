// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('newsPost').title('News Posts'),
      S.documentTypeListItem('property').title('Properties'),
      S.divider(),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => item.getId() && !['newsPost', 'property', 'author', 'category'].includes(item.getId()),
      ),
    ])
