export default function course({
  layout,
  title,
  basePath,
  concept,
  example,
  exercises,
  bestPractices,
  references,
  page // function
}) {
  page.title = title
  page.layout = layout
  page.basePath = basePath
  page.concept = concept
  page.example = example
  page.exercises = exercises
  page.bestPractices = bestPractices
  page.references = references

  return page
}
