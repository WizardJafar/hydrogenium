import React, { useEffect, useMemo, useState } from "react";
import { getContent, resetContent, updateContent } from "../data/contentApi";

const Admin = () => {
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState("");
  const [textOverrides, setTextOverrides] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getContent()
      .then((data) => {
        if (isMounted) {
          setContent(data);
          setTextOverrides(data.textOverrides ?? []);
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatus("Не удалось загрузить данные.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (section, field, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleOverrideChange = (index, field, value) => {
    setTextOverrides((prev) =>
      prev.map((item, currentIndex) =>
        currentIndex === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAddOverride = () => {
    setTextOverrides((prev) => [...prev, { from: "", to: "" }]);
  };

  const handleRemoveOverride = (index) => {
    setTextOverrides((prev) => prev.filter((_, currentIndex) => currentIndex !== index));
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!content) return;
    updateContent({ ...content, textOverrides });
    setStatus("Изменения сохранены локально.");
  };

  const handleReset = () => {
    resetContent();
    getContent().then((data) => {
      setContent(data);
      setTextOverrides(data.textOverrides ?? []);
      setStatus("Данные сброшены к значениям из db.json.");
    });
  };

  const themePreview = useMemo(() => {
    if (!content) return {};
    return {
      backgroundColor: content.theme.backgroundColor,
      color: content.theme.textColor,
      borderColor: content.theme.primaryColor,
    };
  }, [content]);

  if (!content) {
    return <div className="mx-auto max-w-6xl px-5 py-12">Загрузка...</div>;
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12">
      <div>
        <h1 className="text-3xl font-semibold">Админ-панель Hydrogenium</h1>
        <p className="mt-2 text-slate-600">
          Изменяйте контент и цвета. Данные подтягиваются из db.json.
        </p>
      </div>

      <form className="grid gap-6" onSubmit={handleSave}>
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Тема</h2>
          <label className="flex flex-col gap-2 text-sm">
            Основной цвет
            <input
              className="h-11 w-32 cursor-pointer rounded-md border border-slate-200"
              type="color"
              value={content.theme.primaryColor}
              onChange={(event) =>
                handleChange("theme", "primaryColor", event.target.value)
              }
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Цвет фона
            <input
              className="h-11 w-32 cursor-pointer rounded-md border border-slate-200"
              type="color"
              value={content.theme.backgroundColor}
              onChange={(event) =>
                handleChange("theme", "backgroundColor", event.target.value)
              }
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Цвет текста
            <input
              className="h-11 w-32 cursor-pointer rounded-md border border-slate-200"
              type="color"
              value={content.theme.textColor}
              onChange={(event) =>
                handleChange("theme", "textColor", event.target.value)
              }
            />
          </label>
        </div>

        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Hero блок</h2>
          <label className="flex flex-col gap-2 text-sm">
            Заголовок
            <input
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              type="text"
              value={content.hero.title}
              onChange={(event) =>
                handleChange("hero", "title", event.target.value)
              }
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Подзаголовок
            <textarea
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              rows={4}
              value={content.hero.subtitle}
              onChange={(event) =>
                handleChange("hero", "subtitle", event.target.value)
              }
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Текст кнопки
            <input
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              type="text"
              value={content.hero.ctaText}
              onChange={(event) =>
                handleChange("hero", "ctaText", event.target.value)
              }
            />
          </label>
          <p className="text-sm text-slate-500">
            Изображения фиксированы и не редактируются через админку.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">Все тексты сайта</h2>
            <p className="mt-2 text-sm text-slate-500">
              Добавляйте пары «оригинальный текст → новый текст», чтобы заменить любые надписи
              на сайте. Оригинальный текст должен полностью совпадать с тем, что вы видите.
            </p>
          </div>
          <div className="grid gap-3">
            {textOverrides.map((item, index) => (
              <div
                key={`override-${index}`}
                className="grid gap-3 rounded-xl border border-slate-200 p-4 md:grid-cols-[1fr_1fr_auto]"
              >
                <input
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  type="text"
                  placeholder="Оригинальный текст"
                  value={item.from}
                  onChange={(event) =>
                    handleOverrideChange(index, "from", event.target.value)
                  }
                />
                <input
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  type="text"
                  placeholder="Новый текст"
                  value={item.to}
                  onChange={(event) =>
                    handleOverrideChange(index, "to", event.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => handleRemoveOverride(index)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddOverride}
            className="w-fit rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
          >
            Добавить замену
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            className="rounded-lg bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
            type="submit"
          >
            Сохранить
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg bg-slate-500 px-6 py-3 text-white transition hover:bg-slate-600"
          >
            Сбросить
          </button>
        </div>
        {status && <p className="font-medium text-slate-700">{status}</p>}
      </form>

      <div className="grid gap-3 rounded-2xl border-2 border-dashed p-6" style={themePreview}>
        <h3 className="text-lg font-semibold">Предпросмотр темы</h3>
        <p>{content.hero.subtitle}</p>
        <button
          className="w-fit rounded-lg px-4 py-2 text-white"
          style={{ backgroundColor: content.theme.primaryColor }}
        >
          {content.hero.ctaText}
        </button>
      </div>
    </div>
  );
};

export default Admin;
