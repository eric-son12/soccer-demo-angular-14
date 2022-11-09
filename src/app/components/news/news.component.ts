import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  public listsNews: any;
  public listsHightLight: any;
  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.matchService.getListsNews()
    .subscribe((rs) => {
      this.listsNews = rs.data.list;
      this.listsHightLight = rs.data.highlight;
      console.log('NEWS', rs.data)
    })
  }

  handleFormatDateNews(time: any) {
    return moment(time).format('LL');
  }

}
