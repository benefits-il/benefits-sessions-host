---
type: run-sheet
audience: instructor
session: 4
title: מפגש 4 — ראנשיט מאוחד · 170 דקות + מרווח
---

# מפגש 4 · ראנשיט מאוחד — טרמינל ופיתוח, עמוד מוצר, מערכת עיצוב, ORBIT

> **מסמך למנחה בלבד.** מודל הזמן כן: משימות עם ריצות חיות תוקצבו פי 1.3–1.5 מהאומדן היבש, ובכל זאת — השעון גובר. הנחת בסיס: הלומדים סיימו את שלוש יחידות ההכנה (עמוד אישי באוויר, סרטון מוצר שמור, VS Code עם הפאנל של קלוד קוד), וקיבלו את התזכורת עם התקנת ffmpeg. מי שלא — יושב ליד שכן, משלימים בהפסקה.

## רשימת ההכנה של בן (לפני השיעור)

- [ ] להריץ ריאיון kb-builder מלא על TUESDAY ולשמור את כל פרומפטי השלבים בקובץ נגיש.
- [ ] להכין שני קובצי מחקר אפויים של TUESDAY (לשלב הדגמת האינדקס — בלי המתנה לריצה חיה).
- [ ] לוודא שהסקיל kb-builder עונה בפרופיל נקי (בדיקת ההתקנה מהעמוד).
- [ ] לשלוח לקבוצה את התזכורת (נוסח בתחתית המסמך) יומיים לפני.
- [ ] טאבים פתוחים מראש: קונסולת מפגש 4 · שלושת הדקים · עמוד המפגש באתר התלמידים · tuesday (עמוד הבית, מערכת העיצוב, עמוד המוצר, הדמו לפני/אחרי) · תיקיית TUESDAY פתוחה ב-VS Code.
- [ ] הדמו המוכן של עמוד המוצר והדמו לפני/אחרי של מערכת העיצוב — נבדקו ועובדים.

## עקרונות הנחיה

- להוביל לשליפה: לפני כל דוגמה שואלים «מתי אתם הייתם משתמשים בזה?» — לא נותנים דוגמאות מוכנות מיד.
- «לדעת מתי» גובר על «לדעת איך». הכלי מבצע; אנחנו מלמדים שיקול דעת.
- מבצעים חי, אבל בזמני ריצה ארוכים עוברים לתוצאה שהוכנה מראש. לא מחכים מול מסך.
- כל משימת סוכן מסתיימת ב-«תסביר מה הבנת ועצור».
- כלל החלונות: אומרים בקול באיזה חלון אנחנו בכל רגע. חוט אחד נקי — לא מריצים שני סוכנים בשני חלונות במקביל בהדגמה.

## מפת הזמן

| זמן | קטע | על המסך |
|---|---|---|
| 00:00–00:05 | פתיחה — חיבור מהבית | דק «איך בנוי עמוד אינטרנט», שקפים 1–2 |
| 00:05–00:25 | מצגת: איך בנוי עמוד אינטרנט | הדק + סיור דוגמאות |
| 00:25–00:40 | היכרות מעמיקה עם סביבת העבודה | VS Code בלבד, מסך מלא |
| 00:40–01:15 | בניית עמוד המוצר | VS Code + תיקיית TUESDAY, דפדפן |
| 01:15–01:25 | הפסקה | עמוד המפגש באתר |
| 01:25–02:05 | מערכת עיצוב | דק «מערכת עיצוב» + דפדפן + קלוד קוד |
| 02:05–02:45 | מאגר ידע בשיטת ORBIT | קלוד קוד + דק ORBIT |
| 02:45–02:50 | סיכום ומנטרת הסיום | עמוד המפגש באתר |
| 02:50–03:00 | מרווח ביטחון | — |

**שסתומי קיצוץ (הסדר טעון אישור בן):** 1. קיצור תחנת ORBIT ל-35 דקות — המצגת ממילא רצה בזמן ההמתנה לכלים. 2. קיצור סיור הרעיונות במצגת הראשונה. 3. דחיסת ההיכרות עם סביבת העבודה ל-10 דקות (מדלגים על עצירה 1 — ראו אותה בבית — ומקצרים את עצירה 5).

---

## 00:00–00:05 · פתיחה — חיבור מהבית

