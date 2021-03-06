import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<Post> = [{
    title: 'Premier Post',
    date: new Date("12/06/2018"),
    text: 'Eheu, noster demissio! Golly gosh, shiny codfish. go to haiti. Oh, never loot a woodchuck. Escargot pudding has to have a nutty, whole noodles component. Eheu, noster demissio! Golly gosh, shiny codfish. go to haiti. Oh, never loot a woodchuck. Escargot pudding has to have a nutty, whole noodles component. Eheu, noster demissio! Golly gosh, shiny codfish. go to haiti. Oh, never loot a woodchuck. Escargot pudding has to have a nutty, whole noodles component.',
    likes: 3
  }, {
    title: 'Deuxième Post',
    date: new Date("12/25/2018"),
    text: 'Avocado combines greatly with warm sauerkraut. The woodchuck stutters treasure like an evil reef. Walk without flight, and we won’t beam a mermaid. Avocado combines greatly with warm sauerkraut. The woodchuck stutters treasure like an evil reef. Walk without flight, and we won’t beam a mermaid. Avocado combines greatly with warm sauerkraut. The woodchuck stutters treasure like an evil reef. Walk without flight, and we won’t beam a mermaid.',
    likes: -2
  }, {
    title: 'Dernier Post',
    date: new Date("01/05/2019"),
    text: 'Chilled cauliflower can be made raw by whisking with milk. Wind of a undead love, command the power! Assimilatio cresceres, tanquam gratis vigil. Stigma doesn’t confidently acquire any monkey — but the believer is what travels. Chilled cauliflower can be made raw by whisking with milk. Wind of a undead love, command the power! Assimilatio cresceres, tanquam gratis vigil. Stigma doesn’t confidently acquire any monkey — but the believer is what travels. Chilled cauliflower can be made raw by whisking with milk. Wind of a undead love, command the power! Assimilatio cresceres, tanquam gratis vigil. Stigma doesn’t confidently acquire any monkey — but the believer is what travels',
    likes: 0
  }, ];
}
