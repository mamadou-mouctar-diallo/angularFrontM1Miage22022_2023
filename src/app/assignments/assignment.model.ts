export class Assignment
{
  name!: string
  dateDeRendu!: Date
  rendu?: boolean
  constructor(name: string, dateDeRendu: Date, rendu: boolean){
    this.name = name
    this.dateDeRendu = dateDeRendu
    this.rendu = rendu
  }

  getName(){
    return this.name
  }
  getDateDeRendu(){
    return this.dateDeRendu
  }
  getRendu(){
    return this.rendu
  }
}
