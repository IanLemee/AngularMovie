import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private filmes = [
    {
      titulo: 'Avengers: Age of Ultron', data: ' 1 May 2015',
      descricao: `When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program
      called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous     Ultron
      from enacting his terrible plan.`,
      trailer: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
      Rating: 7.3,
      Duration: '2h 21min',
      Genre: 'Action, Adventure, Sci-Fi'
    },
    {
      titulo: 'Tenet',
      data: ' 3 September 2020',
      descricao: `Armed with only one word, Tenet, and fighting for the survival of the entire world, a
      Protagonist journeys through a twilight world of international espionage on a mission that will unfold in
      something beyond real time.`,
      trailer: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
      Rating: 7.8,
      Duration: '2h 30 min',
      Genre: 'Action, Sci-Fi'
    },
    {
      titulo: 'Spider-Man: Into the Spider-Verse',
      data: '14 December 2018',
      descricao: `Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.`,
      trailer: 'https://www.youtube.com/watch?v=tg52up16eq0',
      Rating: 8.4,
      Duration: '1h 57min',
      Genre: 'Action, Animation, Adventure'
    },
    {
      titulo: 'Knives Out',
      data: '27 November 2019',
      descricao: `A detective investigates the death of a patriarch of an eccentric, combative family.`,
      trailer: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ ',
      Rating: 7.9,
      Duration: '2h 10min',
      Genre: 'Comedy, Crime, Drama'
    },
    {
      titulo: 'Guardians of the Galaxy',
      data: '1 August 2014',
      descricao: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to
      purge the universe.`,
      trailer: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
      Rating: 8.0,
      Duration: '2h 1min',
      Genre: 'Action, Adventure, Comedy'
    },
  ]

  constructor() { }
}
