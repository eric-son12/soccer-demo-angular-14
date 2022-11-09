import { Component, OnInit } from '@angular/core';
declare var jwplayer: any;

@Component({
  selector: 'jwplayer',
  templateUrl: './jwt-player.component.html',
  styleUrls: ['./jwt-player.component.scss'],
})
export class JwplayerComponent implements OnInit {
  private currentIndex = 0;
  private serverList: any = {
    cdnServers: [
      {
        title: 'Soccer',

        sources: [
          {
            file: 'https://player.vimeo.com/external/517077677.sd.mp4?s=6159f94e03ba45bd01955e179145cf3692864e34&profile_id=165&oauth2_token_id=57447761',
            label: '240',
          },
          {
            file: 'https://player.vimeo.com/external/517077677.sd.mp4?s=6159f94e03ba45bd01955e179145cf3692864e34&profile_id=165&oauth2_token_id=57447761',
            label: '360',
          },
          {
            file: 'https://player.vimeo.com/external/517077677.sd.mp4?s=6159f94e03ba45bd01955e179145cf3692864e34&profile_id=165&oauth2_token_id=57447761',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media6.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media5.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media5.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media5.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media4.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media4.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media4.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media3.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media3.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media3.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media2.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media2.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media2.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://media1.comwel.net/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '240',
          },
          {
            file: 'https://media1.comwel.net/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '360',
          },
          {
            file: 'https://media1.comwel.net/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '480',
          },
        ],
      },
      {
        title: 'shrek-4',

        sources: [
          {
            file: 'https://cdn.jwplayer.com/videos/GQlE6Rqd-AgylS15n.mp4',
            label: '320',
          },
          {
            file: 'https://cdn.jwplayer.com/videos/GQlE6Rqd-8LSW5F2t.mp4',
            label: '480',
          },
          {
            file: 'https://cdn.jwplayer.com/videos/GQlE6Rqd-PA9rXzRh.mp4',
            label: '720',
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit() {
    const playerJw = jwplayer('player').setup({
      title: 'Player Test',
      playlist: this.serverList.cdnServers[1],
      width: 640,
      height: 360,
      aspectratio: '16:9',
      mute: false,
      autostart: true,
      primary: 'html5',
    });

    jwplayer('player').on('setupError', (_data: any) => {
      let currentUrl = this.getNextServerLink();
      console.log(currentUrl);
      const playerJw = jwplayer('player').load(currentUrl);
    });

    jwplayer('player').on('error', (_data: any) => {
      let currentServer = this.getNextServerLink();
      console.log(currentServer);
      jwplayer('player').load(currentServer);
      jwplayer('player').play();
    });
  }

  private getNextServerLink() {
    if (this.currentIndex == this.serverList.cdnServers.length)
      this.currentIndex = 0;
    else this.currentIndex++;

    return this.serverList.cdnServers[this.currentIndex];
  }
}
