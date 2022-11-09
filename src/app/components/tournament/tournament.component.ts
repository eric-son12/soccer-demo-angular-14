import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  private navParams: any;
  public tournamentData: any;
  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let state = this.router.getCurrentNavigation()?.extras?.state || history.state;
    this.navParams = state || null;
    if (this.navParams && this.navParams?.id) {
      this.getTournamentData(this.navParams.id);
    }
    console.log('SLUG', state);
  }

  getTournamentData(id: any) {
    this.matchService.getTournament(id)
    .subscribe((rs) => {
      if (rs) {
        this.tournamentData = rs?.data;
      }
    })
  }

}
