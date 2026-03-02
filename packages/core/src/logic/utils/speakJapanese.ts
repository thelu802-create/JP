let fallbackAudio: HTMLAudioElement | null = null;

function isCapacitorMobile(): boolean {
  if (typeof window === "undefined") return false;
  const platform = (window as Window & { Capacitor?: { getPlatform?: () => string } }).Capacitor?.getPlatform?.();
  return platform === "android" || platform === "ios";
}

function playFallbackAudio(text: string): void {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${encodeURIComponent(text)}`;
  fallbackAudio?.pause();
  fallbackAudio = new Audio(url);
  void fallbackAudio.play();
}

export function speakJapanese(text: string, rate = 0.9): void {
  if (typeof window === "undefined") return;

  if (isCapacitorMobile()) {
    playFallbackAudio(text);
    return;
  }

  if (!("speechSynthesis" in window)) {
    playFallbackAudio(text);
    return;
  }

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = rate;
    utterance.volume = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  } catch {
    playFallbackAudio(text);
  }
}
