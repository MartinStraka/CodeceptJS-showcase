import dragAndDropPage from "../pages/DragAndDropPage";

const { I } = inject();

// Showcase test: Simple drag and drop
Feature("Drag and drop items");

Scenario("Open tested website", () => {
  I.amOnPage("https://www.learnaqa.info/drag-and-drop/");
});

Scenario("Drag and drop all the items one by one and verify the progress text", () => {
  for (let i = 1; i <= 4; i++) {
    I.dragAndDrop(dragAndDropPage.getDragabbleItem(i), dragAndDropPage.dropZone);

    // Progress bar text
    I.see(`Items moved: ${i} / 4`);
  }

});




