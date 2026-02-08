
export const calculateBoxShortestPath = (a: number, b: number, c: number) => {
  // Assuming A at (0,0,0) and B at (a,b,c)
  // Possible paths crossing 2 faces:
  // 1. Through front/side then top: (a+b)^2 + c^2
  // 2. Through front/side then right: (a+c)^2 + b^2
  // 3. Through bottom then right: (b+c)^2 + a^2
  const d1 = Math.sqrt(Math.pow(a + b, 2) + Math.pow(c, 2));
  const d2 = Math.sqrt(Math.pow(a + c, 2) + Math.pow(b, 2));
  const d3 = Math.sqrt(Math.pow(b + c, 2) + Math.pow(a, 2));
  
  return {
    paths: [
      { label: 'Qua mặt bên và mặt trên', value: d1 },
      { label: 'Qua mặt trước và mặt phải', value: d2 },
      { label: 'Qua mặt đáy và mặt bên', value: d3 }
    ],
    min: Math.min(d1, d2, d3)
  };
};

export const calculateCylinderPath = (r: number, h: number, rotations: number = 1) => {
  // Shortest path around the cylinder for N rotations
  const circumference = 2 * Math.PI * r;
  const width = circumference * rotations;
  return Math.sqrt(Math.pow(width, 2) + Math.pow(h, 2));
};

export const calculateConePath = (r: number, l: number, angleFraction: number = 1) => {
  // Path on the cone surface (sector chord)
  // angle in radians = (2 * PI * r / l) * angleFraction
  const theta = (2 * Math.PI * r / l) * angleFraction;
  // Using law of cosines: d^2 = l^2 + l^2 - 2*l*l*cos(theta)
  // Simplified: d = l * sqrt(2 - 2cos(theta)) = 2 * l * sin(theta/2)
  return 2 * l * Math.sin(theta / 2);
};
