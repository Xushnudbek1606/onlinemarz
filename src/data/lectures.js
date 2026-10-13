export const SUBJECTS = [
  { id: 'fizika', name: 'Fizika', icon: '🔭', color: '#4f46e5' },
  { id: 'matematika', name: 'Matematika', icon: '📐', color: '#0ea5e9' },
  { id: 'tarix', name: 'Tarix', icon: '🏛️', color: '#d97706' },
  { id: 'adabiyot', name: 'Adabiyot', icon: '✍️', color: '#059669' },
  { id: 'kimyo', name: 'Kimyo', icon: '🧪', color: '#dc2626' },
  { id: 'biologiya', name: 'Biologiya', icon: '🧬', color: '#7c3aed' }
]

export const SAMPLE_LECTURES = [
  {
    id: 'fiz-1',
    subjectId: 'fizika',
    title: 'Mexanik harakat',
    content: [
      'Mexanik harakat deb jismlarning boshqa jismlarga nisbatan vaqt o\'tishi bilan vaziyatining (joyining) o\'zgarishiga aytiladi.',
      'Mexanik harakatning asosiy turlariga ilgarilanma harakat, aylanma harakat va tebranma harakatni kiritish mumkin.',
      'Moddiy nuqta – bu masalaning shartida o\'lchamlari hisobga olinmaydigan jismga aytiladi. Masalan, Yerdan Oy-o\'zgacha bo\'lgan masofani hisoblashda Oyni moddiy nuqta deb qarash mumkin.',
      'Ko\'chish – boshlang\'ich nuqtadan oxirgi nuqtaga tomon yo\'nalgan to\'g\'ri chiziq kesmasi. Ko\'chish vektor kattalik bo\'lib, u yo\'nalishga ega.',
      'Yo\'l – jismning harakati davomida bosib o\'tgan trayektoriyaning uzunligi. Yo\'l skalyar kattalik hisoblanadi.',
      'Tezlik – jismning harakat tezligini xarakterlovchi fizik kattalik. U ko\'chishning shu ko\'chishga ketgan vaqtga nisbati bilan aniqlanadi: v = S / t',
      'Tekis to\'g\'ri chiziqli harakatda jism ixtiyoriy teng vaqt oralig\'ida teng ko\'chishlar qiladi, tezlik esa o\'zgarmaydi.',
      'Teng o\'zgaruvchan harakat – tezligi har bir teng vaqt oralig\'ida bir xil qiymatga o\'zgaradigan harakat. Tezlanish: a = (v - v0) / t',
      'Harakatning nisbiyligi: jismning harakati sanoq sistemasi tanlashga bog\'liq. Masalan, harakatlanayotgan poyezddagi yo\'lovchi poyezdga nisbatan tinch, vokzalga nisbatan esa harakatda bo\'ladi.',
      'Xulosa: Nyutonning birinchi qonuni – agar jismga boshqa jismlar ta\'sir qilmasa (yoki ta\'sirlar muvozanatlashgan bo\'lsa), jism o\'z tinch holatini yoki to\'g\'ri chiziqli tekis harakatini saqlaydi.'
    ]
  },
  {
    id: 'fiz-2',
    subjectId: 'fizika',
    title: 'Nyuton qonunlari',
    content: [
      'Nyutonning birinchi qonuni (inersiya qonuni): agar jismga boshqa jismlar ta\'sir qilmasa yoki ularning ta\'sirlari o\'zaro muvozanatlashgan bo\'lsa, jism o\'zining tinch holatini yoki to\'g\'ri chiziqli tekis harakatini davom ettiradi.',
      'Inersiya – jismlarning tezligini o\'zgartirishga qarshilik ko\'rsatish xossasi. Jismning inertligi uning massasi bilan xarakterlanadi',
      'Nyutonning ikkinchi qonuni: jismning tezlanishi unga ta\'sir qiluvchi natijaviy kuchga to\'g\'ri proporsional va jismning massasiga teskari proporsional: a = F / m',
      'Kuch – jismlarning o\'zaro ta\'siri natijasida tezlikning o\'zgarishiga sabab bo\'ladigan vektor kattalik. SI sistemasida kuch nyuton (N) da o\'lchanadi.',
      'Nyutonning uchinchi qonuni: jismlar bir-biriga kattaligi jihatidan teng va yo\'nalishi jihatidan qarama-qarshi bo\'lgan kuchlar bilan ta\'sir qiladi.',
      'Og\'irlik kuchi – Yerning jismga tortishish kuchi. U F = mg formula bilan hisoblanadi, bu yerda g ≈ 9.8 N/kg – erkin tushish tezlanishi.',
      'Massasi 1 kg bo\'lgan jismga Yer tomonidan ta\'sir qiluvchi tortishish kuchi taxminan 9.8 nyutonga teng.',
      'Tayanch reaksiya kuchi – jism tayanga ta\'sir qilganda tayanchning jismga ko\'rsatadigan qarama-qarshi yo\'nalgan elastiklik kuchi.',
      'Jismning og\'irligi – jismning tayanchga (yoki osma) ta\'sir qiladigan kuchi. Og\'irlik tayanchning siljishiga qarab kattalashishi (ortiqcha yuklanish) yoki kamayishi mumkin.',
      'Masala: massasi 2000 kg bo\'lgan avtomobil 10 m/s tezlikdan 20 m/s tezlikka 10 sekundda yetdi. Tezlanish a = (20-10)/10 = 1 m/s²; kuch F = ma = 2000·1 = 2000 N.'
    ]
  },
  {
    id: 'mat-1',
    subjectId: 'matematika',
    title: 'Funksiya va uning grafigi',
    content: [
      'Funksiya – bir o\'zgaruvchining (argumentning) har bir qiymatiga boshqa o\'zgaruvchining (funksiyaning) aniq bir qiymati mos keladigan bog\'lanishdir.',
      'Funksiya y = f(x) ko\'rinishda yoziladi, bu yerda x – argument (erkli o\'zgaruvchi), y – funksiya qiymati (bo\'ysunuvchi o\'zgaruvchi).',
      'Funksiyaning aniqlanish sohasi – x argument qabul qiladigan barcha qiymatlar to\'plami. Qiymatlar sohasi – y funksiya qabul qiladigan barcha qiymatlar to\'plami.',
      'Chiziqli funksiya: y = kx + b. k – burchak koeffitsiyenti bo\'lib, funksiya grafigining x o\'qiga og\'ish burchagini aniqlaydi.',
      'k > 0 bo\'lsa, funksiya o\'suvchi bo\'ladi (grafik yuqoriga ko\'tariladi); k < 0 bo\'lsa, kamayuvchi (grafik pastga tushadi).',
      'Proporsionallik: to\'g\'ri proporsionallik y = kx, teskari proporsionallik y = k/x ko\'rinishda bo\'ladi.',
      'Kvadrat funksiya: y = ax² + bx + c. Uning grafigi parabola deb ataladi.',
      'a > 0 bo\'lsa, parabola shoxlari yuqoriga; a < 0 bo\'lsa, pastga yo\'nalgan bo\'ladi. Parabola uchi: x0 = -b/(2a)',
      'Funksiya grafigini yasash uchun: 1) argumentning bir nechta qiymatini tanlaymiz; 2) funksiya qiymatlarini hisoblaymiz; 3) (x; y) juftliklarini koordinatalar tekisligida belgilaymiz; 4) nuqtalarni silliq chiziq bilan bog\'laymiz.',
      'Misol: y = 2x + 1 funksiya grafigini yasaymiz. x = 0 da y = 1; x = 1 da y = 3. Nuqtalarni tutashtirsak to\'g\'ri chiziq hosil bo\'ladi.'
    ]
  },
  {
    id: 'mat-2',
    subjectId: 'matematika',
    title: 'Tenglamalar',
    content: [
      'Tenglama – tarkibida noma\'lum qiymat (o\'zgaruvchi) qatnashgan va bu noma\'lumning qanday qiymatlarida tenglik o\'rinli bo\'lishi topiladigan matematik ifoda.',
      'Tenglamaning ildizi (yechimi) – noma\'lumning tenglamani to\'g\'ri sonli tenglikka aylantiradigan qiymati.',
      'Chiziqli tenglama: ax + b = 0 ko\'rinishidagi tenglama. Uning yechimi: x = -b/a (agar a ≠ 0).',
      'Tenglamani yechishda asosiy qoida: tenglikning ikkala tomoniga bir xil sonni qo\'shish, ayirish yoki ikkala tomonni bir xil songa ko\'paytirish yoki bo\'lish mumkin – tenglik buzilmaydi.',
      'Kvadrat tenglama: ax² + bx + c = 0. Diskriminant: D = b² - 4ac.',
      'Agar D > 0 bo\'lsa, tenglama ikki xil ildizga ega: x1,2 = (-b ± √D) / (2a)',
      'Agar D = 0 bo\'lsa, bitta (ikki marta qaytariluvchi) ildiz: x = -b / (2a). Agar D < 0 bo\'lsa, haqiqiy ildizlarga ega emas.',
      'Viyet teoremasi: x² + px + q = 0 tenglama uchun x1 + x2 = -p va x1 · x2 = q.',
      'Kasr-ratsional tenglamalarni yechishda muhim qoida – maxraj nolga teng bo\'ladigan qiymatlarni yechimdan chiqarib tashlash kerak.',
      'Misol: x² - 5x + 6 = 0. D = 25 - 24 = 1. x1 = (5+1)/2 = 3, x2 = (5-1)/2 = 2. Tekshirish: 9 - 15 + 6 = 0 ✓; 4 - 10 + 6 = 0 ✓.'
    ]
  },
  {
    id: 'tar-1',
    subjectId: 'tarix',
    title: 'Amir Temur va Temuriylar davlati',
    content: [
      'Amir Temur (1336–1405) – buyuk sarkarda va davlat arbobi bo\'lib, o\'rta asrlar Osiyo tarixidagi eng yirik imperiyalardan birini barpo etgan.',
      'U 1336-yil 9-aprelda Kesh (Shahrisabz) yaqinidagi Xo\'ja Ilg\'or qishlog\'ida tavallud topgan. Otasi Muhammad Tarag\'ay Barlos urug\'idan bo\'lgan.',
      'Amir Temur 1370-yilda Samarqandni poytaxt qilib, Movarounnahrda mustaqil davlat barpo etdi va o\'zini "Buyuk Amir" deb e\'lon qildi.',
      'Temuriylar davlati hududi g\'arbda O\'rta yer dengizidan, sharqda Xitoy chegaralarigacha, shimolda Sirdaryodan janubda Hindiston va Forsgacha cho\'zilgan.',
      'Amir Temur 1380-yillarda Xorazmni, keyinroq Eron, Kavkaz, Farg\'ona, Fors va Hindistonga harbiy yurishlar qildi.',
      '1398-yildagi Hindiston yurishi va 1404-yildagi Turkiyaga (Anqara jangi, 1402) qarshi yurishlar uning harbiy mahoratini namoyish etdi.',
      'Samarqand, Shaxrisabz, Buxoro kabi shaharlarda ulkan qurilish ishlari olib borildi: Registon, Bibixonim masjidi, Shohizinda, Oqsaroy kabi me\'moriy obidalar qad ko\'tardi.',
      'Amir Temur ilm-fan, madaniyat va savdoga katta e\'tibor berib, olimlar, shoirlar va hunarmandlarni qo\'llab-quvvatladi. Samarqanddagi rasadxonalar va madrasalar shu davrda gullab-yashnadi.',
      'Temuriylar sulolasining vakillaridan Mirzo Ulug\'bek (1394–1449) – buyuk astronom-olim bo\'lib, Samarqand rasadxonasini qurdirgan va "Ziji Ko\'rakaniy" yulduzlar jadvalini yaratgan.',
      'Amir Temur 1405-yilning 18-fevralida Xitoyga yurish chog\'ida O\'tror shahrida vafot etdi. Uning nomi jahon tarixida buyuk davlat arbobi va sarkarda sifatida saqlanib qolgan.'
    ]
  },
  {
    id: 'ado-1',
    subjectId: 'adabiyot',
    title: 'Alisher Navoiy ijodi',
    content: [
      'Alisher Navoiy (1441–1501) – ulug\' o\'zbek shoiri, mutafakkiri va davlat arbobi. Uning asl ismi Nizomiddin Mir Alisher, "Navoiy" esa uning adabiy taxallusidir.',
      'Navoiy 1441-yil 9-fevralda Hirot shahrida tug\'ilgan. U yoshligidan ilm-fanga, she\'riyat va musiqaga katta qiziqish ko\'rsatgan.',
      'Navoiyning ijodi o\'zbek adabiyotini jahon madaniyati darajasiga ko\'targan. U o\'zbek tilida yozilgan birinchi buyuk adabiy asarni yaratdi.',
      'Asosiy asari – "Xamsa" (Besh doston): "Hayrat ul-abror", "Farhod va Shirin", "Layli va Majnun", "Sab\'ai sayyor", "Saddi Iskandariy". Bu asar 1483–1485 yillarda yozilgan.',
      '"Layli va Majnun" dostoni haqiqiy va sadoqatli muhabbat haqida bo\'lib, Qays (Majnun) va Laylining fojiali taqdiri tasvirlangan.',
      'Navoiy "Xazoyin ul-maoniy" (Ma\'nilar xazinasi) nomli to\'rt devon yaratib, bu bilan o\'zbek lirikasining cho\'qqisiga chiqdi.',
      'Olim sifatida "Mahbub ul-qulub" va "Nasoyim ul-muhabbat" asarlarini yozgan. U tarik tilshunoslik va adabiyot nazariyasiga ham hissa qo\'shgan.',
      'Navoiy Hirotda davlat arbobi sifatida ham faoliyat yuritib, Husayn Boyqaro davrida vazir bo\'lib xizmat qilgan. U xalq manfaati uchun ishlagan.',
      'Shoir 1501-yil 3-yanvarda Hirotda vafot etgan. Navoiyning asarlari dunyoning ko\'plab tillariga tarjima qilingan.',
      'Navoiy obrazi va asarlari bugungi kunda ham o\'zbek xalqining ma\'naviy boyligi bo\'lib, uning she\'rlari avloddan-avlodga meros bo\'lib kelmoqda.'
    ]
  },
  {
    id: 'kim-1',
    subjectId: 'kimyo',
    title: 'Kimyoviy reaksiya turlari',
    content: [
      'Kimyoviy reaksiya – bu bir moddalarning boshqa moddalarga aylanishi, bunda atomlar qayta guruhlashadi, lekin atomlar soni o\'zgarmaydi.',
      'Kimyoviy reaksiyalar belgilari: rang o\'zgarishi, gaz ajralishi, cho\'kma tushishi, issiqlik yoki yorug\'lik ajralishi.',
      'Birikish reaksiyasi: ikki yoki undan ortiq oddiy yoki murakkab moddadan bitta murakkab modda hosil bo\'ladi. Masalan: 2Mg + O₂ = 2MgO',
      'Parchalanish reaksiyasi: bitta murakkab moddadan ikki yoki undan ortiq oddiy yoki murakkab modda hosil bo\'ladi. Masalan: 2H₂O → 2H₂ + O₂ (elektr toki ta\'sirida).',
      'O\'rin olish reaksiyasi: oddiy modda murakkab moddaning tarkibiga kirgan biron-bir atomini o\'rnini bosadi. Masalan: Fe + CuSO₄ = FeSO₄ + Cu',
      'Almashinish reaksiyasi: ikki murakkab modda o\'zaro moddalar almashadi. Masalan: AgNO₃ + NaCl = AgCl↓ + NaNO₃',
      'Ekzotermik reaksiyalar – issiqlik ajralib chiqishi bilan boradigan reaksiyalar. Masalan, yonish reaksiyalari.',
      'Endotermik reaksiyalar – issiqlik yutilishi bilan boradigan reaksiyalar. Masalan, CaCO₃ → CaO + CO₂ (qizdirilganda).',
      'Katalizator – reaksiya tezligini o\'zgartirib, o\'zi reaksiyadan keyin o\'zgarmay qoladigan modda. Katalizatorlar sanoatda katta ahamiyatga ega.',
      'Reaksiya tenglamalarini koeffitsiyentlari kimyo qonuni ya\'ni moddalar massasining saqlanish qonuniga asosan tanlanadi.'
    ]
  },
  {
    id: 'bio-1',
    subjectId: 'biologiya',
    title: 'Hujayra va uning tuzilishi',
    content: [
      'Hujayra – tirik organizmlarning eng kichik struktura va funksional birligi. Barcha tirik organizmlar hujayralardan tuzilgan.',
      'Hujayra 1665-yilda Robert Guk tomonidan kashf qilingan. U mantar po\'kagi bo\'lagini mikroskop ostida ko\'rib, kichik "xonalar"ni hujayra deb atagan.',
      'Hujayraning asosiy qismlari: hujayra membranasi, sitoplazma va yadro.',
      'Sitoplazma – hujayraning ichki muhiti bo\'lib, unda organoidlar joylashgan. Organoidlar hujayraning maxsus funksiyalarni bajaruvchi qismlaridir.',
      'Mitoxondriya – "hujayraning energiya stansiyasi" deb ataladi. Unda organik moddalar oksidlanib, hujayraning asosiy energiya manbai bo\'lgan ATF sintezlanadi.',
      'Ribosoma – oqsil sintezini amalga oshiradigan organoid. U rRNA va oqsillardan tashkil topgan.',
      'Yadro – hujayraning genetik axboroti saqlanadigan asosiy organoid. Unda DNK molekulalari (xromosomalar) joylashgan.',
      'O\'simlik hujayrasi, hayvon hujayrasidan farqli ravishda, qattiq hujayra devori, plastidlar (xloroplastlar) va vakuolalarga ega.',
      'Xloroplast tarkibidagi xlorofill yorug\'lik energiyasini yutib, fotosintez jarayonida organik moddalar sintezida qatnashadi.',
      'Hujayra bo\'linishi – tirik organizmlarning o\'sishi va ko\'payishining asosi. Mitoz natijasida ikkita bir-biriga o\'xshash qiz hujayralar hosil bo\'ladi.'
    ]
  }
]