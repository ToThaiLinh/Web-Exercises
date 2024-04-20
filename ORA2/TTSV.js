const TTSV_default = {
    studentHoTen : "Tô Thái Linh", 
    studentEmail : "linh.tt215414@sis.hust.edu.vn",
    studentKhoa : "Trường Công nghệ thông tin và Truyền thông",
    studentMSSV : '20215414',
    studentKhoaHoc: '66',
    studentLop: "Khoa học máy tính 02",
    studentGioiTinh: 'Nam',
    studentNamVaoTruong: "2021",
    studentTinhTrangHocTap: "Học",
    studentChuongTrinh: "Khoa học Máy tính 2021",
    studentBacDaoTao: "Đại học đại trà",
    srcImage: "./Contents/Images/person.png"
}

const TTSV_new = {
    studentHoTen : "Tô Thái Linh", 
    studentEmail : "linh.tt215414@sis.hust.edu.vn",
    studentKhoa : "Trường Công nghệ thông tin và Truyền thông",
    studentMSSV : '20215414',
    studentKhoaHoc: '66',
    studentLop: "Khoa học máy tính 02",
    studentGioiTinh: 'Nam',
    studentNamVaoTruong: "2021",
    studentTinhTrangHocTap: "Học",
    studentChuongTrinh: "Khoa học Máy tính 2021",
    studentBacDaoTao: "Đại học đại trà",
    srcImage: "./Contents/Images/person.png"
}


            
function createBG() {
    document.getElementById("HoTen").innerHTML = TTSV_new["studentHoTen"];
    document.getElementById("MSSV").innerHTML = TTSV_new["studentMSSV"];
    document.getElementById("NamVaoTruong").innerHTML = TTSV_new["studentNamVaoTruong"];
    document.getElementById("BacDaoTao").innerHTML = TTSV_new["studentBacDaoTao"];
    document.getElementById("ChuongTrinh").innerHTML = TTSV_new["studentChuongTrinh"];
    document.getElementById("Khoa").innerHTML = TTSV_new["studentKhoa"];
    document.getElementById("TinhTrangHocTap").innerHTML = TTSV_new["studentTinhTrangHocTap"];
    document.getElementById("GioiTinh").innerHTML = TTSV_new["studentGioiTinh"];
    document.getElementById("Lop").innerHTML = TTSV_new["studentLop"];
    document.getElementById("KhoaHoc").innerHTML = TTSV_new["studentKhoaHoc"];
    document.getElementById("Email").innerHTML = TTSV_new["studentEmail"];
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = TTSV_new["srcImage"];
}
createBG();

