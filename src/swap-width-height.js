import sketch from 'sketch';
// documentation: https://developer.sketchapp.com/reference/api/

const doc = sketch.getSelectedDocument();
const selectedLayers = doc.selectedLayers;
const selectedCount = selectedLayers.length;

export default function() {
  if (selectedCount !== 1) {
    sketch.UI.message(`❌ Please select one layer.`);
  } else if (selectedLayers.layers[0].locked === true) {
    sketch.UI.message(`🔒 The layer is locked.`);
  } else {
    let myLayer = selectedLayers.layers[0];
    let myLayerWidth = myLayer.frame.width;
    let myLayerHeight = myLayer.frame.height;
    myLayer.frame.width = myLayerHeight;
    myLayer.frame.height = myLayerWidth;
    sketch.UI.message('Swapped 🤙');
  }
}
