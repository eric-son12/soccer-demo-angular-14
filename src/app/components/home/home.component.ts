import { Component, OnInit, Sanitizer, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { MatchService } from 'src/app/services/match.service';
import * as _ from 'lodash';
// import { Parser } from 'm3u8-parser';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare var videojs: any;
import 'video.js/dist/video-js.css'
import 'videojs-contrib-quality-levels';
// import videojsqualityselector from 'videojs-hls-quality-selector';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public listsFeature: Array<any> = [];
  public listsLatestNews: Array<any> = [];
  public listsMatchLive: Array<any> = [];
  public listsMatchLiveFilter: Array<any> = [];
  public isLoadMoreMatch: boolean = false;
  public isShowMatch: boolean = false;
  public isCollapseTournament: boolean = true;
  public labelDate: Array<string> = ['live'];
  public videoJsConfigObj = {
    preload: "metadata",
    controls: true,
    autoplay: true,
    overrideNative: true,
    techOrder: ["html5", "flash"],
    html5: {
        nativeVideoTracks: false,
        nativeAudioTracks: false,
        nativeTextTracks: false,
        hls: {
            withCredentials: false,
            overrideNative: true,
            debug: true
        }
    },
    
};
  constructor(
    private matchService: MatchService,
    private sanitizer: Sanitizer
    // public dialog: MatDialog
  ) {
    this.getDateRange();
  }

  ngOnInit() {
    this.getInitationData();
    var player = videojs('my-video', this.videoJsConfigObj);
    // player.hlsQualitySelector = videojsqualityselector;
    player.hlsQualitySelector();
  }

  getDateRange() {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    this.labelDate.push(moment(startDate).format('DD dddd'));
    this.labelDate.push(moment().format('DD dddd'));
    for (let i = 1; i < 4; i++) {
      let endDate = new Date();
      let tempDate = endDate.setDate(endDate.getDate() + i);
      this.labelDate.push(moment(tempDate).format('DD dddd'))
    }
    this.labelDate.forEach(item => item === moment().format('DD dddd') ? moment().format('DD') + ' Today' : null)
    console.log('DATE', this.labelDate);
  }

  getInitationData() {
    this.matchService.getFeatured().subscribe((rs) => {
      this.listsFeature = rs;
      console.log(this.listsFeature);
    });
    this.matchService.getLatestNews().subscribe((rs) => {
      this.listsLatestNews = rs;
      console.log(this.listsLatestNews);
    })
    this.matchService.getMatchLive().subscribe((rs) => {
      this.listsMatchLive = rs;
      console.log(this.listsMatchLive);
      this.sortMatchByTournament();
    })
  }
  getMatchByDate() {
    const date = moment().format('YYYYMMDD');
    this.matchService.getMatchByDay(date).subscribe((rs) => {
      console.log(rs);
    });
  }

  playVideo() {
    let player = videojs("my_video_1");
        player.play();
  }

  parseDateTime(timeStamp: any) {
    let date = new Date(timeStamp);
    let time = moment(date).format('DD/MM/YYYY HH:mm:ss');
    return time;
  }

  handleBtn() {
    alert('Yeu ny ny');
  }

  handleFormatDateNews(time: any) {
    return moment(time).format('LL');
  }

  sortMatchByTournament() {
    let listGroupTournament: any = [];
    let listPorityTournament: any = [];
    listPorityTournament = this.listsMatchLive.sort((a,b) => {
      return b?.tournament?.priority - a?.tournament?.priority;
    })
    listGroupTournament = _.groupBy(listPorityTournament, item => item.tournament.name);
    this.listsMatchLive = Object.entries(listGroupTournament);
    this.listsMatchLiveFilter = this.listsMatchLive;
    console.log(this.listsMatchLive);
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     // data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }

  filterMatchLive() {
    let tempListsMatch: any = [];
    tempListsMatch = _.clone(this.listsMatchLive);
    for (let i = 0; i < tempListsMatch.length; i++) {
      let item = tempListsMatch[i];
      item[1] = _.filter(item[1], (rs => rs.match_status == 'live'));
    }
    tempListsMatch = _.filter(tempListsMatch, (item => item[1].length != 0));
    this.listsMatchLiveFilter = tempListsMatch;
    console.log('a', tempListsMatch);
  }

  bypassUrl() {
    this.sanitizer.sanitize
  }

  handleChangeTab(event: any) {
    if (event.tab.textLabel == 'LIVE') {
      this.filterMatchLive();
    } else {
      this.listsMatchLiveFilter = this.listsMatchLive;
    }
    console.log(event.tab.textLabel);
  }

}
