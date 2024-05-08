var hoten = 'Tô Thái Linh';
var MSSV = '20215414';
var groupCounter = 0;
var root = document.querySelector('.MainContent');

function addGroup() {
  // Tăng số node lên 1
  groupCounter += 1;

  //Tạo thẻ div bọc lấy node mới
  var newGroup = document.createElement('div');
  newGroup.className ='newGroup';
  //Tạo title
  var groupTitle = document.createElement('span');
  if(groupCounter === 1) {
    groupTitle.innerText = `Thông tin sinh viên_${MSSV}`;

  }
  else {
    groupTitle.innerText = `Group Item_${MSSV}`;
  }
  let textFirst = groupTitle.innerText;
  groupTitle.addEventListener('dblclick', function() {
    this.contentEditable = true;
  });
  groupTitle.addEventListener('blur', function() {
    let textChange = this.textContent;
    if(textFirst !== textChange) {
      this.innerText = `${textChange}_${MSSV}`;
    }
    
  });
  Object.assign(groupTitle.style, {
    fontFamily: 'Time New Roman',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'blue',
  });
  newGroup.appendChild(groupTitle);
  

  //Tạo nút delete
  if(groupCounter > 1) {
    var btnDelete = document.createElement('button');
    btnDelete.style.marginLeft = '5px';
    newGroup.appendChild(btnDelete);
    btnDelete.innerHTML = `
    <img src='./Contents/Images/thungrac.png'>
    `;
    btnDelete.addEventListener('click', function() {
      var confirmDelete = confirm(`(${hoten} - ${MSSV}): Bạn có chắc chắn muốn xóa group này?`);
      if(confirmDelete) {
        newGroup.remove();
        groupCounter -= 1;
      }
    });
    newGroup.appendChild(btnDelete);
  }

  //Tạo nút thêm item
  var btnAddItem = document.createElement('button');
  btnAddItem.innerText = 'Add Info Item';
  btnAddItem.classList.add( 'btnAddItem', 'btn');
  Object.assign(btnAddItem.style, {
    weight: '100px',
    height: '40px',
    marginLeft: '40px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#1987c3',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  });
  btnAddItem.addEventListener('click', function() {
    addItem(newGroup);
  });
  newGroup.appendChild(btnAddItem);

  //Tạo nút thêm group
  var btnAddGroup = document.createElement('button');
  newGroup.appendChild(btnAddGroup);
  btnAddGroup.innerText = 'Add Group Item';
  btnAddGroup.classList.add( 'btnAddGroup', 'btn');
  Object.assign(btnAddGroup.style, {
    weight: '100px',
    height: '40px',
    marginLeft: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#1987c3',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
});
  btnAddGroup.addEventListener('click', function() {
    root.appendChild(addGroup());
  });
  return newGroup;
}

function addItem(group) {
  var infoItem = document.createElement('div');
  infoItem.style.marginTop = '10px';
  group.appendChild(infoItem);

 
  var item = document.createElement('span');
  item.innerText = 'Item info Name';
  Object.assign(item.style, {
    fontFamily: 'Time New Roman',
    fontSize: '18px',
    fontWeight: 'normal',
    marginLeft: '30px',
    display: 'inline-block'
  });
  item.addEventListener('dblclick', function() {
    this.contentEditable = true;
  });
  infoItem.appendChild(item);

  //Tạo input text
  var type = prompt("Bạn muốn dữ liệu nhập vào là:\nText/Check/Radio", "");
  type = type.toUpperCase();
  var inputText;
  if(type.indexOf('CHECK') != -1) {
      type = 'checkbox';
  }
  else if(type.indexOf('RADIO') != -1) {
      type = 'radio';
  }
  else {
    type = 'text';
  }
    var inputText = document.createElement('input');
    inputText.setAttribute('type', type);
    Object.assign(inputText.style, {
      fontFamily: 'Time New Roman',
      fontSize: '18px',
      fontWeight: 'normal',
      marginLeft: '30px',
      marginBottom: '10px',
      display: 'inline-block'
    });
  infoItem.appendChild(inputText);

  //Tao nut delete
  var btnDelete = document.createElement('button');
  btnDelete.innerHTML = `<img src='./Contents/Images/thungrac.png'>`;
  Object.assign(btnDelete.style, {
    marginLeft: '10px'
  });
  btnDelete.addEventListener('click', function() {
    var confirmDelete = confirm(`(${hoten} - ${MSSV}): Bạn có chắc chắn muốn xóa thông tin này?`);
    if(confirmDelete) {
      infoItem.remove();
    }
    
  });
  infoItem.appendChild(btnDelete);

  
} 

//console.log(root);

var firstNode = addGroup();
root.appendChild(firstNode);

document.getElementById('btnPDF').addEventListener('click', function() {
    const body = $('.MainContent')[0];
    html2canvas(body, {
        useCORS: true,
        allowTaint: true,
        onrendered: function (canvas) {
            let data = canvas.toDataURL();
            let docDefinition = {
                content: [{
                    image: data,
                    width: 505
                }]
            };
            pdfMake.createPdf(docDefinition).download("Tô Thái Linh - 20215414.pdf");
        }
    });
}

);