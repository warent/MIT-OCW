import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DepartmentPage } from '../pages/department/department';
import { CourseHomePage } from '../pages/course-home/course-home';
import { LectureVideosPage } from '../pages/lecture-videos/lecture-videos';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    DepartmentPage,
    TabsPage,
    CourseHomePage,
    LectureVideosPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DepartmentPage,
    CourseHomePage,
    LectureVideosPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
