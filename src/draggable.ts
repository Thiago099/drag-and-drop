let dragRelevant = false

function dragStart<T extends HTMLElement>(this: T, ev: DragEvent): void {
  ev.dataTransfer?.setData("text/plain", this.id);
  setTimeout(() => {
    this.classList.add("hide");
  });
  dragRelevant = true
}

function dragEnter<T extends HTMLElement>(this: T, ev: DragEvent): void {
  ev.preventDefault();
  if(dragRelevant)
  {
    this.classList.add("drag-over");
  }
}

function dragOver<T extends HTMLElement>(this: T, ev: DragEvent) {
  ev.preventDefault();
  if(dragRelevant)
  {
    this.classList.add("drag-over");
  }
}

function dragLeave<T extends HTMLElement>(this: T, ev: DragEvent) {
  if(dragRelevant)
  {
    this.classList.remove("drag-over");
  }
}

function drop<T extends HTMLElement>(this: T, ev: DragEvent) {
  this.classList.remove("drag-over");
  const id = ev.dataTransfer?.getData("text/plain");
  if (id) {
    const draggable = document.getElementById(id);
    if (draggable) {
      this.appendChild(draggable);
    }
  }
}
function dragEnd<T extends HTMLElement>(this:T, ev: DragEvent) {
  this.classList.remove("hide");
  dragRelevant = false
}

const item = document.querySelector<HTMLElement>(".item");
if (item) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
}

const boxes = document.querySelectorAll<HTMLElement>(".box");
if (boxes) {
  boxes.forEach((box) => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });
}
