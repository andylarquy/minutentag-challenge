import { NotFoundEasterEgg } from "@/components/blocks/NotFoundEasterEgg";
import { MEME } from "@/model/easterEggAdapter";

export default function SettingsView() {
  return <NotFoundEasterEgg meme={MEME.Third} />;
}
