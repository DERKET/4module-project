var Pipe = /** @class */ (function () {
    function Pipe(fNameOfFactory, fDiametre, fMaterial, fDefect) {
        this.NameOfFactory = fNameOfFactory;
        this.Diametre = fDiametre;
        this.Material = fMaterial;
        this.Defect = fDefect;
    }
    return Pipe;
}());
function CreatePipe() {
    var namefactory = document.getElementById('inputnamefactory').value;
    var namediametr = document.getElementById('inputdiametr').value;
    var namematerial = document.getElementById('inputmaterial').value;
    if (namefactory == "" || namediametr == "" || namematerial == "") {
        alert("У вас есть пустая строка");
    }
}
