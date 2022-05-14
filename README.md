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
 
API routes:
  <h4>/api/users:</h4>
    get: Hiển thị tất cả dữ liệu User từ cơ sở dữ liệu
    post: Tạo User mới
  
  /api/user/:id
    put: Cập nhật User đã tồn tại trên cơ sở dữ liệu
    delete: Xóa User
  
  /api/user/?id=<userId>
    Dùng để hiển thị User theo Id
  
  
