import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // モジュールをインポート
import { TodoComponent } from './app.component';  // コンポーネントをインポート
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoComponent],  // コンポーネントを宣言
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  // FormsModuleをNgModuleでインポート
  ],
  bootstrap: [TodoComponent]  // アプリケーションのルートコンポーネントとして使用
})
export class AppModule { }