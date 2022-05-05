import { dragStart, dragEnd } from "./drag_element";
import { dragEnter, dragLeave, dragOver, drop } from "./drag_container";
export let drag_relevant = { value: false };

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