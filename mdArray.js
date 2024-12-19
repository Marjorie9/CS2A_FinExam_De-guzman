const originalArray = [
    ["Genevieve", "Juan", "Luna", "Gabriel"],
    [24, 65, 21, 5]
  ];
  
  const restructuredArray = originalArray[0].map((name, index) => {
    return [name, originalArray[1][index]];
  });
  
  console.log("Restructured Multi-Dimensional Array:");
  restructuredArray.forEach(subArray => {
    console.log(`Name: ${subArray[0]}, Age: ${subArray[1]}`);
  });