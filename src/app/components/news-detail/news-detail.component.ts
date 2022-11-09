import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsDetailComponent implements OnInit {
  private navParams: any;
  public detailData: any;
  public listsLatestNews: any;
  public listsRelateNews: any;
  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let state = this.router.getCurrentNavigation()?.extras?.state || history.state;
    this.navParams = state || null;
    if (this.navParams && this.navParams?.id) {
      this.getNewsDetailData(this.navParams.id);
    }
    console.log('SLUG', state);
  }

  getNewsDetailData(id: any) {
    this.matchService.getNewsDetail(id)
    .subscribe((rs) => {
      if (rs) {
        this.detailData = rs?.data;
        this.listsLatestNews = rs?.data_hot;
        this.listsRelateNews = rs?.data_related;
      }
    })
  }

  async getNews(id: any) {
    await this.getNewsDetailData(id);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  handleFormatDateNews(time: any) {
    return moment(time).format('LL');
  }

}
