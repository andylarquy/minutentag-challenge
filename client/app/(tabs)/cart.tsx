import { NotFoundEasterEgg } from "@/components/blocks/NotFoundEasterEgg";
import { MEME } from "@/model/easterEggAdapter";

export default function CartView() {
  return <NotFoundEasterEgg meme={MEME.Second} />;
}
