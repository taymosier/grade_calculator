export function getScreenWidth(){
  let screenWidth = document.getElementsByTagName('body')[0].clientWidth;
  console.log(screenWidth);
  return screenWidth;
}

export let width = getScreenWidth();
