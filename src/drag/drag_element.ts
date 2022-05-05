import { drag_relevant } from "./assign_event_listeners";

export function dragStart(this: HTMLElement, ev: DragEvent): void 
{
    ev.dataTransfer?.setData("text/plain", this.id);
    setTimeout(() => 
    {
        this.classList.add("hide");
    });
    drag_relevant.value = true
}
export function dragEnd(this:T, ev: DragEvent) 
{
    this.classList.remove("hide");
    drag_relevant.value = false
}