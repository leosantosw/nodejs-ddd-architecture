export class Slug {
    private static removeAccents(str: string): string {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    }
  
    static createSlug(text: string): string {
      const cleanText = Slug.removeAccents(text)
      return cleanText
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase()
    }
  }