# API_UserManagement
<h2>Config.env</h2>
  
<p>
  <b>Tạo file config.env và thêm nội dung</b> </br>
  </br>
  <i>
    PORT=3000
    MONGO_URI=mongodb+srv://quangnc:canhquang2001@cluster0.2kj7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  </i></br>
</p>
 
<h2>API routes:</h2>
  <h3>/api/users:</h3>
  <p>
    <b>get</b>: Hiển thị tất cả dữ liệu User từ cơ sở dữ liệu
    <b>post</b>: Tạo User mới
  </p></br>
  
  <h3>/api/user/:id<h3>
  <p>
    <b>put</b>: Cập nhật User đã tồn tại trên cơ sở dữ liệu
    <b>delete</b>: Xóa User
  </p></br>
  
  /api/user/?id=<userId>
    Dùng để hiển thị User theo Id
  
  
