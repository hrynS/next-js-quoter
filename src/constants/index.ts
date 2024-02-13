import { IAuthor, IQuote } from '@/app/types';

export const mockAuthors: IAuthor[] = [
  {
    id: 1,
    name: "Валер'ян Підмогильний",
    description:
      ' український письменник і перекладач, один з найвизначніших прозаїків українського «Розстріляног відродження». Жертва Сталінських репресій.',
  },
  {
    id: 2,
    name: 'Ліна Костенко',
    description: 'українська поетеса-шістдесятниця, письменниця та дисидентка.',
  },
];
export const mockQuotes: IQuote[] = [
  {
    id: 1,
    authorId: 1,
    author: "Валер'ян Підмогильний",
    content:
      'Важливо ж відразу поставити себе в норму, бо норма й розпорядок - перша запорука досягнень...',
    source: 'роман "Місто"',
  },
  {
    id: 2,
    authorId: 2,
    author: 'Ліна Костенко',
    content: 'у нас всі мужчини нічого не можуть вдіяти...',
    source: 'роман "Записки українського самашедшего"',
  },
];

export const NAV_ITEMS_TO_HREF = {
  Home: '/',
  About: '/about',
  Authors: '/authors',
};
