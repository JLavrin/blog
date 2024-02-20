export default function isSlugSave(slug: string) {
  const slugRegex = /^[a-zA-Z0-9-]+$/;

  return slugRegex.test(slug);
}
