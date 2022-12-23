//  create some  essential functions

//? get active style of an object in fabric->

export const getActiveStyle = (styleName, activeObject) => {
  if (!activeObject) {
    return "";
  }
  return activeObject.getSelectionStyles && activeObject.isEditing
    ? activeObject.getSelectionStyles()[styleName] || ""
    : activeObject[styleName] || "";
};

//? set active style->

export const setActiveStyle = () => {
  if (!activeObject) {
    return;
  }

  if (activeObject.setSelectionStyles && activeObject.isEditing) {
    let style = {};
    style[styleName] = value;
    activeObject.setSelectionStyles(style);
    activeObject.setCoords();
  } else {
    activeObject.set(styleName, value);
  }

  activeObject.setCoords();  //set the coordinates of the object like line.
  activeObject.canvas.renderAll();
};


export const getActiveProp = (name, activeObject) => {
    if (!activeObject) {return ""}
    return activeObject[name] || ""
}

export const setActiveProp = (name, value, activeObject) => {
    if (!activeObject) {
        return
    }
    activeObject.set(name, value).setCoords()
    activeObject.canvas.renderAll()
}