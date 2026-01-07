import dragAndDropPage from "../pages/DragAndDropPage";

const { I } = inject();

// Showcase test: Simple drag and drop
Feature("Drag and drop items");

Scenario("Open tested website", () => {
  I.amOnPage("https://www.learnaqa.info/drag-and-drop/");
});

Scenario("Drag and drop all the items one by one and verify the progress text", async () => {
  const count = await I.grabNumberOfVisibleElements(dragAndDropPage.draggableItems);

  for (let i = 1; i <= count; i++) {
    I.dragAndDrop(dragAndDropPage.getDragabbleItem(i), dragAndDropPage.dropZone);

    // Progress bar text
    I.see(`Items moved: ${i} / ${count}`);
  }

});




