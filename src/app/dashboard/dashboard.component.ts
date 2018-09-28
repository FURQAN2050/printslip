import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 placeHolderImage = 'data:image/jpeg;base64,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'
   denimbarcode='data:image/jpeg;base64,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'
     i=1;
  dataList : any[];
  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
   }

  ngOnInit() {
  }
  onChange(files: File[]){
    
    if(files[0]){
      // console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          // console.log(result);
          this.dataList = result.data;
          console.log('my data',this.dataList);
        }
      });
    }
  }
  printSlip(record){
    console.log('slip for print is ',record);
    
    
    let month :number=(new Date().getMonth()+1);
    let myDate: any = new Date().getDate().toString()+'/'+month+'/'+new Date().getFullYear().toString();
     let myTime :any =new Date().getHours().toString()+':'+new Date().getMinutes().toString();
     
    //  console.log(myDate);
    var dd = { 
      content: [
          {
            style: 'header',
             text:"Customer Slip"
          },
          {
            alignment:'center',
               table: {  
                 widths: [65, 65, 65,65,65,65,65],
                 heights:[10],
                 body: [
                   //headers
                 [ {image: this.placeHolderImage,alignment: 'left',width:140,height: 50,rowSpan:3,colSpan:2},'',{image: this.denimbarcode,alignment: 'center',width:50,height: 50,rowSpan:3},{text:'Date',bold:true},myDate,{text:'Time',bold:true},myTime],
                  ['1', '2', '3',{text:'Service',bold:true},{text:record.service,bold:true},'',''],
                  ['1', '2', '3',{text:'Origin',bold:true},'KARACHI',{text:'Destination',bold:true},{text:'KARACHI',bold:true}],
                   [{text: 'Shipper : The Denim Factory',colSpan:2, alignment: 'left',bold:true ,fontSize:10},  '', {text: 'Email : info@thedenimfactory.com',colSpan:2, alignment: 'left',bold:true ,fontSize:9},'',{text: 'Consignee', alignment: 'center'},{text: record.name, alignment: 'left',colSpan:2},''],
                  [{text: '\n \n \n' ,rowSpan:3,colSpan:4, alignment: 'left'}, '2', '3','4',{text: record.address ,rowSpan:3,colSpan:3, alignment: 'left'},'',''], 
                  ['1', '2','3','4','5','6','7'],
                  ['1', '2','3','4','5','6','7'],
                  [{text: 'Pieces', alignment: 'center' ,bold:true}, record.pieces, {text: 'Weight', alignment: 'center' ,bold:true},record.weight,{text: 'Fragile', alignment: 'center' ,bold:true},record.fragile,''],
                  [{text: 'Declared insurance value',colSpan:3, alignment: 'center',bold:true}, '2', '3',{text: record.insurance, alignment: 'center'},{text: 'Amount', alignment: 'left',bold:true},{text: 'Rs:'+record.amount,colSpan:2, alignment: 'left',bold:true},'7'],
                  [{text: 'Product detail',colSpan:2, alignment: 'left',bold:true}, '2', {text: record.detail,colSpan:5, alignment: 'left'},'4','5','6','7'],
                  [{text: 'Remarks',colSpan:2, alignment: 'left' ,bold:true}, '2', {text: record.remarks,colSpan:5, alignment: 'left'},'4','5','6','7'],
                  [{text: 'Customer Ref.#',colSpan:2, alignment: 'left',bold:true}, '2',{text: record.refno,colSpan:5, alignment: 'left',bold:true},'4','5','6','7'],
                  [{text: ' Please Donot Accept ,if shipment is not intact.Before Paying the Cod, shipment can not be open',bold:true,colSpan:7,fontSize:10, alignment: 'center'}, '2','3','4','5','6','7'],
                 ]
               }
             }
      
      
      ],
      styles: {
        header: {
          fontSize: 15,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment :'center',
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
    
    
    };

    pdfMake.createPdf(dd).print();
    this.i++;
    if(this.i>50000)
        this.i=0;
    
  }
  printall(dataList){
  console.log('in print function ',dataList);
  let month :number=(new Date().getMonth()+1);
  let myDate: any = new Date().getDate().toString()+'/'+month+'/'+new Date().getFullYear().toString();
   let myTime :any =new Date().getHours().toString()+':'+new Date().getMinutes().toString();
   var content=[];   
     for(var i=0;i<dataList.length;i++){
     let record=dataList[i];
     console.log(record);

     var slip=[
      // {
      //   style: 'header',
      //    text:"Customer Slip"
      // },
      {
     alignment:'center',
        table: {  
          widths: [65, 65, 65,65,65,65,65],
          heights:[10],
          body: [
            //headers
          [ {image: this.placeHolderImage,alignment: 'left',width:140,height: 50,rowSpan:3,colSpan:2},'',{image: this.denimbarcode,alignment: 'center',width:50,height: 50,rowSpan:3},{text:'Date',bold:true},myDate,{text:'Time',bold:true},myTime],
           ['1', '2', '3',{text:'Service',bold:true},{text:record.service,bold:true},'',''],
           ['1', '2', '3',{text:'Origin',bold:true},'KARACHI',{text:'Destination',bold:true},{text:'KARACHI',bold:true}],
            [{text: 'Shipper : The Denim Factory',colSpan:2, alignment: 'left',bold:true ,fontSize:10},  '', {text: 'Email : info@thedenimfactory.com',colSpan:2, alignment: 'left',bold:true ,fontSize:9},'',{text: 'Consignee', alignment: 'center'},{text: record.name, alignment: 'left',colSpan:2},''],
           [{text: '\n \n \n' ,rowSpan:3,colSpan:4, alignment: 'left'}, '2', '3','4',{text: record.address ,rowSpan:3,colSpan:3, alignment: 'left'},'',''], 
           ['1', '2','3','4','5','6','7'],
           ['1', '2','3','4','5','6','7'],
           [{text: 'Pieces', alignment: 'center' ,bold:true}, record.pieces, {text: 'Weight', alignment: 'center' ,bold:true},record.weight,{text: 'Fragile', alignment: 'center' ,bold:true},record.fragile,''],
           [{text: 'Declared insurance value',colSpan:3, alignment: 'center',bold:true}, '2', '3',{text: record.insurance, alignment: 'center'},{text: 'Amount', alignment: 'left',bold:true},{text: 'Rs:'+record.amount,colSpan:2, alignment: 'left',bold:true},'7'],
           [{text: 'Product detail',colSpan:2, alignment: 'left',bold:true}, '2', {text: record.detail,colSpan:5, alignment: 'left'},'4','5','6','7'],
           [{text: 'Remarks',colSpan:2, alignment: 'left' ,bold:true}, '2', {text: record.remarks,colSpan:5, alignment: 'left'},'4','5','6','7'],
           [{text: 'Customer Ref.#',colSpan:2, alignment: 'left',bold:true}, '2',{text: record.refno,colSpan:5, alignment: 'left',bold:true},'4','5','6','7'],
           [{text: ' Please Donot Accept ,if shipment is not intact.Before Paying the Cod, shipment can not be open',bold:true,colSpan:7,fontSize:10, alignment: 'center'}, '2','3','4','5','6','7'],
          ]
        }
      },{
        text:'\n \n \n \n \n \n \n \n \n \n'
      }
  
  
  ]

console.log('number',i);
  content.push(slip);
  this.i++;
  if(this.i>50000)
      this.i=0;
  }

  var dd = { 
    content: content,
    styles: {
      header: {
        fontSize: 25,
        bold: true,
        margin: [0, 0, 0, 10],
        alignment :'center',
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
  
  };
  console.log(i);
  pdfMake.createPdf(dd).print();
  

  }
  
  
}
