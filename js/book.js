/**
 * Book
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

class Book {
  constructor() {
    this.elem = document.getElementById('book');
    //this.pages = this.elem.querySelector('.book__pages');
    if (!this.elem) return;

    // 要素生成
    // キャンバス
    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('book__canvas');
    this.elem.appendChild(this.canvas);
    // ページ戻る
    this.prev = document.createElement('button');
    this.prev.classList.add('book__prev');
    const prevIcon = document.createElement('div');
    prevIcon.dataset.icon = 'ei-arrow-left';
    prevIcon.dataset.size = 'm';
    this.prev.appendChild(prevIcon);
    this.elem.appendChild(this.prev);
    // ページ進む
    this.next = document.createElement('button');
    this.next.classList.add('book__next');
    const nextIcon = document.createElement('div');
    nextIcon.dataset.icon = 'ei-arrow-right';
    nextIcon.dataset.size = 'm';
    this.next.appendChild(nextIcon);
    this.elem.appendChild(this.next);
  }
}
