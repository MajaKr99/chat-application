export const channelID = "QnQIULOgLC1aKpuC";



export function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }


  export function randomName() {
    const names = [
      "snow",
      "respect",
      "money",
      "hydrant",
      "beds",
      "creator",
      "shoes",
      "grape jelly",
      "moon",
      "rice",
      "operation",
      "orange",
      "ship",
      "law",
      "self incrimination",
      "country",
      "yellowstone river",
      "underwear",
      "contradictoriness",
      "sun",
      "plastic",
      "cracker",
      "nerve",
      "laser beams",
      "hearing",
      "cable",
      "firehouse",
      "captain fantastic",
      "expansion",
      "judge",
      "touch",
      "memory",
      "kola nut tree",
      "indigestion"
    ];
  
    const name = names[Math.floor(Math.random() * names.length)];
    return name;
  }