import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => id === article.id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ msg: `Article with the id of ${id} is not found.` });
  }
}
