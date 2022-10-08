export class Assignment
{
  name!: string
  dateDeRendu!: Date
  rendu?: boolean
}

export class Menu{
  title!: String
  type!: String
  constructor(title: String, type: String){
    this.title = title
    this.type = type
  }
}
