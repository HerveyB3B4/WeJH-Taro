export interface Lesson {
  campus: string;
  classID: string;
  className: string;
  credits: string;
  id: string;
  lessonHours: string;
  lessonName: string;
  lessonPlace: string;
  placeID: string;
  /** 课程从第几节到第几节 */
  sections: string;
  teacherName: string;
  type: string;
  /** 第几周 */
  week: string;
  /** 周几 */
  weekday: string;
  /** 标记冲突课程  */
  mark?: boolean;
  /** 课程颜色 */
  color?: string;
}
export interface PracticeLesson {
  className: string;
  credits: string;
  lessonName: string;
  teacherName: string;
}
