const lamps = document.getElementsByClassName("lamp");

function lampMethod(lamp) {
  switch (lamp) {
    case 1:
      lamps[0].classList.remove("nul");
      lamps[0].classList.add("red");
      break;
    case 2:
      lamps[1].classList.remove("nul");
      lamps[1].classList.add("yellow");
      break;
    case 3:
      lamps[2].classList.remove("nul");
      lamps[2].classList.add("green");
      break;
    default:
      console.log("It's not working!");
      lamps[2].classList.remove("green");
      lamps[1].classList.remove("yellow");
      lamps[0].classList.remove("red");
  }
}