- **המטרה:** לחבר את שלושת תוצרי הבית לעבודת היום, בלי לעצור על תקלות.
- **על המסך:** הדק הראשון, שקפים 1–2.
- **מה אומרים:** לפי הערות הדובר בדק — בבית עבדנו עם הטרמינל, עם git, עם VS Code, ויצרנו סרטון; היום הכול מתחבר. העמוד שהעליתם יקבל עיצוב חדש, הסרטון ייכנס לעמוד המוצר.
- **מה עושים:** בדיקת אצבעות מהירה: למי יש עמוד באוויר? למי יש סרטון שמור? מי שחסר — מסמנים לו שכן לעבודה משותפת.
- **לשים לב:** לא פותרים תקלות עכשיו. משפט קבוע: «בהפסקה משלימים ביחד».
- **מעבר:** ממשיכים ישר לשקף 3 — שלושת הקבצים.

## 00:05–00:25 · מצגת: איך בנוי עמוד אינטרנט

- **המטרה:** שפה משותפת — שלושה קבצים, שלושה שחקנים, והרעיון שהערך עבר לתכנון.
- **על המסך:** דק «איך בנוי עמוד אינטרנט» (9 שקפים) במצב הצגה; הערות הדובר במקש P.
- **מה אומרים:** לפי הערות הדובר המוטמעות בדק. שני דגשים: לשקף 5 (דפדפן, שרת, מסד נתונים) נותנים זמן אמיתי — זו הכנה לשיעור הבא; בשקף 6 השורה שלי: «אני אגיד לכם משהו: אני עובד המון עם עמודי HTML.»
- **מה עושים:** בשקף 8 — סיור חי של שלוש דקות באתר הדוגמאות, שלוש-ארבע דוגמאות קיצוניות, ומראים שליד כל עמוד יש את הפרומפט שיצר אותו. **אם אתר הדוגמאות עוד לא באוויר:** מראים במקומו את שני עמודי tuesday (עמוד הבית ועמוד המוצר) כדוגמה לשני עולמות שונים, ומספרים שהגלריה בדרך.
- **לשים לב:** קצב — תשעה שקפים בעשרים דקות; הסיור לא מתארך מעבר לשלוש דקות.
- **מעבר:** «יש לנו שפה משותפת — עוברים למסך המלא של סביבת העבודה.»

## 00:25–00:40 · היכרות מעמיקה עם סביבת העבודה (חי, בלי מצגת)

- **המטרה:** הלומדים מפסיקים לפחד מהחלון: מזהים כל אזור, מבינים ריפוזיטורי, מודלים, הרשאות, MD וחלונות מקבילים.
- **על המסך:** VS Code בלבד, מסך מלא, תיקיית TUESDAY פתוחה. אומרים בקול באיזה חלון אנחנו בכל רגע.
- **מה עושים:** סיור מסך בשש עצירות. הרשימה למטה היא הידע להגיד, בסדר ההסבר; ‏[חובה] = חייב להיאמר גם אם מקצרים.

### עצירה 1 · החלון של VS Code (~3 דק')

- פס האייקונים האנכי בקצה הוא מערכת הניווט: סייר הקבצים, חיפוש, בקרת גרסאות, הרצה ותוספים. הכול בחלון אחד — בלי לקפוץ בין תוכנות.
- סייר הקבצים מציג את תיקיית הפרויקט. זה הבית שלנו — כל מה שנוצר מופיע כאן.
- המרכז הוא העורך. כמה קבצים נפתחים כטאבים, כמו בדפדפן, ועוברים ביניהם בלי לסגור כלום.
- בתחתית יושב הטרמינל שהכרתם מהבית — Ctrl יחד עם המקש שמעל Tab פותח אותו. זה אותו מסך שחור בדיוק, רק בתוך הכלי.
- השורה התחתונה מציגה מידע חי: על איזה ענף אנחנו, ואם יש שגיאות בקובץ.
- בחנות התוספים התקנתם בבית שני תוספים: קלוד קוד ו-benefits-toolkit. ככה מרחיבים את הכלי — מתקינים רק מה שצריך.

### עצירה 2 · תיקייה אחת = פרויקט אחד (~1.5 דק')

- הכול מתחיל ב-**File ← Open Folder**. התיקייה שפתחנו היא הפרויקט: כל מה שקלוד יעשה יקרה בתוכה.
- חלון Workspace Trust שואל אם סומכים על התיקייה. מאשרים רק תיקיות שאנחנו יצרנו או מכירים.
- בתחנה הבאה נפתח ככה בדיוק את תיקיית המוצר.

### עצירה 3 · קלוד קוד בתוך העורך (~4 דק')

