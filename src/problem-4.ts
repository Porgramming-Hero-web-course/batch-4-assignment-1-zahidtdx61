{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (element: Circle | Rectangle): number => {
    let area = 0;

    if (element.shape === "circle") {
      area = 3.1416 * element.radius * element.radius;
    } else if ((element.shape = "rectangle")) {
      area = element.height * element.width;
    }

    return area;
  };
}
