import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Section5() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const items = [
    {
      title: "Anti-age",
      description:
        "Vodorod terapiyasi ushbu muammoni hal etishda innovatsion va samarali yechim bo'lib, organizmga uch tomonlama, kompleks ta'sir ko'rsatadi.",
      hasLink: true,
      fullText: `Vodorod terapiyasi — uzoq umr va yoshlikni saqlab qolish kalitingiz.
Qarish va yoshga bog‘liq kasalliklarning, jumladan onkologik kasalliklar, aqliy va jismoniy faollikning pasayishining asosiy sababi oksidativ stress hisoblanadi. Ushbu jarayonda erkin radikallar hujayralarimizdagi DNK, lipidlar va oqsillarga zarar yetkazadi.

Vodorod terapiyasi ushbu muammoga innovatsion va samarali yechim taklif etadi hamda organizmga uch tomonlama ta’sir ko‘rsatadi:

Erkin radikallarni neytrallash
Vodorod erkin radikallar bilan tezda bog‘lanib, hujayralar va organlarning shikastlanishining oldini oladi.

Himoya mexanizmlarini faollashtirish
Vodorod organizmning ichki himoya tizimlari faoliyatini rag‘batlantirib, turli kasalliklar va salbiy tashqi omillarga nisbatan bardoshliligini oshiradi.

Oksidlangan oqsillar va lipidlarni tiklash
Vodorod oksidativ stress ta’sirida shikastlangan hujayra tuzilmalarini tiklash qobiliyatiga ega bo‘lib, ularning dastlabki funksional holatini qayta tiklaydi.

Vodorodli suvni muntazam iste’mol qilish — organizmni vodorod bilan to‘yintirishning oddiy va qulay usulidir. Ushbu noyob usul hayot tarzini keskin o‘zgartirish yoki katta sa’y-harakatlarni talab qilmaydi. Soddaligiga qaramay, hatto kichik miqdordagi vodorodning ham ijobiy ta’siri ilmiy jihatdan isbotlangan va ko‘p yillik tadqiqotlar bilan tasdiqlangan.

Hydrogenium kompaniyasi vodorod terapiyasi sohasida inqilobiy yechimlarni taklif etadi.
Bizning yuqori oqimli ingalyatsion apparatlarimiz vodorodning barcha ijobiy ta’sirlarini allaqachon birinchi muolajadan so‘ng his qilish imkonini beradi. Umumiy holatning yaxshilanishi, energiya va ishchanlikning oshishi, qarish jarayonlarining sekinlashuvi va immunitetning mustahkamlanishi — bularning barchasi Hydrogenium’ning ilg‘or vodorod texnologiyalari tufayli amalga oshadi.

Vodorod terapiyasini tanlash — bu sog‘lig‘ingiz, go‘zalligingiz va uzoq umr ko‘rishingizga kiritilgan sarmoyadir. Hydrogenium bilan birga kelajakni mukammal jismoniy va ruhiy holatda qarshi oling.`
    },
    {
      title: "Sport",
      description:
        "Mashg'ulotlar orasida yoki jismoniy mashqlarni bajarish jarayonida vodorod terapiyasini qo'llash sportchi organizmining holati va tiklanishiga sezilarli ijobiy ta'sir ko'rsatadi.",
      hasLink: true,
      fullText: `Sport — bu nafaqat muvaffaqiyat va shaxsiy rivojlanish yo‘li, balki organizm uchun jiddiy sinov hamdir. Har bir mashg‘ulot, ayniqsa yuqori darajadagi tayyorgarlik jarayonlari, mitoxondriyalarda erkin radikallarning ortiqcha hosil bo‘lishi bilan bog‘liq bo‘lgan oksidativ stress bilan kechadi. Ushbu jarayonlar aerob unumdorlikning pasayishiga, mashg‘ulotlar orasidagi tiklanish vaqtining uzayishiga va oxir-oqibat jarohatlar xavfining oshishiga olib kelishi mumkin.

Vodorod terapiyasi ushbu muammoni hal etish uchun kuchli yechimni taklif etadi.
Ilmiy asoslariga chuqurroq nazar tashlaydigan bo‘lsak, intensiv jismoniy yuklamalar vaqtida laktat konsentratsiyasi ortadi, bu esa charchoqqa va organizmning uzoq tiklanish davriga ehtiyoj sezishiga sabab bo‘ladi. Vodorod biologik faol modda sifatida laktatning tezroq bartaraf etilishiga yordam beradi, natijada sportchining tiklanish va yangi yuklamalarga tayyorgarlik ko‘rish uchun zarur bo‘lgan vaqti sezilarli darajada qisqaradi.

Mashg‘ulotlar orasida yoki bevosita jismoniy mashqlar jarayonida vodorod terapiyasini qo‘llash sportchi organizmiga sezilarli ijobiy ta’sir ko‘rsatadi.
U aerob unumdorlikni oshirishga yordam beradi, shu orqali aerob imkoniyatlarni kengaytiradi va energiyaning anaerob ishlab chiqarilish bosqichini kechiktiradi. Bu esa yuklamalar soni va intensivligini oshirmasdan turib sport natijalarini yaxshilashda muhim omil hisoblanadi.

Vodorod terapiyasini sport mashg‘ulotlari va tiklanish amaliyotiga joriy etish sportchilar uchun yangi imkoniyatlarni ochib beradi.
Bu nafaqat oksidativ stressga qarshi kurashish va tiklanishni tezlashtirishning innovatsion usuli, balki jarohatlar xavfini oshirmagan holda ilgari erishib bo‘lmaydigan natijalarga erishish imkoniyatidir. Sportchilar yuqori unumdorlik va samaradorlikni uzoq vaqt davomida saqlab qolishlari, professional faoliyat muddatini uzaytirishlari va organizm salomatligi hamda uzoq umr ko‘rishga urg‘u bergan holda sport yutuqlarining yangi bosqichiga chiqishlari mumkin.`
    },
    {
      title: "Kardiologiya",
      description:
        "Tadqiqotlar shuni ko'rsatadiki, vodorod yurak-qon tomir tizimining faoliyati bilan bog'liq ko'plab muhim jarayonlarga ta'sir ko'rsatish qobiliyatiga ega.",
      hasLink: true,
      fullText: `Bugungi kunda kardiologiya innovatsion texnologiyalar va davolash usullari tibbiyot oldida yangi ufqlarni ochayotgan yangi davrga qadam qo‘ymoqda.
Ushbu sohadagi eng muhim yo‘nalishlardan biri vodorod terapiyasini qo‘llash hisoblanadi. Mazkur usul molekulyar vodoroddan foydalanishga asoslangan bo‘lib, u turli yurak-qon tomir kasalliklarini davolashda katta salohiyatni namoyon etmoqda.

Tadqiqotlar shuni ko‘rsatadiki, vodorod yurak-qon tomir tizimi faoliyati bilan bog‘liq ko‘plab muhim jarayonlarga ta’sir ko‘rsatish qobiliyatiga ega.

Mikrosirkulyatsiyani yaxshilash

Mikrosirkulyatsiya yurak-qon tomir tizimi salomatligini saqlashda muhim rol o‘ynaydi. Vodorod terapiyasining afzalliklari qatoriga azot oksidi (NO) ishlab chiqarilishini oshirish va peroksinitritni neytrallash kiradi, bu esa umumiy mikrosirkulyatsiyani yaxshilaydi. Ushbu jarayon to‘qimalar va organlarga kislorod hamda ozuqa moddalarning yetkazilishini kuchaytirib, ularning sog‘lom va to‘g‘ri faoliyat ko‘rsatishiga yordam beradi.

Jismoniy yuklamalarga chidamlilikni oshirish

Yurakning o‘ng bo‘limlariga venoz qon qaytishining yaxshilanishi jismoniy yuklamalarga chidamlilikni sezilarli darajada oshirishi mumkin. Bu, ayniqsa, jismoniy faolligi cheklangan yurak-qon tomir kasalliklariga chalingan bemorlar uchun muhim ahamiyatga ega.

Aerob energiya ishlab chiqarishni qayta yo‘naltirish

Vodorod terapiyasining muhim xususiyatlaridan biri — aerob energiya ishlab chiqarishni erkin yog‘ kislotalaridan foydalanishga qayta yo‘naltirish qobiliyatidir. Bu triglitseridlar, xolesterin va past zichlikdagi lipoproteinlar (PZLP) darajasining pasayishiga olib kelib, yurak-qon tomir tizimining umumiy holatini yaxshilaydi.

Aterogenezni kamaytirish

Vodorod terapiyasi lipidlarning peroksidlanishini oldini oladi va shu orqali aterogenez jarayonini sekinlashtiradi. Bu ateroskleroz rivojlanishining oldini olishda nihoyatda muhimdir, chunki u yurak-qon tomir kasalliklarining asosiy sabablaridan biri hisoblanadi. Arteriyalarning tiqilib qolish xavfini kamaytirish va ularning elastikligini yaxshilash miokard infarkti hamda insult ehtimolini sezilarli darajada pasaytiradi.

Hydrogenium kabi yuqori oqimli vodorod terapiya apparatlari zamonaviy kardiologik amaliyotning ajralmas qismi hisoblanadi.
Ular yurak ishemik kasalligi (YIK), yurak aritmiyalari va arterial gipertenziyani samarali davolashda muhim ahamiyatga ega. Vodorod terapiyasini klinik amaliyotga joriy etish nafaqat bemorlarning hayot sifatini yaxshilaydi, balki yurak-qon tomir kasalliklari bilan bog‘liq og‘ir asoratlar xavfini ham kamaytiradi.

Xulosa qilib aytganda, vodorod terapiyasi yurak-qon tomir kasalliklarining oldini olish va davolashda yangi imkoniyatlarni ochib beradi.
U yurak va qon tomirlar faoliyatini yaxshilashga qaratilgan kompleks yondashuvni taklif etadi. O‘ziga xos xususiyatlari va ko‘plab ijobiy ta’sirlari tufayli vodorod butun dunyo kardiologlari uchun kuchli va istiqbolli vositaga aylanishi mumkin.`
    },
    {
      title: "Pulmonologiya",
      description:
        "Ushbu terapiya usulini qo'llash nafaqat o'pkaning funksional ko'rsatkichlarini yaxshilaydi, balki bemorlarning hayot sifatini sezilarli darajada oshiradi.",
      hasLink: true,
      fullText: `So‘nggi yillarda vodorod terapiyasini keng ko‘lamdagi pulmonologik kasalliklarni davolashda qo‘llash faol rivojlanmoqda.
Buning asosiy sababi shundaki, oksidativ stress ko‘plab respirator buzilishlarning patogenezida muhim rol o‘ynaydi. Bularga postkovid reabilitatsiyasi, surunkali obstruktiv o‘pka kasalligi (SO‘OK, XOBL) va bronxial astma kabi jiddiy holatlar kiradi. Kuchli antioksidant xususiyatlarga ega va biologik membranalar orqali oson o‘ta oladigan vodorod ushbu kasalliklarga qarshi kurashda innovatsion va samarali vosita hisoblanadi.

Pulmonologik kasalliklarni davolashda vodorod terapiyasining asosiy ta’sirlari:

Saturatsiyani oshirish
O‘pka qon oqimining ventilyatsiya qilinayotgan bo‘limlarga qayta taqsimlanishi hisobiga kislorod bilan to‘yinganlik darajasi oshadi.

O‘pkaning diffuzion qobiliyatini kuchaytirish
Alveolyar membranalarning o‘tkazuvchanligi oshishi natijasida gaz almashinuvi samaradorligi yaxshilanadi.

Alveolyar hajmni oshirish
Nafas olish va chiqarish paytida havo oqimi qarshiligining kamayishi hisobiga o‘pka ventilyatsiyasi yaxshilanadi, bu esa alveolyar hajmning ortishiga olib keladi.

Periferik to‘qimalarning kislorod bilan ta’minlanishini va mikrosirkulyatsiyani yaxshilash
Metabolizmning faollashuvi hisobiga vodorod mikrosirkulyatsiyani optimallashtiradi, to‘qimalarga kislorod va ozuqa moddalarning yetkazib berilishini samaraliroq qiladi. Bu esa tiklanish va regeneratsiya jarayonlarini sezilarli darajada tezlashtiradi.

Vodorod terapiyasi zamonaviy pulmonologiyada eng istiqbolli yo‘nalishlardan biri hisoblanadi, chunki u respirator kasalliklarning rivojlanishi va progres-siyasining asosiy mexanizmlariga kompleks ta’sir ko‘rsatadi. Ushbu terapiya usulini qo‘llash nafaqat o‘pkaning funksional ko‘rsatkichlarini yaxshilaydi, balki bemorlarning hayot sifatini ham sezilarli darajada oshiradi.

Hydrogenium apparatli vodorod terapiyasi pulmonologik bemorlarni kompleks davolashda muhim element sifatida o‘zini namoyon etgan.
Yuqori samaradorlik, xavfsizlik va qo‘llash qulayligining uyg‘unligi ushbu usulni zamonaviy pulmonologik amaliyotning ajralmas qismiga aylantiradi.

Xulosa qilib aytganda, vodorod terapiyasi o‘pka kasalliklarini davolashda yangi ufqlarni ochib beradi.
U oksidativ stress va yallig‘lanishning fundamental mexanizmlariga yo‘naltirilgan bo‘lib, SO‘OK, bronxial astma va COVID-19 oqibatlaridan aziyat chekayotgan bemorlarni davolashda kompleks yondashuvning muhim vositasiga aylanmoqda.`
    },
    {
      title: "Nevrologiya",
      description:
        "Erkin radikallarni neytrallash orqali vodorod terapiyasi oqsillarning glikatsiyasi va shikastlanishiga olib keluvchi reaksiyalar zanjirini oldini olish bilan cheklanib qolmay, balki allaqachon oksidlangan oqsillarning tiklanishiga ham yordam beradi.",
      hasLink: true,
      fullText:  `So‘nggi yillarda ilmiy hamjamiyat nevrologik kasalliklarni davolashning innovatsion usullariga tobora ko‘proq e’tibor qaratmoqda. Eng istiqbolli yo‘nalishlardan biri vodorod terapiyasi bo‘lib, u Parkinson va Altsgeymer kasalliklari, shuningdek turli xil demensiya shakllari bilan bog‘liq jarayonlarni nafaqat sekinlashtirish, balki ularni orqaga qaytarish imkoniyatlarini ham ochib bermoqda.

Tadqiqotlar shuni ko‘rsatadiki, ko‘plab nevrologik kasalliklar asosan oksidativ stress natijasida yuzaga keladigan oqsillar glikatsiyasi bilan bog‘liq. Kislorod va azotning faol shakllari hujayra tuzilmalariga zarar yetkazishi oqibatida nerv hujayralarining normal faoliyati buziladi va bu yuqorida qayd etilgan kasalliklarning rivojlanishiga olib keladi. Erkin radikallar ortiqligi sababli yuzaga keladigan oksidativ stress miya hujayralarining qarishi va degeneratsiyasida asosiy rol o‘ynaydi.

Shu nuqtai nazardan vodorod noyob yechim hisoblanadi. Molekulyar jihatdan juda kichik bo‘lgani sababli vodorod gematoensefalik to‘siqdan oson o‘ta oladi, miya hujayralarigacha yetib boradi va ularni oksidativ stressdan himoya qiladi. Erkin radikallarni neytrallash orqali vodorod terapiyasi glikatsiya va oqsillarning shikastlanishiga olib keluvchi reaksiyalar zanjirini oldini olish bilan birga, allaqachon oksidlangan oqsillarning tiklanishiga ham yordam beradi va shu tariqa hujayra darajasida terapevtik ta’sir ko‘rsatadi.

Nevrologiya sohasida vodorod terapiyasining afzalliklari quyidagilardan iborat:

Nevrologik simptomlarning kamayishi, bu bemorlarning hayot sifatini sezilarli darajada yaxshilaydi.

Kognitiv funksiyalar va xotiraning yaxshilanishi, bu demensiya va boshqa neyrodegenerativ kasalliklarni davolashda nihoyatda muhimdir.

Miya qon aylanishining yaxshilanishi va miya qon oqimining optimal qayta taqsimlanishi, bu miyaning umumiy samaradorligini oshiradi.

Miyaning vaskulyarizatsiyasini kuchaytirish va neoangiogenezni rag‘batlantirish, bu ishemiya o‘choqlarining qayta qon bilan ta’minlanishiga yordam berishi mumkin.

Hydrogenium kompaniyasining vodorodi nevrologik kasalliklarni davolashda kompleks yondashuv uchun yuqori samarali va patogenetik jihatdan asoslangan vosita hisoblanadi.

Uning qo‘llanilishi miya degenerativ kasalliklarini davolashga bo‘lgan yondashuvni tubdan o‘zgartirishi, bemorlarga nafaqat kasalliklarning rivojlanishini sekinlashtirish umidini, balki ularni orqaga qaytarish bo‘yicha real imkoniyatlarni ham taqdim etishi mumkin.

Yodda tuting: miya salomatligiga g‘amxo‘rlik bugundan boshlanadi. Vodorod terapiyasi sog‘lig‘ingizni tiklash va mustahkamlashning kaliti bo‘lishi mumkin. Hydrogenium mahsulotlarini tanlang — salomatlikni tanlang!`
    },
    {
      title: "Endokrinologiya",
      description:
        "Mazkur usul molekulyar vodorodning antioksidant xususiyatlariga asoslangan bo'lib, u erkin radikallarni zararsizlantirish, organizmdagi oksidativ stress va yallig'lanish jarayonlarini kamaytirish qobiliyatiga ega.",
      hasLink: true,
      fullText: `So‘nggi yillarda ilmiy hamjamiyat nevrologik kasalliklarni davolashning innovatsion usullariga tobora ko‘proq e’tibor qaratmoqda. Eng istiqbolli yo‘nalishlardan biri vodorod terapiyasi bo‘lib, u Parkinson va Altsgeymer kasalliklari, shuningdek turli xil demensiya shakllari bilan bog‘liq jarayonlarni nafaqat sekinlashtirish, balki ularni orqaga qaytarish imkoniyatlarini ham ochib bermoqda.

Tadqiqotlar shuni ko‘rsatadiki, ko‘plab nevrologik kasalliklar asosan oksidativ stress natijasida yuzaga keladigan oqsillar glikatsiyasi bilan bog‘liq. Kislorod va azotning faol shakllari hujayra tuzilmalariga zarar yetkazishi oqibatida nerv hujayralarining normal faoliyati buziladi va bu yuqorida qayd etilgan kasalliklarning rivojlanishiga olib keladi. Erkin radikallar ortiqligi sababli yuzaga keladigan oksidativ stress miya hujayralarining qarishi va degeneratsiyasida asosiy rol o‘ynaydi.

Shu nuqtai nazardan vodorod noyob yechim hisoblanadi. Molekulyar jihatdan juda kichik bo‘lgani sababli vodorod gematoensefalik to‘siqdan oson o‘ta oladi, miya hujayralarigacha yetib boradi va ularni oksidativ stressdan himoya qiladi. Erkin radikallarni neytrallash orqali vodorod terapiyasi glikatsiya va oqsillarning shikastlanishiga olib keluvchi reaksiyalar zanjirini oldini olish bilan birga, allaqachon oksidlangan oqsillarning tiklanishiga ham yordam beradi va shu tariqa hujayra darajasida terapevtik ta’sir ko‘rsatadi.

Nevrologiya sohasida vodorod terapiyasining afzalliklari quyidagilardan iborat:

Nevrologik simptomlarning kamayishi, bu bemorlarning hayot sifatini sezilarli darajada yaxshilaydi.

Kognitiv funksiyalar va xotiraning yaxshilanishi, bu demensiya va boshqa neyrodegenerativ kasalliklarni davolashda nihoyatda muhimdir.

Miya qon aylanishining yaxshilanishi va miya qon oqimining optimal qayta taqsimlanishi, bu miyaning umumiy samaradorligini oshiradi.

Miyaning vaskulyarizatsiyasini kuchaytirish va neoangiogenezni rag‘batlantirish, bu ishemiya o‘choqlarining qayta qon bilan ta’minlanishiga yordam berishi mumkin.

Hydrogenium kompaniyasining vodorodi nevrologik kasalliklarni davolashda kompleks yondashuv uchun yuqori samarali va patogenetik jihatdan asoslangan vosita hisoblanadi.

Uning qo‘llanilishi miya degenerativ kasalliklarini davolashga bo‘lgan yondashuvni tubdan o‘zgartirishi, bemorlarga nafaqat kasalliklarning rivojlanishini sekinlashtirish umidini, balki ularni orqaga qaytarish bo‘yicha real imkoniyatlarni ham taqdim etishi mumkin.

Yodda tuting: miya salomatligiga g‘amxo‘rlik bugundan boshlanadi. Vodorod terapiyasi sog‘lig‘ingizni tiklash va mustahkamlashning kaliti bo‘lishi mumkin. Hydrogenium mahsulotlarini tanlang — salomatlikni tanlang!`
    },
  ];
  const sendToTelegram = async () => {
    if (!name || !message) return alert("Iltimos, barcha maydonlarni to‘ldiring.");
    const botToken = "8559354625:AAFOExAj1BTe2tR2A4O8r_htOMl0ATtPk60";
    const chatId = "-5083792285";
    const text = `Yangi savol:\nIsm: ${name}\nSavol: ${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      toast.success("Savol yuborildi!");
      setName("");
      setMessage("");
      setQuestionModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi, qayta urinib ko‘ring.");
    }
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-white" id="apply">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a86ad]">
              Qayerda qo'llaniladi?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => item.hasLink && setSelectedItem(item)}
                className="group relative bg-[#2d3748] rounded-2xl overflow-hidden h-72 sm:h-80 md:h-96 cursor-pointer transition-all duration-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d3748] to-[#1a202c] transition-all duration-500" />

                <div className="relative h-full p-6 sm:p-8 flex flex-col text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>

                  <div className="overflow-hidden">
                    <div className="transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700 ease-out h-full">
                      <p className="text-sm sm:text-base leading-relaxed mb-2 opacity-90">
                        {item.description}
                      </p>

                      {item.hasLink && (
                        <p className="text-[#4a86ad] font-medium flex items-center gap-2">
                          Batafsil
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a86ad]/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Modal для карточки */}
      {selectedItem && (
        <>
          <input type="checkbox" checked={true} readOnly className="modal-toggle" />
          <div className="modal modal-open border-none">
            <div className="modal-box max-w-4xl w-full p-0 relative rounded-2xl">
              <div className="bg-gradient-to-r from-[#4a86ad] to-[#2d3748] p-6 sm:p-8 text-white rounded-t-2xl relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold pr-8">{selectedItem.title}</h3>
                <p className="text-white/80 text-sm sm:text-base mt-2">{selectedItem.description}</p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-white hover:bg-white/20"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
                  {selectedItem.fullText || "Ma'lumot yuklanmoqda..."}
                </div>
              </div>
              <div className=" bg-gray-50 p-4 sm:p-6 border-t border-gray-200 rounded-b-2xl m-0 flex justify-between gap-4">
                {/* Кнопка "Задать вопрос" */}

                <button
                  onClick={() => setQuestionModalOpen(true)}
                  className="btn w-[50%] bg-gradient-to-r from-[#4a86ad] to-[#2d3748] text-white border-none hover:shadow-lg"
                >
                  Savol berish
                </button>


                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn btn-error w-[50%]    text-white border-none hover:shadow-lg"
                >
                  Yopish
                </button>
              </div>
            </div>
            <div className="modal-backdrop" onClick={() => setSelectedItem(null)} />
          </div>
        </>
      )}

      {/* Modal для вопроса */}
      {questionModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-lg relative p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Savol yuborish</h3>
            <input
              type="text"
              placeholder="Ismingiz"
              className="input input-bordered w-full mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Savolingiz..."
              className="textarea textarea-bordered w-full mb-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setQuestionModalOpen(false)} className="btn btn-ghost">Bekor qilish</button>
              <button onClick={sendToTelegram} className="btn bg-gradient-to-r from-[#4a86ad] to-[#2d3748] text-white border-none">Yuborish</button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setQuestionModalOpen(false)} />
        </div>
      )}
    </>
  );

}