- אייקון ה-Spark פותח את הפאנל של קלוד קוד בצד. כל שיחה היא session נפרד — וקלוד לא זוכר שיחות קודמות.
- מצב Plan Mode נבחר במחוון-המצב בתחתית תיבת-הפרומפט: קלוד חושב, מציג תוכנית, ומחכה לאישור לפני שהוא נוגע בקבצים. ככה עבדתם בבית, וככה נעבוד היום.
- ‏[חובה] מצב Bypass permissions: כברירת מחדל קלוד עוצר ומבקש אישור כמעט על כל פעולה. במצב הזה הוא עובד ברצף עד הסוף בלי לעצור. מדליקים אותו כשעובדים בתוך תיקיית פרויקט מבודדת — במקרה הגרוע מוחקים את התיקייה ומתחילים מחדש. בתיקייה עם קבצים חשובים נשארים במצב הרגיל.
- ‏[חובה] החלפת מודלים: יש כמה מודלים — מהיר לעבודה השוטפת, חזק למשימות מסובכות באמת. מחליפים בבורר המודל שליד מחוון-המצב, או בפקודה ‎/model. המודל החזק גם צורך יותר מהמכסה — לכן ברירת המחדל לרוב, והחזק כשנתקעים או כשהמשימה באמת כבדה.
- לקלוד אין זיכרון בין שיחות. קובץ בשם CLAUDE.md בשורש הפרויקט נקרא אוטומטית בתחילת כל שיחה — שם שמים את החוקים הקבועים של הפרויקט. זו שכבת-זיכרון של פרויקט, בדיוק מהפירמידה של שיעור 2.
- שיחה שנהיית ארוכה מדי מאבדת חדות. הפקודה ‎/compact דוחסת אותה לסיכום וממשיכים; מעבר נושא אמיתי — פותחים שיחה חדשה.

### עצירה 4 · הקבצים מדברים (~2.5 דק')

- ‏[חובה] בזמן שקלוד עובד, הקבצים מופיעים בסייר בזמן אמת. זו הסיבה שעברנו לעורך — רואים מה באמת נוצר, לא מנחשים. בבית ראיתם את זה כשהעמוד נבנה מול העיניים.
- ‏[חובה] כל התוכן שלנו — סיכומים, פרקים, סקילים, CLAUDE.md — כתוב בקבצי MD. קובץ MD נפתח כטקסט פשוט; Ctrl עם Shift ועם V פותח תצוגה מעוצבת. כל מה שקראתם באתר הקורס הוא בדיוק קבצים כאלה.

### עצירה 5 · ריפוזיטורי — תיקייה עם היסטוריה (~2.5 דק')

- ‏[חובה] ריפוזיטורי הוא פשוט תיקייה עם היסטוריה. git שומר נקודות-שמירה של כל שינוי — מכונת הזמן מהבית. GitHub מחזיק עותק בענן: לשתף, לגשת מכל מחשב, ולפרסם לאינטרנט.
- בבית עשיתם את זה בפקודות בטרמינל. הנה אותו דבר בכפתורים: פאנל בקרת-הגרסאות מדגיש כל קובץ ששונה, לחיצה מראה בדיוק מה השתנה, וכפתור אחד עושה commit.
- כפתור Publish to GitHub יוצר ריפוזיטורי חדש ודוחף אליו בלחיצה. העמוד שהעליתם בהכנה — בדיוק המסלול הזה.

### עצירה 6 · הרגלי עבודה (~1.5 דק')

- ‏[חובה] עובדים בכמה חלונות במקביל: ‏**File ← New Window**, פותחים תיקייה אחרת — שיחה אחת בונה ושיחה שנייה בודקת או חוקרת. היום נשתמש בזה: בזמן שמחקר רץ בתחנה האחרונה, ממשיכים לעבוד.
- ההרגל השלישי: סוקרים לפני שמאשרים. קלוד מציע — אנחנו מחליטים. התוכנית ב-Plan Mode וה-diff לפני commit הם אותו רעיון.

- **לשים לב:** לא מדגימים שני סוכנים רצים בשני חלונות בו-זמנית — רק מראים את החלון השני. אם הזמן קצר: עצירה 1 בקצרה (ראו בבית) ועצירה 5 בלי ההדגמה בכפתורים.
- **מעבר:** «עכשיו כשאנחנו מכירים את הסביבה — פותחים את תיקיית המוצר ובונים לו עמוד.»

## 00:40–01:15 · בניית עמוד המוצר

