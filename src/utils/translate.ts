// Função para traduzir texto usando a API do Google Translate
export async function translateText(
  text: string,
  targetLanguage = "pt"
): Promise<string> {
  try {
    // Verifica se já está em português (simples verificação)
    if (isPortuguese(text)) {
      return text;
    }

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`
    );

    if (!response.ok) {
      throw new Error("Translation API request failed");
    }

    const data = await response.json();

    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    }

    // Fallback para tradução manual básica se a API falhar
    return translateBasic(text);
  } catch (error) {
    console.error("Translation error:", error);
    // Retorna o texto original em caso de erro
    return text;
  }
}

// Função simples para detectar se o texto já está em português
function isPortuguese(text: string): boolean {
  const portugueseWords = [
    "gato",
    "gatos",
    "raça",
    "conhecido",
    "animal",
    "personalidade",
    "natureza",
    "inteligente",
    "família",
    "ambiente",
    "origem",
    "brasileiro",
  ];

  const lowercaseText = text.toLowerCase();
  return portugueseWords.some((word) => lowercaseText.includes(word));
}

// Tradução básica manual como fallback
function translateBasic(text: string): string {
  const translations: { [key: string]: string } = {
    cat: "gato",
    cats: "gatos",
    breed: "raça",
    known: "conhecido",
    friendly: "amigável",
    intelligent: "inteligente",
    family: "família",
    children: "crianças",
    home: "casa",
    environment: "ambiente",
    personality: "personalidade",
    nature: "natureza",
    gentle: "gentil",
    large: "grande",
    small: "pequeno",
    active: "ativo",
    calm: "calmo",
    playful: "brincalhão",
    affectionate: "carinhoso",
    independent: "independente",
    social: "social",
    loyal: "leal",
  };

  let translatedText = text;

  Object.entries(translations).forEach(([english, portuguese]) => {
    const regex = new RegExp(`\\b${english}\\b`, "gi");
    translatedText = translatedText.replace(regex, portuguese);
  });

  return translatedText;
}
