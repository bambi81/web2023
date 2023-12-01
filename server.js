var express = require("express");
var bodyParser = require("body-parser");

server = express();
var fs = require("fs");

server.use(express.static("sealook"));//web root
//server.use(express.static("md110"));//web root
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

const formidable  = require('formidable')
var DB = require("nedb-promises");//資料庫套件
var ContactDB = DB.create("contact.db");//留言板儲存
var PortfolioDB = DB.create("portfolio.db");
//  PortfolioDB.insert([
//     {href: "#portfolioModal1",imgSrc:"img/000.jpg",title:"000 幽靈豹",title2:"是一隻透明看不到的海豹，出場有幽靈bgm"},
//         {href: "#portfolioModal2",imgSrc:"img/001.jpg",title:"001 略略豹",title2:"會一直略略略和逗鳥跟吵其他海豹睡覺"},
//         {href: "#portfolioModal3",imgSrc:"img/002.jpg",title:"002 柴犬豹",title2:"以柴犬梗圖為原型，有豆豆眉，喜歡跳舞"},
//         {href: "#portfolioModal4",imgSrc:"img/003031.jpg",title:"003&031 不靠普豹爸&可憐兒子",title2:"豹爸常坑兒子，有父愛但不多;豹兒子是獨立堅強的孩子"},
//          {href: "#portfolioModal5",imgSrc:"img/004.jpg",title:"004 假髮豹",title2:"會唱歌兼用海草做假髮"},
//         {href: "#portfolioModal6",imgSrc:"img/005.jpg",title:"005 鼻涕豹",title2:"比一般豹體溫還低，常流鼻涕和靠著別人睡覺"},
//  ])
 
 
//var sharp=
server.set("view engine", "ejs");
server.set("views", __dirname+"/views");


server.get("/contact", function(req, res){
    //res.send("");
    // res.redirect("https:/md.nutc.edu.tw");//回傳至某網頁

    
}); 

server.get("/service", function(req, res){

    Services = [
        { icon: "fa-shopping-cart", title: "E-Commerce", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat necessitatibus corporis nulla, in ex velit recusandae obcaecati maiores, doloremque quisquam similique, tempora aspernatur eligendi delectus! Rem." },
        { icon: "fa-laptop", title: "Responsive Design", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime qua architecto quo inventore harum ex magni, dicta impedit." },
        { icon: "fa-lock", title: "Web Security", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit." }
    ]
    res.send(Services);
})

server.get("/portfolio", function(req, res){
    
    // PortfolioDB.find({}).then(results => {
    //     if(results !=null){
    //         res.send(results);
    //     }else{
    //         res.send("Error!")
    //     }
    // }) 
    
    var portfolio=[
         {href: "#portfolioModal1",imgSrc:"img/000.jpg",title:"000 幽靈豹",title2:"是一隻透明看不到的海豹，出場有幽靈bgm"},
        {href: "#portfolioModal2",imgSrc:"img/001.jpg",title:"001 略略豹",title2:"會一直略略略和逗鳥跟吵其他海豹睡覺"},
         {href: "#portfolioModal3",imgSrc:"img/002.jpg",title:"002 柴犬豹",title2:"以柴犬梗圖為原型，有豆豆眉，喜歡跳舞"},
        {href: "#portfolioModal4",imgSrc:"img/003031.jpg",title:"003&031 不靠普豹爸&可憐兒子",title2:"豹爸常坑兒子，有父愛但不多;豹兒子是獨立堅強的孩子"},
         {href: "#portfolioModal5",imgSrc:"img/004.jpg",title:"004 假髮豹",title2:"會唱歌兼用海草做假髮"},
        {href: "#portfolioModal6",imgSrc:"img/005.jpg",title:"005 鼻涕豹",title2:"比一般豹體溫還低，常流鼻涕和靠著別人睡覺"},
         {href: "#portfolioModal1",imgSrc:"img/006.jpg",title:"006 Asmr大師豹",title2:"感性、會Asmr，曾誤以為晚上有鯨魚叫聲，結果是045的屁聲"},
        {href: "#portfolioModal1",imgSrc:"img/010.jpg",title:"010 DJ豹",title2:"原型為環海豹，會DJ，常跟002搭檔表演"},
        {href: "#portfolioModal1",imgSrc:"img/011.jpg",title:"011 哈欠豹",title2:"常失眠、打哈欠(哈欠會傳染)需靠006的Asmr入眠"},
        {href: "#portfolioModal1",imgSrc:"img/012015.jpg",title:"012&015 吊胃口豹女友&怨種豹",title2:"012只想吃015的魚；015"},
        {href: "#portfolioModal1",imgSrc:"img/013.jpg",title:"013 街舞豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/016.jpg",title:"016 ㄟ歐豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/017.jpg",title:"017 指揮家豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/018.jpg",title:"018 香香豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/023.jpg",title:"023 社恐豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/026.jpg",title:"026 彈簧豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/027.jpg",title:"027 愛與和平豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/028.jpg",title:"028 Drama queen豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/029.jpg",title:"029 合唱豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/030.jpg",title:"030 氣勢豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/032.jpg",title:"032 笑笑豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/035.jpg",title:"035 靠普豹媽",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/038.jpg",title:"038 狂吃豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/040.jpg",title:"040 冰洞唱歌豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/041042043.jpg",title:"041&042&043 小海豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/044.jpg",title:"044 強運豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/045.jpg",title:"045 臭屁豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/046.jpg",title:"046 睡到不省人事豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/048.jpg",title:"048 樹懶豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/088.jpg",title:"088 賽車豹",title2:"Graphic Design"},
        {href: "#portfolioModal1",imgSrc:"img/BEAR.jpg",title:"北極熊",title2:"Graphic Design"}
    ]
    res.send(portfolio);

       PortfolioDB.find({}).then(results => {//新增東西
         if(results !=null){
            res.send(results);
        }else{
              res.send("Error!")
        }
      }) 

})


 
server.post("/contact", function(req, res){
    console.log(req.body);
    ContactDB.insert(req.body);
     res.send();
    res.redirect("/index.html");

    //res.send("");
    //var form = formidable({maxFileSize: 200*1024});
  
})


server.listen(5500, function(){
    console.log("Server is running at port 8000!")
})