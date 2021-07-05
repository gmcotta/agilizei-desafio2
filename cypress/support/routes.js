class Routes {
  alias = {
    POST_ARTICLES: 'POST-Articles',
    GET_ARTICLES_TITLE: 'GET-ArticlesTitle',
    GET_ARTICLES_TITLE_COMMENTS: 'GET-ArticlesTitleComments',
    GET_TAGS: 'GET-Tags',
    GET_ARTICLES_FEED: 'GET-ArticlesFeed',
  }

  init() {
    cy.intercept('POST', '**/api/articles')
      .as(this.alias.POST_ARTICLES);
    cy.intercept('GET', '**/api/articles/title-**')
      .as(this.alias.GET_ARTICLES_TITLE);
    cy.intercept('GET', '**/api/articles/title-**/comments')
      .as(this.alias.GET_ARTICLES_TITLE_COMMENTS);
    cy.intercept('GET', '**/api/tags')
      .as(this.alias.GET_TAGS);
    cy.intercept('GET', '**/api/articles/feed**')
      .as(this.alias.GET_ARTICLES_FEED);
  }
}

export default new Routes();
