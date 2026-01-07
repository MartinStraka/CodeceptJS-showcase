export = {   
  getDragabbleItem(position): CodeceptJS.Locator { 
    return locate(`#item-${position}`);
  },

  draggableItems: locate("div[draggable='true']"),
  dropZone: locate("#drop-zone"),

};