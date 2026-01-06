export = {   
  getDragabbleItem(position): CodeceptJS.Locator { 
    return locate(`#item-${position}`);
  },

  dropZone: locate("#drop-zone"),

};