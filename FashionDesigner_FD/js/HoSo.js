
/** ====[JS FORM HIỆN KHUNG TRANG YÊU THÍCH]==== */
function showContent(buttonId) {
    var contentDiv = document.getElementById("content");
    switch (buttonId) {
        case 1:
            contentDiv.innerHTML = `
                <div class="gallery">
                    <img src="/image/1.jpg" alt="Hình ảnh 1">
                    <img src="/image/2.jpg" alt="Hình ảnh 2">
                    <img src="/image/3.jpg" alt="Hình ảnh 3">
                    <img src="/image/4.jpg" alt="Hình ảnh 4">
                    <img src="/image/5.jpg" alt="Hình ảnh 5">
                    <img src="/image/6.jpg" alt="Hình ảnh 6">
                    <img src="/image/7.jpg" alt="Hình ảnh 6">
                    <img src="/image/8.jpg" alt="Hình ảnh 6">
                    <img src="/image/9.jpg" alt="Hình ảnh 6">
                    <img src="/image/10.jpg" alt="Hình ảnh 6">

                    <img src="/image/1.jpg" alt="Hình ảnh 1">
                    <img src="/image/2.jpg" alt="Hình ảnh 2">
                    <img src="/image/3.jpg" alt="Hình ảnh 3">
                    <img src="/image/4.jpg" alt="Hình ảnh 4">
                    <img src="/image/5.jpg" alt="Hình ảnh 5">
                    <img src="/image/6.jpg" alt="Hình ảnh 6">
                    <img src="/image/7.jpg" alt="Hình ảnh 6">
                    <img src="/image/8.jpg" alt="Hình ảnh 6">
                    <img src="/image/9.jpg" alt="Hình ảnh 6">
                    <img src="/image/10.jpg" alt="Hình ảnh 6">
                </div>
            `;
            break;
        case 2:
            contentDiv.innerHTML = `
                <div class="gallery">
                    <img src="/image/6.jpg" alt="Hình ảnh 6">
                    <img src="/image/7.jpg" alt="Hình ảnh 6">
                    <img src="/image/8.jpg" alt="Hình ảnh 6">
                    <img src="/image/9.jpg" alt="Hình ảnh 6">
                    <img src="/image/10.jpg" alt="Hình ảnh 6">
                    <img src="/image/1.jpg" alt="Hình ảnh 1">
                    <img src="/image/2.jpg" alt="Hình ảnh 2">
                    <img src="/image/3.jpg" alt="Hình ảnh 3">
                    <img src="/image/4.jpg" alt="Hình ảnh 4">
                    <img src="/image/5.jpg" alt="Hình ảnh 5">
                </div>
            `;
            break;
        case 3:
            contentDiv.innerHTML = `
                <div class="gallery">
                    <img src="/image/a1.jpg" alt="Hình ảnh 1">
                    <img src="/image/a2.jpg" alt="Hình ảnh 2">
                    <img src="/image/a3.jpg" alt="Hình ảnh 3">
                    <img src="/image/a4.jpg" alt="Hình ảnh 4">
                </div>
            `;
            break;
        default:
            contentDiv.innerHTML = `
            <h2>Giao diện mặc định</h2>
            <p>Đây là giao diện mặc định được hiển thị khi trang được tải.</p>
        `;
    }
}