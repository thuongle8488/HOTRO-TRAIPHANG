
export enum ShapeType {
  BOX = 'Hộp chữ nhật',
  CUBE = 'Hình lập phương',
  CYLINDER = 'Hình trụ',
  CONE = 'Hình nón',
  PYRAMID = 'Hình chóp đều'
}

export interface GeometryParams {
  a?: number;
  b?: number;
  c?: number;
  r?: number;
  h?: number;
  l?: number;
  n?: number; // for pyramid
  s?: number; // side length for pyramid
}

export interface Point2D {
  x: number;
  y: number;
}

export interface ExampleProblem {
  id: string;
  shape: ShapeType;
  title: string;
  params: GeometryParams;
  description: string;
  steps: string[];
  finalAnswer: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  shape: ShapeType;
  params: GeometryParams;
  correctAnswer: number;
  options: number[];
}
