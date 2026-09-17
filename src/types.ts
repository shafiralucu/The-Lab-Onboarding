export interface SlideItem {
  id: number;
  slideNumber: number;
  totalSlides: number;
  title: string;
  tag: string;
  subtitle?: string;
  type: 
    | 'credentials'
    | 'probation'
    | 'understanding-check'
    | 'lesson-plan-page1'
    | 'lesson-plan-page2'
    | 'roadmap'
    | 'pacing'
    | 'training-flow'
    | 'protocol'
    | 'roleplay'
    | 'independence'
    | 'kpi-1-2'
    | 'kpi-3-4'
    | 'teaching-standards'
    | 'summary'
    | 'quiz'
    | 'graduation';
}
