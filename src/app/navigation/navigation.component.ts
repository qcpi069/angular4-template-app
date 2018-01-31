import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  lastNavigation: String;
  recentNavigation: String;

  constructor() { }

  ngOnInit() {
  }

  navigateHome(){
      //implement functionality to display home contents here
      this.logNavigationHistory("Home");
      
  }

  navigateToFinder(){
    //implement functionality to display finder contents here
    this.logNavigationHistory("Finder");
  }

  private logNavigationHistory(currentNavigation: String){
    //log current and previous navigation history -- can also build dynamic call tree for 'bread-crumbs'
    this.lastNavigation = new String(this.recentNavigation);
    this.recentNavigation = new String(currentNavigation);
    console.log("navigating to "+currentNavigation+" previous navigation was "+this.lastNavigation);
  }

}
