function doesTriangleFit(triangleArray1, triangleArray2) {

  const triangle1side1 = triangleArray1[0];
  const triangle1side2 = triangleArray1[1];
  const triangle1side3 = triangleArray1[2];

  const triangle2side1 = triangleArray2[0];
  const triangle2side2 = triangleArray2[1];
  const triangle2side3 = triangleArray2[2];

  // A triangle is valid if sum of its two sides is greater than the third side.

  if(triangle1side1 + triangle1side2 <= triangle1side3 || triangle1side1 + triangle1side3 <= triangle1side2 || 
     triangle1side2 + triangle1side3 <= triangle1side1 || triangle2side1 + triangle2side2 <= triangle2side3 || 
     triangle2side1 + triangle2side3 <= triangle2side2 || triangle2side2 + triangle2side3 <= triangle1side1) {
    return console.log(false);
  }

  // if every one of the sides from 1st triangle is <= than equivalent side from 2nd triangle then is can fit

  for(let i = 0; i < 3; i++) {
    if(triangleArray1[i] <= triangleArray2[i]) {
      return console.log(true);
    }
  }
}

doesTriangleFit([1, 1, 1], [1, 1, 1]);

doesTriangleFit([1, 1, 1], [2, 2, 2]);

doesTriangleFit([1, 2, 3], [1, 2, 2]);

doesTriangleFit([1, 2, 4], [1, 2, 6]);