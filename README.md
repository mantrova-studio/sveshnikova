# Сайт воспитателя (11ty + GitHub Pages + Decap CMS)

## Запуск локально
1) Установите Node.js (желательно 20+)
2) В корне проекта:
```bash
npm install
npm run dev
```
Откройте адрес из консоли (обычно http://localhost:8080).

## Сборка
```bash
npm run build
```
Сайт появится в папке `dist/`.

## Деплой на GitHub Pages
Workflow уже настроен: при пуше в `main` сайт собирается и публикуется в ветку `gh-pages`.

В репозитории:
- Settings → Pages → Deploy from branch
- Branch: `gh-pages` / root

## Админ-панель (CMS)
Панель доступна по `/admin/`.

Важно: GitHub Pages сам по себе не даёт авторизацию для CMS. Для входа через браузер используйте Netlify (бесплатно) только как слой авторизации:
1) Подключите этот репозиторий к Netlify (New site from Git)
2) Включите: Identity → Enable, затем Git Gateway → Enable
3) Invite users (добавьте себя)
4) Откройте панель: `https://<ваш-netlify-домен>/admin/`
После добавления материалов они будут коммититься в GitHub → Actions обновит GitHub Pages.

## Фото
Замените `src/assets/img/photo.jpg` на ваше фото (сохранив имя файла).