- **המטרה:** לכל לומד עמוד נחיתה שהסרטון שלו חי בראשו עם אפקט הגלילה.
- **על המסך:** VS Code עם הפאנל של קלוד קוד, תיקיית TUESDAY. הדפדפן לסיור בדמו.
- **מה אומרים:** בבית יצרתם סרטון למוצר — עכשיו המוצר מקבל עמוד משלו. אני מדגים על TUESDAY; אתם עובדים על מה שבחרתם — המותג שלכם, TUESDAY מהערכה, או מוצר מהאינטרנט. מזכירים: מעתיקים את הסרטון לתיקיית המוצר ומשנים את שמו ל-hero.mp4 — חצי דקה שחוסכת את רוב התקלות.
- **מה עושים:**
  1. צעד שינוי השם ביחד (כולם, דקה).
  2. מדביקים את הפרומפט בקלוד קוד, במצב Plan Mode, בתוך תיקיית המוצר. קלוד ישאל שפה, יציג תוכנית, ויחכה לאישור.
  3. בזמן חילוץ הפריימים והבנייה לא מחכים: מסיירים בעמוד TUESDAY הגמור בדפדפן ומראים בדיוק מה הולך להיווצר אצלם.
  4. חוזרים לתוצר של אחד הלומדים ופותחים בדפדפן — גוללים קדימה ואחורה.

