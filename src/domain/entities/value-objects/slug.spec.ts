import { Slug } from './slug';

test('should be able to create a slug from text', () => {
  const inputText = "Hello, this is an example of text to create a slug."
  const expectedSlug = "hello-this-is-an-example-of-text-to-create-a-slug"

  const actualSlug = Slug.createSlug(inputText)
  
  expect(actualSlug).toEqual(expectedSlug)
})