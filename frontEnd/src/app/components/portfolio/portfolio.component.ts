import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    $(document).ready(function () {
      const scrollLink = $(".scroll");

      // Smooth scrolling
      scrollLink.click(function (e) {
        e.preventDefault();

        $("body,html").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top,
          },
          1000
        );
      });

      // Active link switching
      $(window).scroll(function () {
        const scrollbarLocation = $(this).scrollTop();

        if (scrollbarLocation > 1) {
          $("nav").addClass("nav1");
        } else {
          $("nav").removeClass("nav1");
        }
        scrollLink.each(function () {
          const sectionOffset = $($(this).attr("href")).offset().top - 20;

          if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
          }
        });
      });
    });
  }
}
