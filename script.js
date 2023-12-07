// Add your code here
var fotograf_dizisi=[
  "https://images.unsplash.com/photo-1700636417590-fbe716b6a082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODM5Ng&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1699209843348-b9694efd2c7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODg1NA&ixlib=rb-4.0.3&q=80&w=300","https://plus.unsplash.com/premium_photo-1698339161104-841f2fed237c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODkxMw&ixlib=rb-4.0.3&q=80&w=300","https://plus.unsplash.com/premium_photo-1681530700755-e8079add58ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODkwMQ&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1701551883632-f2821db546d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODk2MA&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1701174735142-7ba44dd140bf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODk1Ng&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1699081756366-7035f33d99eb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODk0OA&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1695879852340-09348c00ebe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3ODk2NA&ixlib=rb-4.0.3&q=80&w=300","https://plus.unsplash.com/premium_photo-1700955017058-e301caea0a19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTAyNg&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1699354511301-ec6be76db29f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTAyMw&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1700348306221-e46870b0b587?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTAxOA&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTAxNQ&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1699536813779-55557d54891a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTEyNA&ixlib=rb-4.0.3&q=80&w=300","https://plus.unsplash.com/premium_photo-1700135090900-98803d5c765f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTExMw&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1701717050657-3dc277736d19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTEyMg&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1699307152365-399bf53f55a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTExOA&ixlib=rb-4.0.3&q=80&w=300","https://images.unsplash.com/photo-1699147838475-b33186913610?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk3OTExNg&ixlib=rb-4.0.3&q=80&w=300"
]
function randomfotograf(){
    var randomIndex = Math.floor(Math.random() * fotograf_dizisi.length);
        return fotograf_dizisi[randomIndex];
}
function fotografyerlestirme(){
  var table=document.getElementById("fotograf_galerisi")
  for(i=0;i<5;i++){
    var row=table.insertRow(i)
    for(j=0;j<3;j++){
      var cell=row.insertCell(j)

      var img=document.createElement("img")
      img.src=randomfotograf()
       img.width = 300; 
       img.height = 300;
       cell.appendChild(img);
    }
  }
}
fotografyerlestirme()

