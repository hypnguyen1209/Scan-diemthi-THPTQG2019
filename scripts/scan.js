document.getElementById('scanner').addEventListener('click', scanner);
document.getElementById('down').addEventListener('click', download);
let list_id = '';
function download() {
    if (list_id == '') {
        document.getElementById('thong_bao').innerHTML = '<img src="/assets/img/error.png" style="width: 155px;">';
    } else {
        var textToWrite = list_id;
        var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
        var fileNameToSaveAs = 'list';
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        setTimeout(()=>{
            location.reload(true);
    
        }, 6000);
        if (window.URL != null)
        {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        }
        else
        {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
}
function get_data(id) {
        list_id += "SBD: "+id.result[0].Code+", Toán:"+id.result[0].Toan+", Ngữ Văn:"+id.result[0].NguVan+", Ngoại Ngữ:"+id.result[0].NgoaiNgu+", Vật Lý:"+id.result[0].VatLi+", Hóa Học:"+id.result[0].HoaHoc+", Sinh Học:"+id.result[0].SinhHoc+", KHTN:"+id.result[0].KHTN+", Địa Lý:"+id.result[0].DiaLi+", Lịch Sử:"+id.result[0].LichSu+", GDCD:"+id.result[0].GDCD+", KHXH:"+id.result[0].KHXH+" \n";
}
function scanner() {
    let start = document.getElementById('start').value;
    let stop = document.getElementById('stop').value;
    if (start != "" && stop != "" && start <= stop) {
        
        for (i = start; i <= stop; i++) {
            var str = i.toString();
            var count = str.length;
           if (count == 7) {
            document.getElementById('thong_bao').innerHTML = '<img src="https://lh4.ggpht.com/-4oJYoD4-chI/VuM0TGPbIwI/AAAAAAAAAOo/soBlFIXvZTw2ZzwqRqaU2ExX9pMiyFHwQ/s1600/seuaOqf.gif">';
            $.get(`https://diemthi.vnanet.vn/Home/SearchBySobaodanh?nam=2019&code=0${str}`)
            .done((ket_qua) => {
                get_data(ket_qua);
            })
            .fail((loi) => {
                document.getElementById('thong_bao').innerHTML = '<img src="/assets/img/error.png" style="width: 155px;">';
            });
        } else {
            document.getElementById('thong_bao').innerHTML = '<img src="https://lh4.ggpht.com/-4oJYoD4-chI/VuM0TGPbIwI/AAAAAAAAAOo/soBlFIXvZTw2ZzwqRqaU2ExX9pMiyFHwQ/s1600/seuaOqf.gif">';
            $.get(`https://diemthi.vnanet.vn/Home/SearchBySobaodanh?nam=2019&code=${str}`)
            .done((ket_qua) => {
                get_data(ket_qua);
            })
            .fail((loi) => {
                document.getElementById('thong_bao').innerHTML = '<img src="/assets/img/error.png" style="width: 155px;">';
            });
        }
    }
        setTimeout(()=>{
            document.getElementById('thong_bao').innerHTML = '<img src="/assets/img/done.png" style="width: 155px;">';
    
        }, 2000);
} else {
        document.getElementById('thong_bao').innerHTML = '<img src="/assets/img/error.png" style="width: 155px;">';
    }
}
