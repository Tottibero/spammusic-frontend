import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']

})
export class PagesComponent implements OnInit {
  title = 'Spam-Music';
  ngOnInit() {


    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });

  }

}

