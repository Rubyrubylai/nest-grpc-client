import { Observable } from 'rxjs';

export interface IHeroService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
}

export interface HeroById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
}
