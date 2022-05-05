import { drag_relevant } from "./assign_event_listeners";

export function dragEnter(this: HTMLElement, ev: DragEvent): void {
  ev.preventDefault();
  if(drag_relevant.value)
  {
    this.classList.add("drag-over");
  }
}

export function dragOver(this: HTMLElement, ev: DragEvent) {
  ev.preventDefault();
}

export function dragLeave(this: HTMLElement, ev: DragEvent) {
  if(drag_relevant.value)
  {
    this.classList.remove("drag-over");
  }
}

export function drop(this: HTMLElement, ev: DragEvent) {
  if(drag_relevant.value)
  {
      this.classList.remove("drag-over");
      const id = ev.dataTransfer?.getData("text/plain");
      if (id) 
      {
        const draggable = document.getElementById(id);
        if (draggable)  
        {
          this.appendChild(draggable);
        }
      }
  }
}


