class Pipe {
    NameOfFactory: string
    Diametre: number
    Material: string
    Defect: boolean

    constructor (fNameOfFactory: string, fDiametre: number, fMaterial: string, fDefect: boolean){
        this.NameOfFactory = fNameOfFactory
        this.Diametre = fDiametre
        this.Material = fMaterial
        this.Defect = fDefect   
    }
}
function CreatePipe (  ) : void {
 let namefactory = (<HTMLSelectElement>document.getElementById('inputnamefactory')).value
 let namediametr  = (<HTMLSelectElement>document.getElementById('inputdiametr')).value
 let namematerial =  (<HTMLSelectElement>document.getElementById('inputmaterial')).value
 
 if(namefactory ==""|| namediametr ==""|| namematerial ==""){
    alert("У вас есть пустая строка")
}
 
}
    

