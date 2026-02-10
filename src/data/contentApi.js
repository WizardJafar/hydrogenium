const STORAGE_KEY = "hydrogenium-admin-content";

export const getContent = async () => {
  const response = await fetch("/db.json");
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные.");
  }

  const data = await response.json();
  const stored = localStorage.getItem(STORAGE_KEY);
  const storedData = stored ? JSON.parse(stored) : null;

  if (!storedData) {
    return data.content;
  }

  return {
    ...data.content,
    ...storedData,
    theme: {
      ...data.content.theme,
      ...storedData.theme,
    },
    hero: {
      ...data.content.hero,
      ...storedData.hero,
    },
    textOverrides: storedData.textOverrides ?? data.content.textOverrides ?? [],
  };
};

export const updateContent = (content) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  return content;
};

export const resetContent = () => {
  localStorage.removeItem(STORAGE_KEY);
};
