import { IQuote } from "@/app/types";

export const FETCH_ERROR_MESSAGE = 'Ooops! Something went wrong while fetching. Try again later'
export const mockQuotes: IQuote[] = [{
    authorId: 1,
    author: "Валер'ян Підмогильний",
    content: 'Важливо ж відразу поставити себе в норму, бо норма й розпорядок - перша запорука досягнень...',
    source: 'роман "Місто"'
}, {
    authorId: 2,
    author: "Ліна Костенко",
    content: 'у нас всі мужчини нічого не можуть вдіяти...',
    source: 'роман "Записки українського самашедшего"'
}]