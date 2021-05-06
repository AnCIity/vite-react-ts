import instance from './http'

class Article {
  private prefix = '/article'

  create = (body: { title: string; content: string; render: string; cover: string }) =>
    instance.post(`${this.prefix}/`, body)
}
