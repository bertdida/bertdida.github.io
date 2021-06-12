import { useToast } from "hooks/useToast";

const emojis = ["🤘", "🚀", "🙌", "👍", "🦄", "📋", "🍻", "🍕", "✅", "🍩"];
let emojiIndex = 0;

export function useOnClickEmail() {
  const { toasts, addToast } = useToast();

  function onClick(event) {
    event.preventDefault();

    if (!navigator.clipboard) return;
    if (!event.currentTarget.hasAttribute("href")) return;
    if (!event.currentTarget.href.startsWith("mailto:")) return;
    if (toasts.length) return;

    navigator.clipboard.writeText(event.currentTarget.href.substring(7));

    emojiIndex = emojiIndex >= emojis.length ? 0 : emojiIndex;
    addToast(`${emojis[emojiIndex]} Email copied to clipboard!`);
    emojiIndex++;
  }

  return onClick;
}
