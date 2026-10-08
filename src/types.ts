export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  speakerNotes: string;
}

export type ViewMode = 'presentation' | 'grid' | 'print';
