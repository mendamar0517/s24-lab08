import { CardStatus } from '../../cards/cardstatus.js' 
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter(): CardOrganizer {
  return {
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      // Шинэ массив үүсгэж, анхны `cards`-г өөрчлөхгүй байх
      return [...cards].sort((a, b) => {
        const lastMistakeA = a.lastMistakeTimestamp || 0;
        const lastMistakeB = b.lastMistakeTimestamp || 0;

        return lastMistakeB - lastMistakeA; // Сүүлийн алдааны хугацаагаар буурахаар эрэмбэлэх
      });
    }
  };
}

export { newRecentMistakesFirstSorter };
