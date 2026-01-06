import dragAndDropPage from "../pages/DragAndDropPage";

const { I } = inject();

Feature("Drag and drop items");

Scenario("open my website", () => {
  I.amOnPage("https://www.learnaqa.info/drag-and-drop/");
});

Scenario("Drag and drop all the items one by one and verify the progress text", () => {
  for (let i = 1; i <= 4; i++) {
    I.dragAndDrop(dragAndDropPage.getDragabbleItem(i), dragAndDropPage.dropZone);

    // Progress bar text
    I.see(`Items moved: ${i} / 4`);
  }

});




