import { useParams } from "react-router-dom";

export default function ProductScreen() {
  const params = useParams();
  console.log(params.slug)
  return <h1>{params.slug}</h1>;
}