הפרומפט של הלומדים (משוכפל כאן למקרה שצריך לשלוח בצ'אט; נמצא גם בעמוד הכיתה):

```
You are a senior web developer and motion designer working in Claude Code, inside my product
folder. Build me a scroll-driven product landing page, Apple style: as the visitor scrolls,
the product video plays frame by frame on a pinned canvas.

STEP 0 — One question first: ask me in which language the page should be written — Hebrew
(RTL, dir="rtl" lang="he") or English — then wait for my answer.

STEP 1 — Explore the folder: read the brand/product files (brand sheet, one-pager, README if
present) and find the product video — hero.mp4, or any .mp4 in the folder. Use ONLY facts
found in these files. Do not invent product claims, prices, or testimonials; if something is
missing, use a clearly marked placeholder like [TAGLINE].

STEP 2 — Frames: check that ffmpeg is available (run: ffmpeg -version). If it is missing,
install it with: winget install --id Gyan.FFmpeg -e --accept-source-agreements, and make sure
it is on PATH for this session. Then extract the video into an image sequence:
  ffmpeg -i hero.mp4 -vf "fps=30,scale=1600:-1" -c:v libwebp -q:v 80 -f image2 assets/frames/frame_%04d.webp
(-c:v libwebp with -f image2 is REQUIRED — without it ffmpeg writes one animated file instead
of a numbered sequence). Target 120-200 frames; adjust fps to the video length. Also save the
first frame as assets/poster.webp.

STEP 3 — Plan Mode: present a short plan — sections, palette and fonts taken from the brand
files, and how the frame sequence will drive the hero. Explain what you understood and WAIT
FOR MY APPROVAL before writing any code.

STEP 4 — Build exactly three files (index.html, style.css, script.js) plus the assets folder.
No build step. GSAP + ScrollTrigger + Lenis via their official CDN script tags are allowed.
  - Hero: a tall scroll section with a pinned canvas. Preload all frames; decode each frame
    ONCE into an ImageBitmap and draw only decoded bitmaps (never set img.src on scroll, never
    re-decode). Draw the nearest ready frame so fast scrolling never freezes. Cover-fit the
    canvas with a devicePixelRatio cap of 1.5.
  - Map scroll progress within the hero section to the frame index; scrub 0.6, anticipatePin 1.
  - Text overlays from the brand taglines fade in and out over the canvas at scroll points.
  - After the hero: what-it-is (from the one-pager), 3 selling points as cards, closing CTA.
    No generic pricing table.
  - Design: strictly the brand colors and type character from the brand sheet. Minimum body
    font 18px, mobile-first responsive, no emojis.
  - Mobile: load every 2nd frame under 768px and always include the exact last frame.
  - prefers-reduced-motion: show the poster frame, no scrubbing.
  - Accessibility: semantic tags, alt text, visible focus states.

STEP 5 — Safety: do not delete or overwrite any of my existing files. Write only the new
files and the assets/frames output.

STEP 6 — When done, open index.html in my default browser (Windows PowerShell:
Start-Process index.html) and give me one short paragraph: what you built and what I can
tweak next.
```

- **לשים לב:** סרטון לא נמצא — בודקים שם ותיקייה. עמוד לבן — פותחים את קונסולת הדפדפן ומדביקים לקלוד את השורה האדומה הראשונה. חילוץ פריימים נכשל — מריצים שוב את בדיקת ffmpeg מהפרומפט. תוצאה גנרית — מפנים את קלוד חזרה לקובץ המותג. תקרת זמן: ב-01:15 עוברים להפסקה גם אם לא כולם סיימו — נקודת ההמשך כתובה בעמוד הכיתה.
- **מעבר:** «הדף עובד. עכשיו נדבר על איך דברים נראים — מערכת עיצוב.»

## 01:15–01:25 · הפסקה

- **על המסך:** עמוד המפגש באתר התלמידים.
- **מה אומרים:** מי שנתקע באחת ההכנות — עכשיו הזמן להשלים, עם שכן או איתי.

## 01:25–02:05 · מערכת עיצוב

- **המטרה:** כל לומד יוצא עם מערכת עיצוב משלו, והעמוד מהבית לובש אותה.
- **על המסך:** דק «מערכת עיצוב» ← דפדפן (חיפוש) ← קלוד קוד ← הדמו המוכן.
- **מה אומרים:** לפי הערות הדובר בדק. הרגע המרכזי הוא שקף 5 — ההצהרה — להאט שם. בשקף 4 מצביעים על אזורים בצילום מערכת העיצוב של TUESDAY.
- **מה עושים:**
  1. מצגת, שקפים 1–6 (~10 דק').
  2. חיפוש השראה (5 דק', מפעילים טיימר): הלומדים מחפשים לפי הקטגוריות, מצלמים מקטע שאהבו — לא עמוד שלם.
  3. הדגמה (~5 דק'): מריצים את הפרומפט הראשון על צילום מסך של לומד — ולא מחכים. בזמן שהוא רץ מראים את הדמו המוכן: מערכת העיצוב של TUESDAY שנולדה מהלוגו, ואז העמוד הגנרי לפני — ואחרי שהפרומפט השני הלביש עליו את TUESDAY.
  4. הלומדים מריצים את הפרומפט הראשון על הצילום שלהם (~8 דק'). הפרומפט שואל על שפה — עונים עברית.
  5. הפרומפט השני על העמוד מהבית, במצב Plan Mode ‏(~10 דק').
  6. סיכום ומעבר (~2 דק').

פרומפט ראשון — מתמונה למערכת עיצוב (המקור בעמוד הכיתה; מצורף צילום המסך להודעה):

```
# Build a Complete, Style-Matched Design System from a Reference Image

You are a senior design engineer and design-systems specialist working in **Claude Code**. Attached to this message is a **reference image**. Your job is to produce a single, self-contained, interactive **Design System reference page** — a living component library in the spirit of Storybook — whose entire visual language is **derived from, and faithfully matched to, the attached image**.

Work in the exact order below. Do not skip steps, and **do not write any code before your plan is approved.**

---

## Step 0 — Ask one question first
Before anything else, ask me **one** question and wait for my answer:

> In which language should the Design System be written — **English (LTR)**, **Hebrew (RTL, `dir="rtl" lang="he"`)**, or **bilingual** (English component/token names + descriptions in a language I choose)?

Apply my answer to all page text and the layout direction. If bilingual, keep component names, token names, and code snippets in English and write the human-facing descriptions in the chosen language.

---

## Step 1 — Analyze the reference image (style detection)
Study the image and **classify its visual style** against known design languages. Name the closest match (or an explicit blend), and justify it in 3–6 short bullets citing concrete evidence from the image. Consider at least:

- **Glassmorphism** — translucent frosted panels, background blur, thin light borders, layered depth.
- **Neumorphism** — soft monochrome surfaces, dual (light + dark) extruded/inset shadows, very low contrast.
- **Brutalism / Neubrutalism** — raw high contrast, hard 2–4px borders, zero/low radius, solid offset drop shadows, oversized bold type.
- **Claymorphism** — puffy rounded 3D shapes, large radius, soft inner + outer shadows, pastel palette.
- **Minimalism / Swiss** — generous whitespace, monochrome + one accent, hairline borders, type-led hierarchy.
- **Flat / Material** — solid fills, subtle elevation shadows, bold accent, geometric.
- **Skeuomorphism** — realistic textures, gradients, bevels, physical metaphors.
- **Bento** — modular rounded card grid with varied tile sizes.
- **Editorial / Luxury** — serif display type, dramatic imagery, refined restraint, high contrast.
- **Dark / Developer** — near-black surfaces, a single neon accent, monospace accents, subtle glows.
- **Retro / Y2K** and **Playful / Colorful** — vibrant multi-color, organic shapes, pill-shaped components.

Then **extract exact design tokens** from the image:

- **Palette** (give hex values): background, surface(s), primary text/ink, muted text, borders, ONE (or a few) accent color(s), and semantic colors (success / warning / danger / info) tuned to fit the palette.
- **Typography**: serif vs sans vs mono, weight range, letter-spacing character. Pick matching **Google Fonts** (a display/heading face, a body face, and a monospace for code). If the chosen language is Hebrew or bilingual, pick fonts with strong Hebrew support (e.g., Rubik, Assistant, Heebo).
- **Shape language**: the border-radius scale, border thickness, and — most importantly — the **shadow/elevation model that defines this style** (glass blur, neumorphic dual-shadow, brutalist hard offset, flat soft elevation, or none).
- **Motion character**: e.g., smooth fades (glass/minimal), snappy/near-instant (brutalist), springy/bouncy (playful), restrained (editorial).
- **Density**: generous vs compact spacing.

Report your classification and extracted tokens back to me before planning.

---

## Step 2 — Plan (enter Plan Mode)
Enter **Plan Mode** and write a concise plan covering:

- The detected style and the concrete token values you will use, expressed as CSS custom properties (light + dark).
- The page shell and the full, ordered list of sections/components (the mandatory inventory below).
- How the detected style will be applied **consistently to every component** (buttons, cards, inputs, overlays — all coherent with the image).
- The single-file, no-build technical approach.

Then **call `ExitPlanMode` to request my approval. Do not write any code until I approve.**

---

## Step 3 — Build (only after approval)
Create ONE self-contained `index.html`.

### Architecture & shell
- Single file. All CSS in one inline `<style>`, all JS in one inline `<script>`. **No build step, no frameworks or libraries.** The only external resources are **Google Fonts** and **Tabler Icons** (webfont via CDN); provide a graceful system-font fallback if the CDN is offline.
- A **token layer** using CSS custom properties for the entire palette, spacing, radius, shadow, and type scale — every component inherits from it.
- **Light + dark themes** driven by a `[data-theme]` attribute, switched by a **toggle** in a sticky top bar, persisted in `localStorage`. Both themes must express the detected style.
- **Storybook-like layout**: a sticky top bar (logo + version tag + theme toggle); a **sidebar** containing a live **search filter**, grouped navigation, and **scrollspy** that highlights the active section on scroll; and a main "canvas" area where each component sits in a bordered specimen panel with a caption. On mobile the sidebar collapses into an off-canvas drawer with a hamburger toggle and a scrim.
- A hero section, a footer, a **back-to-top** button (appears on scroll), a toast region, and overlay roots.

### Mandatory component inventory
Group these in the sidebar exactly as listed. **Every item must be present**, and every one must be styled in the detected aesthetic (not a generic default).

- **Foundations**: Colors (click a swatch to copy its hex, with a toast), Typography (type scale + weight ramp + monospace sample), Spacing scale, Radius scale, Elevation/Shadow, Icons (a Tabler gallery — click an icon to copy its name).
- **Actions**: Buttons (variants primary / secondary / ghost / outline / danger × sizes sm / md / lg × states default / hover / active / disabled / loading, plus icon buttons and full-width), Button Group & Segmented control, Dropdown Menu (with separators and shortcut hints, closes on outside click), FAB & Speed Dial, Keyboard Keys (`kbd`).
- **Form Controls**: Inputs (text / textarea / select with default / focus / error / disabled), Input Add-ons (prefix / suffix / attached button), Search (with clear button), Password (show/hide toggle), Number Stepper, OTP / PIN (auto-advance between cells), Selection (checkbox / radio / switch), Autocomplete / Combobox (live filtering), Tags Input (add on Enter, remove on click), File Upload (click + drag & drop), Rating (interactive stars), Color Picker (native + brand presets), Date & Time (date / time / month), Slider (range with a live value readout).
- **Data Display**: Cards (basic / media / stat), List Group, Description List, Stats grid, Table (hover rows + status badges), Timeline, Tree View (expand/collapse), Calendar (real current month with prev/next navigation and day selection), Carousel (arrows + dots), Code Block (with copy), Avatar (sizes / status dot / group), Badges & Chips (removable), Empty State.
- **Navigation**: Navbar, Sidebar Nav, Tabs (working), Steps / Stepper (clickable), Breadcrumbs, Pagination (working), Command Palette (opens with **Ctrl/Cmd + K**, live filter, jumps to the chosen section), Bottom Navigation.
- **Feedback & Overlay**: Alerts (info / success / warning / danger, dismissible), Banner, Toast (triggerable), Modal (blurred overlay; close via button, overlay click, or ESC), Confirm Dialog, Drawer, Popover (closes on outside click), Tooltip (on hover), Progress (bar + spinner + skeleton), Circular Progress (ring), Loading Bar (top of page), Result / Status (success + error).
- **Layout**: Divider (plain / with text / vertical), Accordion (working), Blockquote.
- **Interactive**: a **Component Playground** — live controls (e.g., variant / size / state / label / icon toggles) that update a live preview and generate a copyable HTML snippet.

### Behavior & interactivity
Everything must actually work: theme toggle + persistence; sidebar search filter; scrollspy; reveal-on-scroll; tabs; accordion; modal / drawer / command-palette / confirm open + close (ESC and overlay click); dropdown and popover close on outside click; OTP auto-advance; autocomplete filtering; tags add/remove; file drag & drop; rating; color picker; number stepper; carousel; calendar; pagination; steps; toasts; and **copy-to-clipboard** (hex tokens, icon names, code snippets) using `navigator.clipboard` with an `execCommand` fallback so it also works from `file://`.

### Motion
Tasteful and subtle: fade/slide-in as sections enter the viewport (IntersectionObserver), smooth hover/press micro-interactions, a smooth theme transition, and gentle overlay enter/exit. **The motion character must match the detected style.** Nothing flashing or distracting. Fully honor `prefers-reduced-motion`.

### Quality bar
- Responsive — looks great on phone and laptop.
- Accessible — semantic HTML, visible focus states, keyboard operability, and `aria-*` on interactive/overlay elements.
- **No emojis anywhere** — use Tabler icons only.
- Clean, readable, consistently named code.
- The final page must be visibly, unmistakably in the **style of the reference image** — palette, typography, shapes, shadows, and motion all coherent.

---

## Step 4 — Open it
After building, open `index.html` in my default browser using the correct command for my OS — Windows PowerShell: `Start-Process index.html`; macOS: `open index.html`; Linux: `xdg-open index.html`.
```

פרומפט שני — הלבשת המערכת על העמוד מהבית (מדביקים בתיקיית העמוד, עם קובץ המערכת שנוצר):

```
You are a senior design engineer working in Claude Code. In this folder is a web page I built
(index.html — my GitHub Pages page). I am also giving you a design-system reference page
(design-system.html) that defines my visual language: colors, typography, spacing, radius,
shadows, and component styles.

MISSION: restyle my page to live fully inside this design system. Content stays; look changes.

STEP 1 — Read the design system page and extract its tokens: palette (exact hex), font stack,
spacing scale, radius, shadow/elevation model, and motion character.

STEP 2 — Plan Mode: explain what you understood — which tokens you extracted and what will
change on my page — and WAIT FOR MY APPROVAL before touching anything.

STEP 3 — Apply, strictly:
  - Every color used is a token from the system; every font from its stack; spacing on its
    scale. No inventions, no defaults — never fall back to generic AI design (no Inter/Roboto,
    no purple gradients, no cookie-cutter cards).
  - RESTYLE ONLY: do not rewrite, add, or remove content, sections, or functionality.
  - Keep the page valid, responsive, and accessible (focus states, contrast); honor
    prefers-reduced-motion.

STEP 4 — Safety: before changing index.html, save a copy of the current version as
index.before-ds.html in the same folder. Never delete any file.

STEP 5 — Open the restyled page in my default browser, and give me a short before/after list:
each visual decision and the token behind it.
```

- **לשים לב:** צילום של עמוד שלם — לחתוך למקטע. מי שרוצה להלביש את עמוד המוצר במקום העמוד מהבית — אפשרי, אבל המסלול שמלמדים הוא העמוד מהבית. ריצה תקועה — הדמו המוכן הוא ההצגה כולה. גופנים וריווחים לפעמים דורשים סבב תיקון — אומרים מראש שזה חלק מהתהליך.
- **מעבר:** «יש עמוד ויש מראה. עכשיו העסק צריך ידע מסודר — ORBIT.»

## 02:05–02:45 · מאגר ידע בשיטת ORBIT

- **המטרה:** כל לומד מפעיל את שרשרת kb-builder על תחום אמיתי ויוצא עם מחקר רץ ופרומפטים לכל ההמשך.
- **על המסך:** קלוד קוד (תיקייה חדשה) ← דק ORBIT בזמן שהריצות עובדות ← הדגמת האינדקס מהקבצים האפויים.
- **מה אומרים:** בשיעור שעבר כל אות הייתה כלי בפני עצמו; היום מפעילים לראשונה שרשרת שלמה. «אות בודדת היא מילה; compound הוא משפט.» «והקסם: אתם לא כותבים אף פרומפט. הסקיל כותב לכם את כולם, שלב אחרי שלב.» «שני הסקילים האלה הם לא קסם. הם בנויים בדיוק מהאותיות שאתם כבר מכירים.» ומראש: המאגר שמתחילים היום, יחד עם העיצוב, ישמשו אתכם בפרויקט הסיום.
- **מה עושים:**
  1. פתיחה קצרה (2 דק').
  2. בדיקת התקנה + תיקייה חדשה (4 דק'): מדביקים את בדיקת ההתקנה; תיקייה ריקה דרך **File ← Open Folder**. הערת PL2: אם אזור Personal plugins ריק — באג מוכר של קלוד, לא תקלה אצלם; קישור הגיבוי בעמוד ההכנה.
  3. ריאיון ושיגור המחקר (10 דק'): מפעילים את השרשרת, עונים על שאלות הריאיון — היום בוחרים סקירה של חמישה עד שמונה פרקים ושני כלי מחקר. את פרומפט המחקר משגרים בשני כלים ולא מחכים.
  4. מצגת ORBIT ‏(10 דק', בזמן שהריצות עובדות) — לפי הערות הדובר בדק.
  5. שמירת תוצאות והמשך אישי (12 דק'): כשריצה חוזרת — שומרים קובץ בתיקייה בשם research עם שם הכלי. מי שהספיק מדביק את פרומפט האינדקס ומקבל את טבלת האב. מדגימים אינדקס על קובצי המחקר האפויים של TUESDAY. השאר ממשיכים בבית — פרק אחד לכל שיחה.
  6. סגירה (2 דק').

משפטי ההדבקה של הלומדים (נמצאים גם בעמוד הכיתה):

```
בדוק אילו סקילים של ORBIT מותקנים אצלך והצג רשימה קצרה.
```

```
הפעל את kb-builder. אני רוצה לבנות מאגר ידע על [התחום שלכם].
```

- **לשים לב:** מי שמבקש בריאיון עשרים פרקים — מכוונים לחמישה עד שמונה להיום. ריצת מחקר איטית — זה בסדר, ההמשך בבית. קודם שומרים את קובצי התוצאות, רק אחר כך מדביקים את פרומפט האינדקס. שורת סתירה באינדקס היא יתרון של השיטה — מראים אותה. לא להשתמש בשום פקודת עזרה של ה-plugin — משפט הבדיקה למעלה הוא הדרך.
- **מעבר:** «בנינו עמוד, נתנו לו מראה, והתחלנו מאגר ידע. עוברים לסיכום.»

## 02:45–02:50 · סיכום ומנטרת הסיום

- **על המסך:** עמוד המפגש באתר התלמידים.
- **מה אומרים:** בנינו עמוד, נתנו לו מראה, והתחלנו לבנות לעסק ידע מסודר — שלושת אלה נפגשים בפרויקט הסיום. ואז המנטרה, כלשונה: «חברים, ניפגש בשבוע הבא. תזכרו שאת שיעורי-הבית אתם מתחילים תמיד בלראות את הסרטון הראשון של יחידת-התרגול. תזכרו שיש גם שיעורי-בית וגם יחידת-הכנה לשיעור הבא. והכי חשוב, מה שאתם לא יודעים, תשאלו את הצ'אט; מה שאתם לא מבינים, תשאלו אותי.»
- **לשים לב:** אין סבב שאלות פורמלי. סוגרים מיד ומפנים לערוץ התמיכה.

---

## תזכורת לפני השיעור (לשליחה לקבוצה, יומיים לפני)

לקראת השיעור ביום שלישי, שלוש הכנות קטנות:
1. ודאו שסיימתם את שלוש יחידות ההכנה — העמוד שלכם באוויר והסרטון שמור אצלכם.
2. הכינו חשבון Gmail קבוע (ישן זה מצוין) שישמש אתכם לכלי המחקר — ודאו שאתם מחוברים אליו.
3. פתחו את הטרמינל — כמו שלמדתם ביחידה הראשונה — והדביקו שורה אחת: winget install --id Gyan.FFmpeg -e
נתראה בשיעור.
