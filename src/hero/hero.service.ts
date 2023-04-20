import { Injectable } from '@nestjs/common';
import { Hero } from './schema/hero.schema';

@Injectable()
export class HeroService {
  getHero(id: string): Hero {
    return {
      id: 'asd',
      name: 'hero',
    };
  }
  listHero(): Hero[] {
    return [
      {
        id: 'asd',
        name: 'hero',
      },
    ];
  }
  createHero(hero: Hero): Hero {
    return hero;
  }
  updateHero(id: string, name: string): Hero {
    return {
      id,
      name,
    };
  }
  deleteHero(id: string): boolean {
    return true;
  }
}
