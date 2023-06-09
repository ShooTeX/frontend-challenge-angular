export function hasClass(classname: string, element: HTMLElement) {
  return element.classList.contains(classname);
}
export function addClass(classname: string, element: HTMLElement) {
  const cn = element.className ?? '';

  if (cn.includes(classname)) {
    return;
  }

  if (cn != '') {
    classname = ' ' + classname;
  }

  element.className = cn + classname;
}

export function removeClass(classname: string, element: HTMLElement) {
  element.className = element.className.replaceAll(
    new RegExp(classname, 'g'),
    ''
  );
}
