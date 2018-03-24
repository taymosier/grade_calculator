export function getScreenWidth(){
  return document.getElementsByTagName('body')[0].clientWidth;
}

export let width = getScreenWidth();
