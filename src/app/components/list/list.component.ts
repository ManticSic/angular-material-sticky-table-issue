import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  content: string[][] = [];

  ngOnInit() {
    this.content = this.createContent(255);
  }

  private createContent(count: number): string[][] {
    const content: string [][] = [];

    for (let i = 0; i < count; i++) {
      content.push([i + '' , this.randomString()]);
    }

    return content;
  }

  private randomString(): string {
    let text = '';
    const length = this.randomNumber(8, 13);

    for (let i = 0; i < length; i++) {
      text += this.possibleChars.charAt(this.randomNumber(0, this.possibleChars.length));
    }

    return text;
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

}
