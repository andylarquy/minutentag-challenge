import { NotFoundEasterEgg } from "@/components/blocks/NotFoundEasterEgg";
import { MEME } from "@/model/easterEggAdapter";

export default function ListView() {
  return <NotFoundEasterEgg meme={MEME.First} />;
}
