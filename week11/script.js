const okBtn = document.querySelector("#submitOK");
okBtn.addEventListener("click", addProduct, true);
// okBtn.removeEventListener('click', addProduct);
function addProduct(event) {
  alert(`event target: ${event.target}
        event current target : ${event.currentTarget}
        event target id: ${event.target.id}
        event phase: ${event.eventPhase}
        event type: ${event.type}`);
}

const divBtnPanel = document.querySelector("#divButtonPanel");
divBtnPanel.addEventListener(
  "click",
  (event) => {
    alert(`click on div panel was fired!,
        event target: ${event.target}
        event current target : ${event.currentTarget}
        event target id: ${event.target.id}
        event phase: ${event.eventPhase}
        event type: ${event.type}`);
  },

  true
);