var srcImage_new;
function chooseFile(fileInput) {
    if(fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        var imagePreview = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage");

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            srcImage_new = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

document.getElementById("fileInput").addEventListener('change', function() {
    chooseFile(this)});


function editInfor() {
    addButton.style.display = 'block';
    fileInput.style.display = 'block';

    document.getElementById("HoTen").innerHTML = `<input type="text" id="editName" name="editName" value="${TTSV_new.studentHoTen}" />`;
    document.getElementById("NamVaoTruong").innerHTML = `<input type="text" id="editNamVaoTruong" name="editNamVaoTruong" value="${TTSV_new.studentNamVaoTruong}" />`;
    document.getElementById("BacDaoTao").innerHTML = 
    `<select id="editBacDaoTao" name="editBacDaoTao">
    <option value="Đại học đại trà">Đại học đại trà</option>
    <option value="Chương trình tiên tiến">Chương trình tiên tiến</option>
    <option value="Chương trình tài năng">Chương trình tài năng</option>
    <option value="Khác">Khác</option>' +
    </select>`;
    document.querySelector(`option[value="${TTSV_new.studentBacDaoTao}"]`).selected = true;
    document.getElementById("ChuongTrinh").innerHTML = `<input type="text" id="editChuongTrinh" name="editChuongTrinh" value="${TTSV_new.studentChuongTrinh}" />`;
    document.getElementById("Khoa").innerHTML = 
    `<select id="editKhoa">
    <option value="Trường Công nghệ thông tin và Truyền thông">Trường Công nghệ thông tin và Truyền thông</option>
    <option value="Trường Cơ khí" >Trường Cơ khí</option>
    <option value="Trường Điện - Điện tử" >Trường Điện - Điện tử</option>
    <option value="Trường Hóa và Khoa học sự sống">Trường Hoá và Khoa học sự sống</option>
    <option value="Trường Vật Liệu">Trường Vật liệu</option>
    <option value="Khoa Toán - Tin" >Khoa Toán - Tin</option>
    <option value="Khoa vật lý Kỹ thuật" >Khoa Vật lý Kỹ thuật</option>
    <option value="Viện kinh tế và Quản lý" >Viện Kinh tế và Quản lý</option>
    <option value="Khoa Ngoại ngữ" >Khoa Ngoại ngữ</option>
    <option value="Khoa Khoa học và Công nghệ Giáo dục" >Khoa Khoa học và Công nghệ Giáo dục</option>
    </select>`;
    document.querySelector(`option[value="${TTSV_new.studentKhoa}"]`).selected = true;
    document.getElementById("TinhTrangHocTap").innerHTML = 
    `<select id="editTinhTrangHocTap" name="editTinhTrangHocTap">
    <option value="Học">Học</option>
    <option value="Thôi học">Thôi học</option>
    <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
    </select>`;
    document.querySelector(`option[value="${TTSV_new.studentTinhTrangHocTap}"]`).selected = true;
    document.getElementById("GioiTinh").innerHTML = 
    `<form style="font-weight: normal !important;">
    <input type="radio" id="nam" name="gioi_tinh" value="Nam">
    <label for="nam" style="margin-right: 10px;">Name</label>
    <input type="radio" id="nu" name="gioi_tinh" value="Nữ">
    <label for="nu" style="margin-right: 10px;">Nữ</label>
    <input type="radio" id="khac" name="gioi_tinh" value="Khác">
    <label for="khac" style="margin: 10px;">Khác</label>
    </form>`
    document.querySelector(`input[value="${TTSV_new.studentGioiTinh}"]`).checked = true;
    document.getElementById("Lop").innerHTML = `<input type="text" id="editLop" name="editLop" value="${TTSV_new.studentLop}" />`;
    document.getElementById("KhoaHoc").innerHTML = `<input type="text" id="editKhoaHoc" name="editKhoaHoc" value="${TTSV_new.studentKhoaHoc}" />`;
    document.getElementById("Email").innerHTML = `<input type="text" id="editEmail" name="editEmail" value="${TTSV_new.studentEmail}" />`;
}

function functionOK() {
    TTSV_new.studentHoTen = document.getElementById("editName").value;
    TTSV_new.studentNamVaoTruong = document.getElementById("editNamVaoTruong").value;
    TTSV_new.studentBacDaoTao = document.getElementById("editBacDaoTao").value;
    TTSV_new.studentChuongTrinh = document.getElementById("editChuongTrinh").value;
    TTSV_new.studentKhoa = document.getElementById("editKhoa").value;
    TTSV_new.studentTinhTrangHocTap = document.getElementById("editTinhTrangHocTap").value;
    TTSV_new.studentLop = document.getElementById("editLop").value;
    TTSV_new.studentKhoaHoc = document.getElementById("editKhoaHoc").value;
    TTSV_new.studentEmail = document.getElementById("editEmail").value;
    TTSV_new.srcImage = srcImage_new;

    TTSV_new.studentGioiTinh = document.querySelector("input[name='gioi_tinh']:checked").value;

    addButton.style.display = 'none';
    fileInput.style.display = 'none';
    createBG();
    console.log(TTSV_new);
}


function functionReset() {
    Object.assign(TTSV_new, TTSV_default);

    document.getElementById("HoTen").innerHTML = TTSV_default["studentHoTen"];
    document.getElementById("MSSV").innerHTML = TTSV_default["studentMSSV"];
    document.getElementById("NamVaoTruong").innerHTML = TTSV_default["studentNamVaoTruong"];
    document.getElementById("BacDaoTao").innerHTML = TTSV_default["studentBacDaoTao"];
    document.getElementById("ChuongTrinh").innerHTML = TTSV_default["studentChuongTrinh"];
    document.getElementById("Khoa").innerHTML = TTSV_default["studentKhoa"];
    document.getElementById("TinhTrangHocTap").innerHTML = TTSV_default["studentTinhTrangHocTap"];
    document.getElementById("GioiTinh").innerHTML = TTSV_default["studentGioiTinh"];
    document.getElementById("Lop").innerHTML = TTSV_default["studentLop"];
    document.getElementById("KhoaHoc").innerHTML = TTSV_default["studentKhoaHoc"];
    document.getElementById("Email").innerHTML = TTSV_default["studentEmail"];
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = TTSV_default["srcImage"];

    addButton.style.display = 'none';
    fileInput.style.display = 'none';
    console.log(TTSV_default);
}

function functionCancel() {
    createBG();
    addButton.style.display = 'none';
    fileInput.style.display = 'none';
    console.log(TTSV_new);
}







