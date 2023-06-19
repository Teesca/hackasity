import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubnavComponent } from './subnav/subnav.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { SlotsComponent } from './slots/slots.component';
import { ReguserComponent } from './reguser/reguser.component';
import { HttpClientModule } from '@angular/common/http';
import {SityService } from './services/sity.service';
import { ReportComponent } from './report/report.component';
import { FilesComponent } from './files/files.component';
import { ReghackerComponent } from './reghacker/reghacker.component';
import { RegjudgeComponent } from './regjudge/regjudge.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { WhatsonComponent } from './whatson/whatson.component';
import { SubnavslotsComponent } from './subnavslots/subnavslots.component';
import { HackerslotsComponent } from './hackerslots/hackerslots.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidenavhackerComponent } from './sidenavhacker/sidenavhacker.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { TeamsComponent } from './teams/teams.component';
import { HackertimeslotComponent } from './hackertimeslot/hackertimeslot.component';
import { RecordingComponent } from './recording/recording.component';
import { JscoreboardComponent } from './jscoreboard/jscoreboard.component';
import { JudgesidenavComponent } from './judgesidenav/judgesidenav.component';
import { JudgeslotdisplayComponent } from './judgeslotdisplay/judgeslotdisplay.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    SubnavComponent,
    TimeslotsComponent,
    SlotsComponent,
    ReguserComponent,
    ReportComponent,
    FilesComponent,
    ReghackerComponent,
    RegjudgeComponent,
    LandingpageComponent,
    WhatsonComponent,
    SubnavslotsComponent,
    HackerslotsComponent,
    NotificationsComponent,
    SidenavhackerComponent,
    UploadfileComponent,
    TeamsComponent,
    HackertimeslotComponent,
    RecordingComponent,
    JscoreboardComponent,
    JudgesidenavComponent,
    JudgeslotdisplayComponent,
    
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LandingpageComponent},
      {path: 'report', component: ReportComponent},
      {path: 'files', component: FilesComponent},
      {path: 'whatson', component: WhatsonComponent},
      {path: 'registerusers', component:ReguserComponent},
      {path: 'timeslots', component:SlotsComponent},
      {path: 'hacker', component:ReghackerComponent},
      {path: 'judge', component:RegjudgeComponent},
      {path: 'hackerslots', component:HackerslotsComponent},
      {path: 'slots', component:SlotsComponent},
      {path: 'notifications', component:NotificationsComponent},
      {path:'sidenavhakers', component:SidenavhackerComponent},
      {path:'uploadfile', component:UploadfileComponent},
      {path:'teams', component:TeamsComponent},
      {path:'hackertimeslot', component:HackertimeslotComponent},
      {path:'scoreboard', component:JscoreboardComponent},
      {path:'slotdisplay', component:JudgeslotdisplayComponent},


    ])
  
  ],
  providers: [SityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
